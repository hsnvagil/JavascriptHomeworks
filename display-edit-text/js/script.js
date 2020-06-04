document.body.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.which === 83) {
        event.preventDefault();
        saveText();

    }
    if (event.ctrlKey && event.which === 69) {
        event.preventDefault();
        editText();
    }
})

let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1 500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
document.querySelector("textarea").value = document.getElementById("text").textContent;

function editText() {
    document.querySelector("textarea").style.display = "block";
    document.getElementById("text").style.display = "none";
}

function saveText() {
    document.querySelector("textarea").style.display = "none";
    document.getElementById("text").textContent = document.querySelector("textarea").value;
    document.getElementById("text").style.display = "block";
}