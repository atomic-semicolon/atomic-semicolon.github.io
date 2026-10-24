/* ==========================================================================
    1. CANVAS ANIMATED PARTICLES BACKGROUND
    ========================================================================== */
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let mouse = { x: null, y: null, radius: 150 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    // Update glow cursor position
    const glow = document.getElementById('cursorFollower');
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.speedY = (Math.random() - 0.5) * 0.6;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        ctx.fillStyle = isLight ? 'rgba(2, 132, 199, 0.4)' : 'rgba(0, 242, 254, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const count = Math.floor((canvas.width * canvas.height) / 18000);
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 110) {
                const isLight = document.documentElement.getAttribute('data-theme') === 'light';
                ctx.strokeStyle = isLight 
                    ? `rgba(2, 132, 199, ${1 - distance / 110})` 
                    : `rgba(0, 242, 254, ${0.15 - distance / 1100})`;
                ctx.lineWidth = 0.6;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateCanvas);
}

resizeCanvas();
animateCanvas();

/* ==========================================================================
    2. THEME TOGGLE & SCROLL PROGRESS
    ========================================================================== */
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
});

window.addEventListener('scroll', () => {
    // Scroll Progress Bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollBar').style.width = scrolled + '%';

    // Navbar Scrolled Effect
    const nav = document.getElementById('navbar');
    if (window.scrollY > 40) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Reveal Elements
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add('active');
        }
    });
});

// Mobile Menu Drawer
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ==========================================================================
    3. TYPEWRITER EFFECT IN HERO
    ========================================================================== */
const roles = ["Enterprise Software Systems.", "AI Code Evaluation Pipelines.", "Scalable Cloud Architecture.", "Automated DevOps Workflows."];
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typewriterEl = document.getElementById('typewriter');

