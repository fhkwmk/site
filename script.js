document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito na habilidade JavaScript
    const jsItem = document.getElementById('js-skill');
    jsItem.addEventListener('click', () => {
        jsItem.style.color = '#f7df1e';
        jsItem.style.transform = 'scale(1.5) rotate(360deg)';
        
        setTimeout(() => {
            alert("🚀 POW! Você acaba de ativar o poder do JavaScript no seu navegador!");
            jsItem.style.transform = 'scale(1) rotate(0deg)';
            jsItem.style.color = ''; 
        }, 500);
    });

    // 2. Efeito de Confetes no Título (Easter Egg)
    const headerTitle = document.querySelector('.header h1');
    headerTitle.style.cursor = 'pointer';

    headerTitle.addEventListener('click', () => {
        const cores = ['#40e0d0', '#d35400', '#f7df1e', '#ffffff', '#1a0033'];
        for (let i = 0; i < 50; i++) {
            criarConfete(cores);
        }
    });

    function criarConfete(cores) {
        const confete = document.createElement('div');
        confete.style.position = 'fixed';
        confete.style.zIndex = '9999';
        confete.style.width = Math.random() * 10 + 5 + 'px';
        confete.style.height = confete.style.width;
        confete.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
        confete.style.left = Math.random() * 100 + 'vw';
        confete.style.top = '-10px';
        confete.style.borderRadius = '50%';
        document.body.appendChild(confete);

        const animacao = confete.animate([
            { transform: 'translateY(0) rotate(0)', opacity: 1 },
            { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], { duration: 3000, easing: 'ease-out' });

        animacao.onfinish = () => confete.remove();
    }
});