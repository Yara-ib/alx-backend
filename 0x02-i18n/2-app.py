#!/usr/bin/env python3
""" Get locale from request Module """
from flask import Flask, render_template, request
from flask_babel import Babel

app = Flask(__name__)


class Config:
    """Config class"""

    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_TIMEZONE = "UTC"
    BABEL_DEFAULT_LOCALE = "en"


babel = Babel(app)
app.config.from_object(Config)


@babel.localeselector
def get_locale() -> str:
    """Get locale from request"""
    return request.accept_languages.best_match(app.config["LANGUAGES"])


@app.route("/", strict_slashes=False)
def home_page() -> str:
    """
    Basic Flask app

    Returns:
        str: Hello world as header in html page
    """
    return render_template("1-index.html")


if __name__ == "__main__":
    app.run()
