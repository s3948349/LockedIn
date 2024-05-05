from flask import Flask, jsonify, request
import subprocess
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/array": {"origins": "*"}})
# Allow all domains


@app.route("/execute")
def execute():
    # TODO change the script path and args
    script_path = ''
    arg1 = 'value1'
    arg2 = 'value2'
    # Execute the Python script with arguments
    try:
        result = subprocess.run(
            ['python', script_path, arg1, arg2], capture_output=True, text=True, check=True)
        stdout = result.stdout
        stderr = result.stderr
        return jsonify({'stdout': stdout, 'stderr': stderr})
    except subprocess.CalledProcessError as e:
        return jsonify({'error': str(e)})


@app.route("/array")
def array():
    result = []
    with open(r"../src/data/data.csv", 'r') as f:
        lines = f.readlines()[1:]
        for line in lines:
            line = line.strip().split(',')
            result.append(line)
    return jsonify(result)


@app.route("/write", methods=['POST'])
def write():
    name = request.json['name']
    uni = request.json['uni']
    discipline = request.json['discipline']
    level = request.json['level']
    goal = request.json['goal']
    platform = request.json['platform']
    preference = request.json['preference']

    with open(r"../src/data/data.csv", 'a', newline='') as f:
        f.write(
            f"{name},{uni},{discipline},{level},{goal},{platform},{preference}\n")
    return jsonify({'message': 'Data written successfully'})


if __name__ == '__main__':
    app.run(debug=True)
