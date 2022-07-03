const form = document.querySelector(".form");

form.addEventListener("submit", e => {
    e.preventDefault();

    const emailValue = form["email"].value;

    if (!isValid(emailValue)) {
        form.classList.add("error");
    } else {
        form.classList.remove("error");
    }
});

function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}