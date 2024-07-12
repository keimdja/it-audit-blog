document.addEventListener('DOMContentLoaded', () => {
    console.log("Blog page loaded successfully!");

    // Add click event listeners to the tool links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default behavior
            event.preventDefault();

            // Get the corresponding section ID
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Remove pulsing class from all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('pulsing');
            });

            // Add pulsing class to the target section
            if (targetSection) {
                targetSection.classList.add('pulsing');

                // Scroll to the target section smoothly
                targetSection.scrollIntoView({ behavior: 'smooth' });

                // Remove pulsing class after animation completes (1 second)
                setTimeout(() => {
                    targetSection.classList.remove('pulsing');
                }, 1000);
            }
        });
    });
});
