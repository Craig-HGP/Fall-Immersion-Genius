// Get modal element
const modal = document.getElementById("myModal");

// Get buttons
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const alertBtn = document.getElementById("alertBtn");

// Open modal on button click
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Close modal on close button click
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Show alert on button click
alertBtn.onclick = function() {
    alert("This is a simple pop-up alert! Think about how much you learned today!!! GO HIDDEN GENIUS PROJECT!");
}