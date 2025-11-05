function setupTabs() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const sections = document.querySelectorAll("section");

    tabButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            const targetId = this.getAttribute('data-target');

            if (targetId === 'inicio') {
                sections.forEach(section => {
                    section.style.display = 'block'; 
                });
                window.scrollTo({ top: 0, behavior: 'smooth' });

            } else {
                sections.forEach(section => {
                    section.style.display = 'none'; 
                });
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = 'block'; 
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

setupTabs();


window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar"); 
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
});