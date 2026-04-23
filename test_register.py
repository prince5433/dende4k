import requests
import json

url = "https://intern-6kkk.onrender.com/api/auth/register"
data = {
    "username": "testuser_ai",
    "email": "ai_test@example.com",
    "password": "password123"
}

try:
    response = requests.post(url, json=data, timeout=30)
    print(f"Status Code: {response.status_code}")
    print(f"Response Body: {response.text}")
except Exception as e:
    print(f"Error: {str(e)}")
