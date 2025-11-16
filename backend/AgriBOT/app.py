import os
from typing import Optional, List, Literal
import re

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from fastapi.responses import JSONResponse

from main import chain as agri_chain  # your AgriBot chain

# -----------------------------
# Load environment variables
# -----------------------------
# Only load local .env if not running on Railway
if os.getenv("RAILWAY_ENV") != "production":
    load_dotenv()

api_key = os.getenv("GOOGLE_API_KEY")
if not api_key:
    raise RuntimeError("No GOOGLE_API_KEY found! Define it in .env locally or as env variable on Railway.")

chain = agri_chain

# -----------------------------
# Data Models
# -----------------------------
class ChatMessage(BaseModel):
    role: Literal["human", "ai"]
    content: str

class SimpleRequest(BaseModel):
    user_input: str = Field(..., min_length=1)

class ChatResponse(BaseModel):
    output: str

# -----------------------------
# Utility Functions
# -----------------------------
def _format_history(history: Optional[List[ChatMessage]]) -> str:
    if not history:
        return "None"
    return "\n".join(f"{msg.role}: {msg.content}" for msg in history)

# -----------------------------
# FastAPI App
# -----------------------------
app = FastAPI(title="AgriBot API", version="1.0.0")

# Health check
@app.get("/health")
def health() -> JSONResponse:
    return JSONResponse({"status": "ok"})

# Simple chat endpoint
@app.post("/chat/simple", response_model=ChatResponse)
def chat_simple(req: SimpleRequest) -> ChatResponse:
    try:
        inputs = {
            "chat_history": "None",
            "user_input": req.user_input.strip(),
        }
        # Generate output from chain
        output_text = "".join(chunk for chunk in chain.stream(inputs))

        # Clean the output
        output_text = re.sub(r'\s+', ' ', output_text).strip()

        return ChatResponse(output=output_text)
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
