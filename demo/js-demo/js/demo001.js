let box001 = document.getElementById("box001")
let btn001 = document.getElementById("btn001")
let color = document.getElementById("color")
btn001.onclick = function () {
    box001.style.backgroundColor = myColor()
    color.value = myColor()
    console.log(myColor())
}

function myColor() {
    let r0 = getRandom()
    let r1 = getRandom()
    let g0 = getRandom()
    let g1 = getRandom()
    let b0 = getRandom()
    let b1 = getRandom()
    return "#"+r0+r1+g0+g1+b0+b1
}

function getRandom() {
    let arr = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
    let i = parseInt(Math.random()*16)
    return arr[i]
}