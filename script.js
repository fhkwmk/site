// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona o item da lista pelo ID que criamos
    const jsItem = document.getElementById('js-skill');

    // Adiciona o evento de clique
    jsItem.addEventListener('click', () => {
        
        // 1. Efeito visual: Faz o texto crescer e girar
        jsItem.style.color = '#f7df1e'; // Cor oficial do JS
        jsItem.style.fontWeight = 'bold';
        jsItem.style.transform = 'scale(1.5) rotate(360deg)';
        jsItem.style.textShadow = '2px 2px 10px rgba(0,0,0,0.5)';

        // 2. Mensagem lúdica
        setTimeout(() => {
            alert("🚀 POW! Você acaba de ativar o poder do JavaScript no seu navegador!");
            
            // 3. Reseta o estilo após o alerta para poder clicar de novo
            jsItem.style.transform = 'scale(1) rotate(0deg)';
            jsItem.style.color = ''; 
            jsItem.style.textShadow = 'none';
        }, 500); // Aguarda meio segundo para o giro completar antes do alerta
    });
});