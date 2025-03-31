// scripts.js
const produtos = [
    { "imagem": "https://i.postimg.cc/y8zFbJBf/IMG-1144.png", "nome": "Macacão rosa nuvens com pé", "descricao": "Macacão rosa nuvens com botão com pé, leve e confortável", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/mrjNMTvm/IMG-1145.png", "nome": "Macacão branco bolinhas Onesies com pé", "descricao": "Macacão Onesis com zipper, leve e confortável", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/j5j64GKt/IMG-1150.png", "nome": "Macacão listrado GAP com pé", "descricao": "Macacão de botão, estiloso e confortável", "tamanho": "3-4 meses", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/HxPwZBs5/IMG-1152.png", "nome": "Macacão amarelo", "descricao": "Macacão de botão amarelo, prático", "tamanho": "6-9 meses", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/FzMjmzSH/IMG-1154.png", "nome": "Macacão Carters com pé cinza", "descricao": "Macacão Carters com pé de botão", "tamanho": "6 meses", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/nLpGCXPs/IMG-1146.png", "nome": "Macacão Carters com pé rosa", "descricao": "Macacão Carters com pé de zipper", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/XvjzBjHv/IMG-1181.png", "nome": "Macacão branco carters de botão", "descricao": "Macacão branco carters de botão", "tamanho": "3 meses", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/y6grZrP0/IMG-1186.png", "nome": "Macacão azul Ralph Loren de botão", "descricao": "Macacão azul Ralph Loren de botão", "tamanho": "6 meses", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/jqm6yg1Y/IMG-1158.png", "nome": "Body rosa de botão", "descricao": "Body rosa de botão", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/RVt7d1r6/IMG-1159.png", "nome": "Body vermelho de botão", "descricao": "Body vermelho de botão: Meu primeiro Natal", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/zGSnZJGq/IMG-1161.png", "nome": "Macacão rosa de botão", "descricao": "Macacão rosa de botão", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/KY0BjJTV/IMG-1164.png", "nome": "Macacão borboletas de zipper Carters", "descricao": "Macacão borboletas de zipper Carters", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/1t46qwcz/IMG-1166.png", "nome": "Macacão coelhinho de zipper Onsies", "descricao": "Macacão coelhinho de zipper Onsies", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/QM8cjRF1/IMG-1163.png", "nome": "Body branco balão", "descricao": "Body branco balão", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/tTf6tJ2N/IMG-1168.png", "nome": "Body azul rosas de botão", "descricao": "Body azul rosas de botão", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/K4hgwVXK/IMG-1170.png", "nome": "Body vermelho rosas de botão", "descricao": "Body vermelho rosas de botão", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/v8kk2dBP/IMG-1171.png", "nome": "Body rosa manga longa de botão", "descricao": "Body rosa manga longa de botão", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/NfXVWP2Q/IMG-1172.png", "nome": "Body marom Robot de botão", "descricao": "Body marom Robot de botão", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/DwKDFd1L/IMG-1174.png", "nome": "Body rosa animais de botão", "descricao": "Body rosa animais de botão", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/GmJfp8jN/IMG-1177.png", "nome": "Body rosa coelhão de botão", "descricao": "Body rosa coelhão de botão", "tamanho": "RN", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/VNKHjxpW/IMG-1179.png", "nome": "Swaddle (saco de dormir) rosa de velcro", "descricao": "Swaddle rosa (saco de dormir) de velcro", "tamanho": "RN", "preco": "R$ 35,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/3RWf9LH5/IMG-1184.png", "nome": "Body azul de botão", "descricao": "Body azul de botão", "tamanho": "3-6 meses", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/y6grZrP0/IMG-1186.png", "nome": "Macacão azul Ralph Loren de botão", "descricao": "Macacão azul Ralph Loren de botão", "tamanho": "6 meses", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/kM0YFF1z/IMG-1189.png", "nome": "Conjunto vestido e calcinha vermelha com bolinhas", "descricao": "Conjunto vestido e calcinha vermelha com bolinhas", "tamanho": "6 meses", "preco": "R$ 20,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/nhZdNVt1/IMG-1190.png", "nome": "Livro de pano sensorial dupla face com espelho", "descricao": "Livro de pano sensorial dupla face com espelho", "tamanho": "-", "preco": "R$ 30,00", "whatsapp": "5521997070112" },
    { "imagem": "https://i.postimg.cc/5NYwNhfF/mobly.jpg", "nome": "Mobile para carrinho ou bebê conforto", "descricao": "Mobile para carrinho ou bebê conforto", "tamanho": "-", "preco": "R$ 30,00", "whatsapp": "5521997070112" },
    ];

let carrinho = [];

function atualizarBotaoFlutuante() {
    const botaoFlutuante = document.getElementById("botao-flutuante");
    if (carrinho.length > 0) {
        botaoFlutuante.style.display = "block"; // Mostra o botão
    } else {
        botaoFlutuante.style.display = "none"; // Esconde o botão
    }
}

function adicionarAoCarrinho(botao, produto) {
    const index = carrinho.findIndex(item => item.nome === produto.nome);
    if (index === -1) {
        carrinho.push(produto);
        botao.classList.add("selecionado");
        botao.textContent = "Selecionado";
    } else {
        carrinho.splice(index, 1);
        botao.classList.remove("selecionado");
        botao.textContent = "Adicionar ao Carrinho";
    }
    atualizarBotaoFlutuante();
}

function comprarCarrinho() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    const telefone = "5521997070112";
    let mensagem = "Olá, gostaria de comprar esses itens:\n";
    carrinho.forEach(produto => {
        mensagem += `- ${produto.nome} (${produto.descricao})\n`;
    });
    const link = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");
}

function abrirModal(src) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    modalImage.src = src; // Define a imagem do modal
    modal.style.display = "block"; // Mostra o modal
}

function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Esconde o modal
}

function renderizarProdutos() {
    const container = document.getElementById("produtos");
    container.innerHTML = "";
    produtos.forEach(produto => {
        const item = document.createElement("div");
        item.classList.add("produto");
        item.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" onclick="abrirModal('${produto.imagem}')">
            <h2>${produto.nome}</h2>
            <p>${produto.descricao}</p>
            <p class="destaque tamanho">Tamanho: ${produto.tamanho}</p>
            <p class="destaque preco">Preço: ${produto.preco}</p>
            <button class="add-carrinho" onclick='adicionarAoCarrinho(this, ${JSON.stringify(produto)})'>Adicionar ao Carrinho</button>
        `;
        container.appendChild(item);
    });
}

renderizarProdutos();