function display(val){
    document.getElementById("result").value+= val
}

function solve(){
    let x= document.getElementById("result").value
    let y= eval(x)
    document.getElementById('result').value= y
}

function clearscreen(){
    document.getElementById('result').value= ""
}

function del(){
let x= document.getElementById("result").value
let y= x.substring(0, x.length-1)
document.getElementById('result').value= y
}


const numbersOne = {k:1}
const numbersTwo={h:2}
const numbersCombined = {...numbersOne, ...numbersTwo}

console.log(numbersCombined)

