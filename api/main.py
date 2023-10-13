import requests as req
from fastapi import FastAPI, HTTPException , Request, Body 
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

origins = [
    "*",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/url/{url}")
def read_url(request:Request, url:str):
    filter_url = url.replace("%~%", "/")
    print(url, filter_url)
    r = req.get(filter_url)
    return {"url": filter_url,
            "status_code": r.status_code,
            "content": r.content.decode("utf-8")
            }

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, reload=True)

