from flask import Flask
from .ai_controller import ai_bp
import os

def create_app():
    app = Flask(__name__)
    app.register_blueprint(ai_bp, url_prefix='/ai')
    return app