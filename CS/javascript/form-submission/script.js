document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Grabbing the values of the input fields from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Using backticks for template literals
            alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        } else {
            alert("Please fill all the fields");
        }
    });
});