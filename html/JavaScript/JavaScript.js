// Implement event listener for a button
let button = document.getElementById("button");
button.addEventListener("click", dark_mode);

// Implement dark mode function
function dark_mode()
{
    
    let element = document.body;
    element.classList.toggle("dark");
}