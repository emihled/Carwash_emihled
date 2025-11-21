const modal = document.querySelector(".modal");
const reDo = document.querySelector(".btn")

//xa singena, mayibe ngekho
function dismissModal() {
    modal.style.display = "none"
}
dismissModal()

//log in
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("uname").value.trim();
    const password = document.getElementById("pwd").value.trim();
    if (username === "Mangaliso Robert Sobukwe" && password === "7750") {
        window.location.href = "index.html";
    }
    else {
        modal.style.display = "block"
    }
});

//xa siyicofa mayisuke
function dismissModal()
{
    modal.style.display = "none";
}




function toggleNav() 
{
    const sidebar = document.querySelector(".nav-sidebar");
    const sidebarLinks = document.querySelector(".nav-sidebar ul");

    // Check whether sidebar is currently open
    if (sidebar.style.width === "250px") 
        {
        // Close it
        sidebar.style.width = "50px";
        sidebarLinks.style.visibility = "hidden";
        } 
    else 
        {
        // Open it
        sidebar.style.width = "250px";
        sidebarLinks.style.visibility = "visible";
        }
}


