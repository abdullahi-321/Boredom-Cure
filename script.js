const body = document.querySelector("body")
window.addEventListener("keydown", (e) => {
  if (e.key == "Backspace") {
    body.lastChild.remove()
  } else if (e.key == "Delete") {
    body.innerHTML = ``
  } else {
    add(e.key)
  }
})
window.addEventListener("click", (e) => {
  add("Click")
})

function add(elem) {
  var text = document.createElement("button");
  text.innerHTML = `${elem}`;
  text.classList.add("class")
  body.appendChild(text);
  let rot = 0;
  text.onmouseover = ()=>{
    let myInt = setInterval(()=>{
      rot+=15
      text.style.transform = `rotateZ(${rot}deg)`
    }, 100)
    text.onmouseout = ()=>{
      clearInterval(myInt)
    }
  }
  let size = 0;
  text.addEventListener("click", ()=>{
    size++
    text.style.fontSize = `${size * 2}px`
  })
}
