#!/usr/bin/env python3
""" Basic Babel setup Module """


from flask import Flask, render_template
from flask_babel import Babel

app = Flask(__name__)


class Config:
    """class Config"""

    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app.config.from_object(Config)
babel = Babel(app)


@app.route("/")
def home_page() -> str:
    """
    Basic Flask app

    Returns:
        str: Hello world as header in html page
    """
    return render_template("1-index.html")