function typeEffect() {
    const currentRole = roles[roleIdx];
    if (isDeleting) {
        typewriterEl.textContent = currentRole.substring(0, charIdx - 1);
        charIdx--;
    } else {
        typewriterEl.textContent = currentRole.substring(0, charIdx + 1);
        charIdx++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentRole.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
}
typeEffect();

/* ==========================================================================
    4. TERMINAL CLI INTERACTION
    ========================================================================== */
const terminalOutput = document.getElementById('terminalOutput');
const terminalInput = document.getElementById('terminalInput');

const commands = {
    'help': 'Available commands:\n  • about      - Brief summary of my background\n  • skills     - Core technical stack\n  • experience - Job history & metrics\n  • contact    - Ways to reach out\n  • clear      - Clear terminal screen',
    'about': 'Aman Bhuyan | Software Engineer with 5 years experience in enterprise systems & cloud migrations. Currently pursuing M.Comp in Applied AI at NTU Singapore.',
    'skills': 'Languages: Python, C#, Go, JS, SQL\nFrameworks: .NET, Razor Pages, EF Core, React, HTMX, Alpine.js\nCloud/DevOps: Azure, Docker, GitHub Actions, CI/CD',
    'experience': '1. Mercor (2026): AI Code Reasoning Auditor\n2. WEHI (2021-2025): Software Engineer -> Developer -> Graduate Developer',
    'contact': 'Email: amanbhuyan20@gmail.com\nPhone: +65 8998 8314\nLinkedIn: linkedin.com/in/aman-bhuyan\nGitHub: github.com/atomic-semicolon'
};

function executeCmd(cmd) {
    const trimmed = cmd.trim().toLowerCase();
    
    // Append Command
    const cmdLine = document.createElement('div');
    cmdLine.className = 'terminal__line';
    cmdLine.innerHTML = `<span class="terminal__prompt">aman@dev:~$</span><span class="terminal__command">${cmd}</span>`;
    terminalOutput.appendChild(cmdLine);

    if (trimmed === 'clear') {
        terminalOutput.innerHTML = '';
    } else {
        const outLine = document.createElement('div');
        outLine.className = 'terminal__output';
        outLine.textContent = commands[trimmed] || `Command not found: '${cmd}'. Type 'help' for available commands.`;
        terminalOutput.appendChild(outLine);
    }

    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function handleTerminalSubmit(e) {
    e.preventDefault();
    const val = terminalInput.value;
    if (val.trim()) {
        executeCmd(val);
        terminalInput.value = '';
    }
}

/* ==========================================================================
    5. ANIMATED NUMERIC COUNTERS
    ========================================================================== */
let countersStarted = false;
function runCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 30;
        const update = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(update, 40);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
            runCounters();
            countersStarted = true;
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.metrics-grid'));

/* ==========================================================================
    6. FEATURED PROJECT ARCHITECTURE VISUALIZER
    ========================================================================== */
const nodeData = {
    1: "1. Upstream Open-Source Repos: Nightly automated job polls media configurations from multiple disparate YAML sources.",
    2: "2. Python Engine & RegEx Parser: Custom Python script processes differences, applies RegEx-based rule sets, and resolves schema conflicts seamlessly.",
    3: "3. Deployment Pipeline: Pushes normalized configuration to self-hosted media server stacks via GitHub Actions CI/CD."
};

function showNodeInfo(step) {
    document.querySelectorAll('.flow-node').forEach((node, idx) => {
        if (idx + 1 === step) node.classList.add('active');
        else node.classList.remove('active');
    });
    document.getElementById('nodeExplanation').textContent = nodeData[step];
}

/* ==========================================================================
    7. SEARCHABLE & FILTERABLE SKILLS MATRIX
    ========================================================================== */
const skillsData = [
    { name: 'Python', cat: 'languages', icon: '🐍' },
    { name: 'C#', cat: 'languages', icon: '⚡' },
    { name: 'Go', cat: 'languages', icon: '🐹' },
    { name: 'JavaScript', cat: 'languages', icon: '📜' },
    { name: 'SQL', cat: 'languages', icon: '🗄️' },

    { name: '.NET / Blazor', cat: 'frameworks', icon: '🔷' },
    { name: 'Razor Pages', cat: 'frameworks', icon: '📑' },
    { name: 'EF Core', cat: 'frameworks', icon: '🔗' },
    { name: 'React', cat: 'frameworks', icon: '⚛️' },
    { name: 'HTMX / Alpine', cat: 'frameworks', icon: '🚀' },

    { name: 'Azure App Service', cat: 'cloud', icon: '☁️' },
    { name: 'Docker', cat: 'cloud', icon: '🐳' },
    { name: 'GitHub Actions', cat: 'cloud', icon: '🤖' },
    { name: 'GitHub Copilot', cat: 'cloud', icon: '💡' },

    { name: 'PostgreSQL', cat: 'databases', icon: '🐘' },
    { name: 'SQL Server', cat: 'databases', icon: '💾' },
    { name: 'Power BI / DAX', cat: 'databases', icon: '📊' },
    { name: 'SQLite', cat: 'databases', icon: '📦' }
];

let currentCat = 'all';

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    const searchVal = document.getElementById('skillSearch').value.toLowerCase();
    grid.innerHTML = '';

    const filtered = skillsData.filter(s => {
        const matchesCat = currentCat === 'all' || s.cat === currentCat;
        const matchesSearch = s.name.toLowerCase().includes(searchVal);
        return matchesCat && matchesSearch;
    });

    filtered.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-cat">${skill.cat}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.getElementById('skillTabs').addEventListener('click', (e) => {
    if (e.target.classList.contains('tab-btn')) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        currentCat = e.target.getAttribute('data-cat');
        renderSkills();
    }
});

function filterSkills() {
    renderSkills();
}

renderSkills();

/* ==========================================================================
    8. TOAST NOTIFICATION & UTILS
    ========================================================================== */
function copyToClipboard(text, msg) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('toast');
        document.getElementById('toastMessage').textContent = msg;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    });
}

document.getElementById('year').textContent = new Date().getFullYear();

// Initial trigger for reveals
window.dispatchEvent(new Event('scroll'));