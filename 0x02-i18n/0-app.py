#!/usr/bin/env python3
""" Basic Flask app Module """
from flask import Flask, render_template
from flask_babel import Babel

app = Flask(__name__)


@app.route("/")
def home_page() -> str:
    """
    Basic Flask app

    Returns:
        str: Hello world as header in html page
    """
    return render_template("0-index.html")
