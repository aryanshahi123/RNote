let buttons = document.getElementsByClassName("buttons");

function setActiveSubject(activeSubject){
    if (activeSubject) {
        document.title=activeSubject;
        Array.from(buttons).forEach(button => {
            if (button.innerHTML.trim() === activeSubject) {
                button.classList.add("active");
                let frame = document.querySelector(".mainFrame");
                frame.src = `pdf/${activeSubject}.pdf`;
            } else {
                button.classList.remove("active");
            }
        });
    }
}


window.onload = function() {
    let activeSubject = localStorage.getItem("activeSubject");
    setActiveSubject(activeSubject);
};

Array.from(buttons).forEach(button=>{
    button.addEventListener("click", ()=>{
        let name = button.innerHTML.trim();
        if(name){
            localStorage.setItem("activeSubject", name);
            setActiveSubject(name);
        }
    })
})