
// Pesquisa global

document.addEventListener('DOMContentLoaded', () => {
    const inputGlobal = document.getElementById('pesquisar-global');
    
    if (inputGlobal) {
        
        function redirecionarParaBusca(event) {
            
            if (event.key === 'Enter' || event.type === 'click' || !event.key) {
                
                if (event.preventDefault) {
                    event.preventDefault();
                }

                const termo = inputGlobal.value.trim();
                const termoCodificado = encodeURIComponent(termo);

                const caminhoBase = 'jogos.html'; 
                    
                window.location.href = termo === '' 
                    ? caminhoBase 
                    : `${caminhoBase}?q=${termoCodificado}`;
            }
        }

        inputGlobal.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                redirecionarParaBusca(event);
            }
        });
        
    }
});

 const dataAtual = new Date();
 const anoAtual = dataAtual.getFullYear();
 document.getElementById('ano').textContent = anoAtual;
 function clickMobile() { if( itens.style.display == 'block'){ itens.style.display = 'none'
}else{itens.style.display = 'block'} }