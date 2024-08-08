# app/__init__.py
from flask import Flask
from firebase_admin import credentials, initialize_app, firestore
import os


def create_app():
    app = Flask(__name__)

    cred_path = os.getenv('FIREBASE_CREDENTIALS', 'firebase-credentials.json')
    cred = credentials.Certificate(cred_path)
    initialize_app(cred)

    # Initialize Firestore DB
    db = firestore.client()

    from .routes import main
    app.register_blueprint(main)

    return app
