import os
import time
from dotenv import load_dotenv

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.output_parsers import StrOutputParser
from rich.console import Console
from rich.text import Text

from prompts import agri_info_prompt_temp   

if os.getenv("RAILWAY_ENV") != "production":
    load_dotenv()

api_key = os.getenv("GOOGLE_API_KEY")
assert api_key, "No GOOGLE_API_KEY found! Define it in .env locally or as env variable on Railway."

llm = ChatGoogleGenerativeAI(model="gemini-1.5-pro-latest")

console = Console()

console.print(f"[bold green]Hello! How can I assist you with farming today?[/bold green]")

# Chain: prompt ➜ LLM (stream)
chain = agri_info_prompt_temp | llm | StrOutputParser()

def print_slow(text, delay=0.008):
    styled_text = Text(text, style="white")
    for char in styled_text.plain:
        console.print(char, end="", style="white", soft_wrap=True, highlight=False)
        time.sleep(delay)
    print()

# ----------------------------
# Conversation loop
# ----------------------------
history = []

if __name__ == "__main__":
    console.print("\n🌱 [bold yellow]AgriBot ready![/bold yellow] Type '[green]exit[/green]' or '[green]quit[/green]' to stop.\n")

    while True:
        user_input = input("👨‍🌾 You: ").strip()
        if user_input.lower() in ["exit", "quit"]:
            console.print("\n👋 [bold green]Goodbye! Wishing you healthy crops and good harvests![/bold green]\n")
            break

        formatted_history = "\n".join(f"{msg['role']}: {msg['content']}" for msg in history) or "None"

        inputs = {
            "chat_history": formatted_history,
            "user_input": user_input
        }

        console.print("\n✅ [bold green]AgriBot:[/bold green]\n")
        output_text = ""
        for chunk in chain.stream(inputs):
            print_slow(chunk)
            output_text += chunk

        history.append({"role": "human", "content": user_input})
        history.append({"role": "ai", "content": output_text})

        console.print("\n[grey]Keep asking your farming questions! Type 'exit' or 'quit' to stop.[/grey]\n")


"""
TO-DO:
- Add Hinglish (farmers friendly language option)
- Add more agriculture-related few-shot prompts
- Streamlit/Gradio app for better UI
- Add basic error handling (like empty input, invalid question)
"""
