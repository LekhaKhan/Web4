function getRandomHex(){
    return "#" + Math.floor(Math.random()*16777215).toString(16)
}
function clr1(e){
    e.target.style.color=getRandomHex()
    e.target.style.backgroundColor=getRandomHex()
}
function clr2(e){
    e.target.style.color=getRandomHex()
    e.target.style.backgroundColor=getRandomHex()
}
function zoom(e){
    var el = document.querySelector("#фото")
    if (el != null){
        el.height += 30
        el.width += 30
    }
}
function unzoom(e){
    var el = document.querySelector("#фото")
    if (el != null){
        el.height -= 30
        el.width -= 30
    }
}
function add(e){
    if (document.querySelector("#фото") == null){
        var el = document.createElement("img")
        el.id="фото"
        el.src="Верховина.jpg"
        document.body.appendChild(el)
    }
}
function del(e){
    var el = document.querySelector("#фото")
    if (el != null){
        document.body.removeChild(el)
    }
}
document.getElementById("Валік").addEventListener("click", clr1)
document.querySelector("#мемеси").addEventListener("click", clr2)
document.querySelector("#zoom").addEventListener("click", zoom)
document.querySelector("#unzoom").addEventListener("click", unzoom)
document.querySelector("#add").addEventListener("click", add)
document.querySelector("#del").addEventListener("click", del)