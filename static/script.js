document.getElementById("calcBtn").addEventListener("click", ()=> {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    if (!name1 || !name2){
        alert("Please enter the names!");
        return;
    }
    fetch("/calculate", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name1, name2})
    })
    .then(res => res.json())
    .then(data => showResult(name1, name2, data.result));
});

function showResult(n1, n2, code){
    const resultDiv = document.getElementById("result");
    const mapping = {
        "L": ["Love ❤️", "result-love"],
        "F": ["Friends 🤝", "result-friends"],
        "A": ["Affection 🥰", "result-love"],
        "M": ["Marriage 💍", "result-marriage"],
        "E": ["Enemy 😠", "result-enemy"],
        "S": ["Siblings 👫", "result-siblings"]
    };
    let [text, className] = mapping[code];

    resultDiv.className = `result-card ${className}`;
    resultDiv.innerHTML = `${n1} & ${n2}: <strong>${text}</strong>`;
    resultDiv.style.display = 'block';
    Array.from(document.getElementsByClassName("history")).forEach(element => element.style.display = 'block');

    saveHistory(n1, n2, text);
    loadHistory();
}

document.getElementById("resetBtn").addEventListener("click", ()=> {
    document.getElementById("name1").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("result").style.display = "none";
});

function saveHistory(n1, n2, res){
    let list = JSON.parse(sessionStorage.getItem("flamesHistory") || "[]");
    list.push({n1, n2, res});
    sessionStorage.setItem("flamesHistory", JSON.stringify(list));    
}

function loadHistory(){
    let div = document.getElementById("history");
    let list = JSON.parse(sessionStorage.getItem("flamesHistory") || "[]");

    div.innerHTML = "";
    list.forEach(element => {
        div.innerHTML += `<div class="history-item">${element.n1} & ${element.n2}: ${element.res}</div>`;
    });
}
window.addEventListener("load", ()=> {
    sessionStorage.removeItem("flamesHistory");
    document.getElementsByClassName("history").style.display = "none";
    Array.from(document.getElementsByClassName("history")).forEach(element => element.style.display = 'block');
    loadHistory();
})

loadHistory();