document.addEventListener('DOMContentLoaded', () => {

    lucide.createIcons();


    gsap.registerPlugin(ScrollTrigger);


    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: "top 85%",
            onEnter: () => section.classList.add('is-visible')
        });
    });


    gsap.from('#hero h1', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power4.out"
    });

    gsap.from('.hero-image-container', {
        opacity: 0,
        scale: 1.05,
        duration: 2,
        ease: "power2.out"
    });


    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = "Sending...";
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = "Message Sent!";
                btn.classList.replace('bg-white', 'bg-green-500');
                btn.classList.add('text-white');
                form.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.replace('bg-green-500', 'bg-white');
                    btn.classList.remove('text-white');
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 64, // Subtract nav height
                    behavior: 'smooth'
                });
            }
        });
    });


    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 20) {
            nav.classList.add('shadow-sm');
        } else {
            nav.classList.remove('shadow-sm');
        }
    });
});
