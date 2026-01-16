const nameD = document.getElementById("name")
const ageD = document.getElementById("age")
const pyThon = document.getElementById("python")
const javaScript = document.getElementById("javascript")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

btn.addEventListener("click", display)

function display(){
    let name = String(nameD.value);
    let age = ageD.value
    let knownLangueges = ""

    if(pyThon.checked && !javaScript.checked){
        knownLangueges = "only know Python"
    }else if(!pyThon.checked && javaScript.checked){
        knownLangueges = "only know JavaScript"
    }else if(pyThon.checked && javaScript.checked){
        knownLangueges = "know both Python & Javascript"
    }else{
        knownLangueges = "dont know both Python & Javascript."
    }

    output.textContent = `My name is ${name}.
    I'm ${age} years old.
    I ${knownLangueges}.`
     
}