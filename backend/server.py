import numpy as np
import pandas as pd
from disease import get_disease_info, generate_df
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import pickle

app = Flask(__name__)
CORS(app, supports_credentials=True)
model = pickle.load(open("model.pkl", "rb"))


@app.route("/api", methods=["POST", "GET"])
@cross_origin(supports_credentials=True)
def predict():
    data = request.get_json(force=True)
    x_pred = generate_df(data["symptoms"])
    prediction = model.predict(x_pred)
    output = prediction[0]
    info = get_disease_info(output)
    return jsonify(
        {
            "name": output,
            "description": info["description"],
            "precautions": info["precautions"],
            "image": info["image"],
            "doctors": info["doctors"],
            "symptoms": info["symptoms"],
        }
    )


@app.route("/", methods=["GET"])
def index():
    return "Machine Learning Inference"


if __name__ == "__main__":
    app.run(port=5000, debug=True)
