from flask import Flask, render_template, jsonify, request
from flames import flames

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/flames", methods=["POST"])
def flames_route():
    data = request.get_json()
    name1 = data["name1"]
    name2 = data["name2"]
    result = flames(name1, name2)
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True)
    