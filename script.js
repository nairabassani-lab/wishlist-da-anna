// O JavaScript está vazio porque toda a funcionalidade de "clicar no item e redirecionar para o Pix"
// está sendo resolvida diretamente no HTML através da tag de link <a>:
//
// <a href="LINK_DO_PIX_NUBANK" class="product-link" target="_blank" rel="noopener">...</a>
//
// Isso torna o código mais simples, rápido e robusto para o GitHub Pages.

// Se você precisar adicionar alguma funcionalidade futura, como um contador de visualizações
// ou rastreamento de cliques, você pode adicionar o código aqui.

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página Wishlist carregada. O redirecionamento Pix está no HTML.");
});
