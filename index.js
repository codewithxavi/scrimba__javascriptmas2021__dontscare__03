const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")

btn.addEventListener("click", fix)

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
  greeting.textContent = "ππ» Christmassy! ππππππ"
}


//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Yearβs one automatically on December 31st.







