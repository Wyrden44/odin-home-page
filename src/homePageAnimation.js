const roles = [
    "Software Developer",
    "Full Stack Web Dev",
    "Entrepreneur",
    "Problem Solver"
]

const container = document.getElementById("changing-roles");
let i = 0;

setInterval(() => {
    container.classList.add("fade-out");

    setTimeout(() => {
        i = (i + 1) % roles.length;

        container.textContent = roles[i];

        container.classList.remove("fade-out");
        container.classList.add("fade-in");
        
        setTimeout(() => { container.classList.remove("fade-in") }, 600)
    }, 600);
}, 5000);