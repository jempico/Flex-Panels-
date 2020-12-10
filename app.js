let p_child = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle('open');
}

p_child.forEach(element => element.addEventListener("click", toggleOpen));


