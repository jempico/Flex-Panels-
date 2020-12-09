let p_child = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive() {
console.log('Hello');    
}

p_child.forEach(element => element.addEventListener("click", toggleOpen));
p_child.forEach(element => element.addEventListener("transitionend", toggleActive));


