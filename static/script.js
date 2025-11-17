async function sendToBackend(){

    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    const response = await fetch("/flames", {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({name1, name2})
    });
    const data = await response.json();
    document.getElementById("result").innerText = "Result: "+data.result;

}