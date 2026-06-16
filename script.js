function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

function showDetails(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    alert(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );
}