document.addEventListener('DOMContentLoaded', () => {

    const cardapio = [
    // Lanches
    { nome: "X-BURGUER", descricao: "Pão de hambúrguer, hambúrguer de carne, presunto, mussarela e tomate.", preco: 25.00, categoria: "Lanches" },
    { nome: "X- BACON", descricao: "Pão de hambúrguer, hambúrguer de carne, bacon, presunto, mussarela e tomate.", preco: 28.00, categoria: "Lanches" },
    { nome: "X- BACON-CHEEDAR", descricao: "Pão de hambúrguer, hambúrguer de carne, bacon, cheedar, presunto, mussarela e tomate.", preco: 30.00, categoria: "Lanches" },
    { nome: "X- BACON-CALABRESA", descricao: "Pão de hambúrguer, hambúrguer de carne, calabresa, presunto, mussarela e tomate.", preco: 35.00, categoria: "Lanches" },
    { nome: "X- EGG", descricao: "Pão de hambúrguer, hambúrguer de carne, ovo, presunto, mussarela e tomate.", preco: 26.00, categoria: "Lanches" },
    { nome: "X-FRANGO", descricao: "Pão de hambúrguer, filé de frango, mussarela, tomate e alface.", preco: 27.00, categoria: "Lanches" },
    { nome: "AMERICANO COM BACON", descricao: "Pão francês, bife de carne, bacon, presunto, mussarela, tomate e alface.", preco: 40.00, categoria: "Lanches" },
    { nome: "X-FRANGO-CATUPIRY", descricao: "Pão de hambúrguer, filé de frango, catupiry, mussarela, tomate e alface.", preco: 30.00, categoria: "Lanches" },
    { nome: "X-FRANGO BACON", descricao: "Pão de hambúrguer, filé de frango, bacon, mussarela, tomate e alface.", preco: 30.00, categoria: "Lanches" },
    { nome: "X-FRANGO CALABRESA", descricao: "Pão de hambúrguer, filé de frango, calabresa, mussarela, tomate e alface.", preco: 30.00, categoria: "Lanches" },
    { nome: "X-TUDO", descricao: "Pão de hambúrguer, hambúrguer de carne, bacon, calabresa, ovo, presunto, mussarela, tomate e alface.", preco: 36.00, categoria: "Lanches" },
    { nome: "X-FILE TUDO", descricao: "Pão de hambúrguer, bife de carne, bacon, calabresa, ovo, presunto, mussarela, tomate e alface.", preco: 40.00, categoria: "Lanches" },
    { nome: "BAURU", descricao: "Pão francês, presunto, mussarela e tomate.", preco: 18.00, categoria: "Lanches" },
    { nome: "MISTO", descricao: "Pão francês, presunto, mussarela.", preco: 18.00, categoria: "Lanches" },
    { nome: "PAULISTA", descricao: "Pão francês, bife de carne, mussarela e tomate.", preco: 36.00, categoria: "Lanches" },
    { nome: "AMERICANO", descricao: "Pão francês, bife de carne, presunto, mussarela, tomate e alface.", preco: 38.00, categoria: "Lanches" },
    { nome: "X-SALADA", descricao: "Pão de hambúrguer, hambúrguer, presunto, mussarela, tomate e alface.", preco: 25.00, categoria: "Lanches" },

    // Maionese
    { nome: "MAIONESE VERDE", descricao: "Temperada com ervas frescas e um sabor especial que combina perfeitamente com nossos lanches.", preco: 3.00, categoria: "Adicionais" },

    // Porções
    { nome: "CALABRESA (Meia)", descricao: "Porção de Calabresa (Meia)", preco: 36.20, categoria: "Porções" },
    { nome: "CALABRESA (Grande)", descricao: "Porção de Calabresa (Grande)", preco: 48.20, categoria: "Porções" },
    { nome: "FILÉ MIGNON (Meia)", descricao: "Porção de Filé Mignon (Meia)", preco: 65.00, categoria: "Porções" },
    { nome: "FILÉ MIGNON (Grande)", descricao: "Porção de Filé Mignon (Grande)", preco: 97.50, categoria: "Porções" },
    { nome: "PICANHA (Meia)", descricao: "Porção de Picanha (Meia)", preco: 65.00, categoria: "Porções" },
    { nome: "PICANHA (Grande)", descricao: "Porção de Picanha (Grande)", preco: 97.50, categoria: "Porções" },

    // Adicionais
    { nome: "Hambúrguer", descricao: "Adicional de Hambúrguer", preco: 8.00, categoria: "Adicionais" },
    { nome: "Bacon", descricao: "Adicional de Bacon", preco: 4.00, categoria: "Adicionais" },
    { nome: "Calabresa", descricao: "Adicional de Calabresa", preco: 4.00, categoria: "Adicionais" },
    { nome: "Cheedar", descricao: "Adicional de Cheedar", preco: 4.00, categoria: "Adicionais" },
    { nome: "Catupiry", descricao: "Adicional de Catupiry", preco: 4.50, categoria: "Adicionais" },
    { nome: "Ovo", descricao: "Adicional de Ovo", preco: 2.50, categoria: "Adicionais" },
    { nome: "Frango", descricao: "Adicional de Frango", preco: 4.00, categoria: "Adicionais" },
    { nome: "Batata palha", descricao: "Adicional de Batata palha", preco: 2.00, categoria: "Adicionais" },

    // Sucos (preços por volume)
    { nome: "ACEROLA (300ml)", descricao: "Suco de Acerola (300ml)", preco: 8.00, categoria: "Bebidas" },
    { nome: "ACEROLA (500ml)", descricao: "Suco de Acerola (500ml)", preco: 11.00, categoria: "Bebidas" },
    { nome: "ACEROLA (700ml)", descricao: "Suco de Acerola (700ml)", preco: 16.00, categoria: "Bebidas" },
    { nome: "ACEROLA C/ LARANJA (300ml)", descricao: "Suco de Acerola com Laranja (300ml)", preco: 8.00, categoria: "Bebidas" },
    { nome: "ACEROLA C/ LARANJA (500ml)", descricao: "Suco de Acerola com Laranja (500ml)", preco: 11.00, categoria: "Bebidas" },
    { nome: "ACEROLA C/ LARANJA (700ml)", descricao: "Suco de Acerola com Laranja (700ml)", preco: 16.00, categoria: "Bebidas" },
    { nome: "ABACAXI C/ HORTELÃ (300ml)", descricao: "Suco de Abacaxi com Hortelã (300ml)", preco: 8.00, categoria: "Bebidas" },
    { nome: "ABACAXI C/ HORTELÃ (500ml)", descricao: "Suco de Abacaxi com Hortelã (500ml)", preco: 11.00, categoria: "Bebidas" },
    { nome: "ABACAXI C/ HORTELÃ (700ml)", descricao: "Suco de Abacaxi com Hortelã (700ml)", preco: 16.00, categoria: "Bebidas" },
    { nome: "LARANJA (300ml)", descricao: "Suco de Laranja (300ml)", preco: 8.00, categoria: "Bebidas" },
    { nome: "LARANJA (500ml)", descricao: "Suco de Laranja (500ml)", preco: 11.00, categoria: "Bebidas" },
    { nome: "LARANJA (700ml)", descricao: "Suco de Laranja (700ml)", preco: 16.00, categoria: "Bebidas" },

    // Refrigerantes
    { nome: "COCA COLA (350ml)", descricao: "Coca Cola (Lata/Pequena)", preco: 5.50, categoria: "Bebidas" },
    { nome: "COCA COLA (2 litros)", descricao: "Coca Cola (Garrafa 2 Litros)", preco: 16.00, categoria: "Bebidas" },
    { nome: "FANTA (350ml)", descricao: "Fanta (Lata/Pequena)", preco: 5.50, categoria: "Bebidas" },
    { nome: "FANTA (2 litros)", descricao: "Fanta (Garrafa 2 Litros)", preco: 13.00, categoria: "Bebidas" },
    { nome: "ANTÁRTICA (350ml)", descricao: "Antártica (Lata/Pequena)", preco: 5.50, categoria: "Bebidas" },
    { nome: "ANTÁRTICA (2 litros)", descricao: "Antártica (Garrafa 2 Litros)", preco: 13.50, categoria: "Bebidas" },
    { nome: "SPRITE (350ml)", descricao: "Sprite (Lata/Pequena)", preco: 5.50, categoria: "Bebidas" },
    { nome: "SPRITE (2 litros)", descricao: "Sprite (Garrafa 2 Litros)", preco: 13.50, categoria: "Bebidas" }
];

    const cardapioSection = document.getElementById('cardapio');
    const buscaInput = document.getElementById('busca');
    const categoriaSelect = document.getElementById('categoria');
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalSpan = document.getElementById('total');
    const alerta = document.getElementById('mensagem-alerta');
    const finalizarBtn = document.getElementById('finalizar'); // Certifique-se que o botão existe no HTML

    let carrinho = [];

    function exibirCardapio() {
        const busca = buscaInput.value.toLowerCase();
        const categoria = categoriaSelect.value;

        const filtrados = cardapio.filter(item =>
            (categoria === 'todos' || item.categoria === categoria) &&
            item.nome.toLowerCase().includes(busca)
        );

        cardapioSection.innerHTML = '';

        filtrados.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
                <p><strong>R$ ${item.preco.toFixed(2)}</strong></p>
                <button onclick="adicionarCarrinho('${item.nome}', ${item.preco})">Adicionar</button>
            `;
            cardapioSection.appendChild(card);
        });
    }

   let lancheSelecionado = null; // guarda o lanche atual antes de abrir o modal

window.adicionarCarrinho = function(nome, preco) {
  lancheSelecionado = { nome, preco };
  abrirModalAdicionais();
};

// Abrir o modal e listar os adicionais
function abrirModalAdicionais() {
  const modal = document.getElementById("modalAdicionais");
  const form = document.getElementById("formAdicionais");

  // Filtra apenas os itens da categoria "Adicionais"
  const adicionais = cardapio.filter(item => item.categoria === "Adicionais");

  form.innerHTML = adicionais.map(add => `
    <label>
      <input type="checkbox" value="${add.nome}" data-preco="${add.preco}">
      ${add.nome} — R$ ${add.preco.toFixed(2)}
    </label>
  `).join('');

  modal.style.display = "flex";
}

// Fechar o modal
function fecharModal() {
  document.getElementById("modalAdicionais").style.display = "none";
}

// Botão cancelar
document.getElementById("cancelarAdicionais").addEventListener("click", fecharModal);

// Confirmar e adicionar ao carrinho
document.getElementById("confirmarAdicionais").addEventListener("click", () => {
  const checkboxes = document.querySelectorAll('#formAdicionais input[type="checkbox"]:checked');
  let totalAdicionais = 0;
  let nomesAdicionais = [];

  checkboxes.forEach(chk => {
    totalAdicionais += parseFloat(chk.dataset.preco);
    nomesAdicionais.push(chk.value);
  });

  const totalItem = lancheSelecionado.preco + totalAdicionais;
  const descricao = nomesAdicionais.length > 0 ? ` + (${nomesAdicionais.join(", ")})` : "";

  carrinho.push({ nome: lancheSelecionado.nome + descricao, preco: totalItem });
  atualizarCarrinho();
  mostrarAlerta('Item adicionado com adicionais!', 'add');
  fecharModal();
});


    function removerCarrinho(nome) {
        carrinho = carrinho.filter(item => item.nome !== nome);
        atualizarCarrinho();
        mostrarAlerta('Item removido do carrinho!', 'remove');
    }

    function atualizarCarrinho() {
        listaCarrinho.innerHTML = '';
        let total = 0;
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
            const removerBtn = document.createElement('button');
            removerBtn.textContent = 'Remover';
            removerBtn.onclick = () => removerCarrinho(item.nome);
            li.appendChild(removerBtn);
            listaCarrinho.appendChild(li);
            total += item.preco;
        });
        totalSpan.textContent = `Total: R$ ${total.toFixed(2)}`;
    }

    function mostrarAlerta(mensagem, tipo) {
        alerta.textContent = mensagem;
        alerta.className = `mensagem-alerta mostrar ${tipo}`;
        setTimeout(() => alerta.className = 'mensagem-alerta', 3000);
    }

    // ✅ Finalizar pedido via WhatsApp
    finalizarBtn.addEventListener('click', () => {
        if (carrinho.length === 0) return mostrarAlerta('Adicione itens ao carrinho primeiro!', 'alert');

        const texto = carrinho.map(item => `- ${item.nome}: R$ ${item.preco.toFixed(2)}`).join('\n');
        const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

        const mensagem = `Olá! Gostaria de fazer um pedido:\n${texto}\n*Total: R$ ${total.toFixed(2)}*`;

        // Abre o WhatsApp no número certo
        const url = `https://wa.me/5518991418453?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    });

    const scrollBtn = document.getElementById("scrollBtn");

function atualizarBotao() {
  const scrollTop = window.scrollY;
  const alturaTotal = document.body.scrollHeight - window.innerHeight;

  if (scrollTop < alturaTotal - 50) {
    // Usuário está no topo → botão desce
    scrollBtn.textContent = "↓";
    scrollBtn.onclick = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  } else {
    // Usuário está no final → botão sobe
    scrollBtn.textContent = "↑";
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

window.addEventListener("scroll", atualizarBotao);
window.addEventListener("load", atualizarBotao);


    // Eventos de filtro
    buscaInput.addEventListener('input', exibirCardapio);
    categoriaSelect.addEventListener('change', exibirCardapio);

    exibirCardapio();
});
