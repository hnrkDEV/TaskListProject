function addItem(){
    nome = document.getElementById("resposta").value;
    console.log(nome)
    const taskList = document.getElementById("lista")
    taskList.innerHTML += `<li>${nome}</li>`
    document.getElementById("resposta").value = ""
}

