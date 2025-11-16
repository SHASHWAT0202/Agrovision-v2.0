import speech_recognition as sr
import pyttsx3
import time
import cv2
import requests
from PIL import Image
import io
import os

# Path to your plant image
DEFAULT_IMAGE_PATH = r"C:\SWAYAMs\PROJ\Plants_Identification\Data\mango\mango816.jpg"

def speak(text):
    """Convert text to speech using a fresh TTS engine each time."""
    print(f"🤖 {text}")
    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    if len(voices) > 1:
        engine.setProperty('voice', voices[1].id)  # Female if available
    engine.setProperty('rate', 150)
    engine.setProperty('volume', 1.0)
    engine.say(text)
    engine.runAndWait()
    engine.stop()
    time.sleep(0.2)

def load_image_from_path(image_path):
    """Load image from file path"""
    try:
        image = Image.open(image_path).convert('RGB')
        return image
    except Exception as e:
        print(f"Error loading image: {e}")
        return None

def predict_plant(image):
    """Send image to pre-built model API and get prediction"""
    API_ENDPOINT = "https://web-production-b516.up.railway.app/predict"
    
    img_byte_arr = io.BytesIO()
    image.save(img_byte_arr, format='PNG')
    img_byte_arr = img_byte_arr.getvalue()
    
    try:
        files = {'file': ('image.png', img_byte_arr, 'image/png')}
        response = requests.post(API_ENDPOINT, files=files)
        
        if response.status_code == 200:
            result = response.json()
            predicted_class = result.get('predicted_class', 'Unknown plant')
            return predicted_class
        else:
            return None
    except Exception as e:
        print(f"Error connecting to the prediction service: {str(e)}")
        return None

def listen():
    """Listen to voice input and convert to text"""
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("🎙️ Listening...")
        recognizer.adjust_for_ambient_noise(source, duration=0.5)
        audio = recognizer.listen(source)

    try:
        print("🔍 Recognizing...")
        text = recognizer.recognize_google(audio)
        print(f"🗣️ You said: {text}")
        return text
    except sr.UnknownValueError:
        print("❌ Could not understand audio.")
        return None
    except sr.RequestError as e:
        print(f"⚠️ Could not request results; {e}")
        return None

def main():
    speak("Hello! I'm your plant prediction assistant. Say 'Predict the plant' to analyze the image, or 'exit' to quit.")
    
    image = load_image_from_path(DEFAULT_IMAGE_PATH)
    if not image:
        speak(f"Error: Cannot load image at {DEFAULT_IMAGE_PATH}. Please check the path.")
        return

    while True:
        user_input = listen()
        if user_input:
            command = user_input.lower()

            if command in ["exit", "stop", "quit"]:
                speak("Goodbye!")
                break

            elif "predict" in command and "plant" in command:
                speak("Analyzing the plant image, please wait...")
                predicted_class = predict_plant(image)
                
                if predicted_class:
                    final_message = f"The predicted class is {predicted_class}."
                else:
                    final_message = "Sorry, I could not predict the plant. Please try again."
                
                speak(final_message)

            else:
                speak("Say 'Predict the plant' to analyze the plant, or 'exit' to quit.")
        
        time.sleep(1)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n🛑 Program stopped manually.")
