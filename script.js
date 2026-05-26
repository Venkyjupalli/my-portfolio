/* ============================================
   JUPALLE VENKAT | PORTFOLIO — script.js
   ============================================ */

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    const isOpen = menu.style.display === 'block';

    if (isOpen) {
        menu.style.display = 'none';
        hamIcon.style.display = 'inline-block';
        crossIcon.style.display = 'none';
    } else {
        menu.style.display = 'block';
        hamIcon.style.display = 'none';
        crossIcon.style.display = 'inline-block';
    }
});

// Close menu when a nav link is clicked
document.querySelectorAll('.menu-list-items a').forEach(link => {
    link.addEventListener('click', () => {
        menu.style.display = 'none';
        hamburger.querySelector('.hamburger-icon').style.display = 'inline-block';
        hamburger.querySelector('.cross-icon').style.display = 'none';
    });
});

// ===== TYPEWRITER EFFECT =====
const roles = [
    'Aspiring Data Analyst 📊',
    'Full Stack Developer 🚀',
    'Power BI Enthusiast 📈',
    'Python Developer 🐍',
    'SQL Query Expert 🗄️',
    'Problem Solver 💡'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter');

function typeWriter() {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 90;

    if (!isDeleting) {
        typeEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1800);
            return;
        }
    } else {
        typeEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(typeWriter, speed);
}

typeWriter();

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        navbar.style.background = 'rgba(5, 11, 20, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
        navbar.style.background = 'rgba(5, 11, 20, 0.85)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu-list-items a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });

    navLinks.forEach(link => {
        link.style.color = '';
        link.style.background = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--accent)';
            link.style.background = 'var(--accent-glow)';
        }
    });
});

// ===== SCROLL REVEAL (Intersection Observer) =====
const revealEls = document.querySelectorAll(
    '.port-card, .service-card, .skill-category, .contact-info-item, .detail-row'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${i * 0.08}s`;
            entry.target.style.animation = 'fadeInUp 0.6s ease both';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealEls.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== CONTACT FORM HANDLER =====
function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-btn');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = '#22c55e';
        btn.style.borderColor = '#22c55e';
        e.target.reset();

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.disabled = false;
        }, 3000);
    }, 1500);
}

// ===== SMOOTH CURSOR GLOW (optional desktop effect) =====
if (window.innerWidth > 820) {
    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed; pointer-events: none; z-index: 9999;
        width: 300px; height: 300px; border-radius: 50%;
        background: radial-gradient(circle, rgba(14,165,233,0.04) 0%, transparent 70%);
        transform: translate(-50%, -50%); transition: left 0.15s, top 0.15s;
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
}

console.log('%c👋 Hey, I\'m Jupalle Venkat!', 'color:#0ea5e9;font-size:18px;font-weight:bold;');
console.log('%c📊 Data Analyst | 💻 Full Stack Dev | 🚀 Open to Opportunities', 'color:#94a3b8;font-size:13px;');
console.log('%c📧 jupallivenkat634@gmail.com', 'color:#0ea5e9;font-size:12px;');
