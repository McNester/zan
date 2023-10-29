function runPythonCode() {
    fetch('/run_python', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: "Hello from frontend!" })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.result);
    });
}


document.getElementById('submitButton').addEventListener('click', runPythonCode);