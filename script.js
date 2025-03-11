let subjects = document.getElementsByClassName("subject");

Array.from(subjects).forEach(sub => {
    sub.addEventListener("click", () => {
        localStorage.setItem("activeSubject", sub.getAttribute("name")); // Store active subject
        window.location.href = "page.html"; // Navigate to new page
    });
});