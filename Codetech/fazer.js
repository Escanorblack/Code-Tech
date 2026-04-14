

function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}



function handleSubmit(event) {
    event.preventDefault();
    
  
    const form = event.target;
    const name = form.querySelector('input[placeholder="Digite seu nome completo"]').value;
    const email = form.querySelector('input[placeholder="Email"]').value;
    const phone = form.querySelector('input[placeholder="WhatsApp"]').value;
    const company = form.querySelector('input[placeholder="Empresa"]').value;
    const message = form.querySelector('textarea').value;
    
  
    if (!name || !email || !phone || !company || !message) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    
    const mailtoLink = `mailto:mycaeleve2106@gmail.com?subject=Nova%20Mensagem%20de%20${encodeURIComponent(name)}&body=Nome:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AWhatsApp:%20${encodeURIComponent(phone)}%0AEmpresa:%20${encodeURIComponent(company)}%0A%0AMensagem:%0A${encodeURIComponent(message)}`;
    

    alert('Obrigado! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato!');
    

    form.reset();
    
    
}



window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});



const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);


document.querySelectorAll('.service-card, .process-step, .manifesto-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});



document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        
        document.querySelectorAll('.nav-menu a').forEach(l => l.classList.remove('active'));
     
        this.classList.add('active');
    });
});


// If you want to 5555wadd a mobile menu, uncomment and modify this section

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}



document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});



const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);



console.log('%c🚀 Tech Agency - Inovação Digital', 'font-size: 20px; color: #FF8C00; font-weight: bold;');
console.log('%cBem-vindo! Explore nossos serviços e entre em contato conosco.', 'font-size: 14px; color: #B0B0B0;');