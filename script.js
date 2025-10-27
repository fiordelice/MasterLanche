
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
        { nome: "CALABRESA", descricao: "Porção de Calabresa", precoMeia: 36.20, precoGrande: 48.20, categoria: "Porções" },
        { nome: "FILÉ MIGNON", descricao: "Porção de Filé Mignon", precoMeia: 65.00, precoGrande: 97.50, categoria: "Porções" },
        { nome: "PICANHA", descricao: "Porção de Picanha", precoMeia: 65.00, precoGrande: 97.50, categoria: "Porções" },

        // Adicionais
        { nome: "Hambúrguer", descricao: "Adicional de Hambúrguer", preco: 8.00, categoria: "Adicionais" },
        { nome: "Bacon", descricao: "Adicional de Bacon", preco: 4.00, categoria: "Adicionais" },
        { nome: "Calabresa", descricao: "Adicional de Calabresa", preco: 4.00, categoria: "Adicionais" },
        { nome: "Cheedar", descricao: "Adicional de Cheedar", preco: 4.00, categoria: "Adicionais" },
        { nome: "Catupiry", descricao: "Adicional de Catupiry", preco: 4.50, categoria: "Adicionais" },
        { nome: "Ovo", descricao: "Adicional de Ovo", preco: 2.50, categoria: "Adicionais" },
        { nome: "Frango", descricao: "Adicional de Frango", preco: 4.00, categoria: "Adicionais" },
        { nome: "Batata palha", descricao: "Adicional de Batata palha", preco: 2.00, categoria: "Adicionais" },

        // Bebidas
        { nome: "ACEROLA", descricao: "Suco de Acerola", volumes: [
            { tamanho: "300ml", preco: 8.00 },
            { tamanho: "500ml", preco: 11.00 },
            { tamanho: "700ml", preco: 16.00 }
        ], categoria: "Bebidas" },
        { nome: "ACEROLA C/ LARANJA", descricao: "Suco de Acerola com Laranja", volumes: [
            { tamanho: "300ml", preco: 8.00 },
            { tamanho: "500ml", preco: 11.00 },
            { tamanho: "700ml", preco: 16.00 }
        ], categoria: "Bebidas" },
        { nome: "ABACAXI C/ HORTELÃ", descricao: "Suco de Abacaxi com Hortelã", volumes: [
            { tamanho: "300ml", preco: 8.00 },
            { tamanho: "500ml", preco: 11.00 },
            { tamanho: "700ml", preco: 16.00 }
        ], categoria: "Bebidas" },
        { nome: "LARANJA", descricao: "Suco de Laranja", volumes: [
            { tamanho: "300ml", preco: 8.00 },
            { tamanho: "500ml", preco: 11.00 },
            { tamanho: "700ml", preco: 16.00 }
        ], categoria: "Bebidas" },

        // Refrigerantes
        { nome: "COCA COLA", descricao: "Refrigerante Coca Cola", volumes: [
            { tamanho: "350ml", preco: 5.50 },
            { tamanho: "2 litros", preco: 16.00 }
        ], categoria: "Bebidas" },
        { nome: "FANTA", descricao: "Refrigerante Fanta", volumes: [
            { tamanho: "350ml", preco: 5.50 },
            { tamanho: "2 litros", preco: 13.00 }
        ], categoria: "Bebidas" },
        { nome: "ANTÁRTICA", descricao: "Refrigerante Antártica", volumes: [
            { tamanho: "350ml", preco: 5.50 },
            { tamanho: "2 litros", preco: 13.50 }
        ], categoria: "Bebidas" },
        { nome: "SPRITE", descricao: "Refrigerante Sprite", volumes: [
            { tamanho: "350ml", preco: 5.50 },
            { tamanho: "2 litros", preco: 13.50 }
        ], categoria: "Bebidas" }
    ];


    const cardapioSection = document.getElementById('cardapio');
    const buscaInput = document.getElementById('busca');
    const categoriaSelect = document.getElementById('categoria');
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalSpan = document.getElementById('total');
    const alerta = document.getElementById('mensagem-alerta');
    const finalizarBtn = document.getElementById('finalizar');

    let carrinho = [];
    let lancheSelecionado = null;
    let porcaoSelecionada = null;

    function exibirCardapio() {
        const busca = buscaInput.value.toLowerCase();
        const categoria = categoriaSelect.value;

        const filtrados = cardapio.filter(item =>
            (categoria === 'todos' || item.categoria === categoria) &&
            item.nome.toLowerCase().includes(busca) &&
            item.categoria !== "Adicionais" // adicionais não aparecem no card
        );

        cardapioSection.innerHTML = '';

        filtrados.forEach(item => {
            const precoExibir = item.categoria === "Porções"
    ? `Meia: R$ ${item.precoMeia.toFixed(2)} / Grande: R$ ${item.precoGrande.toFixed(2)}`
    : item.volumes
        ? item.volumes.map(v => `${v.tamanho}: R$ ${v.preco.toFixed(2)}`).join(' / ')
        : `R$ ${item.preco.toFixed(2)}`;

            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
                <p><strong>${precoExibir}</strong></p>
                <button onclick="adicionarCarrinho('${item.nome}', '${item.categoria}')">Adicionar</button>
            `;
            cardapioSection.appendChild(card);
        });
    }
function abrirModalBebida(item) {
    const modal = document.getElementById("modalBebidas");
    const opcoes = document.getElementById("opcoesBebida");

    document.getElementById("nomeBebida").textContent = item.nome;
    document.getElementById("descricaoBebida").textContent = item.descricao;

    // Criar opções de volumes
    opcoes.innerHTML = item.volumes.map((v, index) => `
        <label>
            <input type="radio" name="volumeBebida" value="${index}" ${index === 0 ? 'checked' : ''}>
            ${v.tamanho} — R$ ${v.preco.toFixed(2)}
        </label>
    `).join('');

    // Exibir preço inicial
    document.getElementById("precoBebida").textContent = item.volumes[0].preco.toFixed(2);

    // Atualizar preço ao mudar de volume
    document.querySelectorAll('input[name="volumeBebida"]').forEach(input => {
        input.addEventListener('change', () => {
            const selected = item.volumes[input.value];
            document.getElementById("precoBebida").textContent = selected.preco.toFixed(2);
        });
    });

    modal.style.display = "flex";
}

// Confirmar
document.getElementById("confirmarBebida").addEventListener("click", () => {
    const modal = document.getElementById("modalBebidas");
    const item = cardapio.find(i => i.nome === document.getElementById("nomeBebida").textContent);
    const selectedIndex = document.querySelector('input[name="volumeBebida"]:checked').value;
    const volumeSelecionado = item.volumes[selectedIndex];

    carrinho.push({ nome: `${item.nome} (${volumeSelecionado.tamanho})`, preco: volumeSelecionado.preco });
    atualizarCarrinho();
    mostrarAlerta('Bebida adicionada ao carrinho!', 'add');

    modal.style.display = "none";
});

    // Cancelar adicionais
document.getElementById("cancelarAdicionais").addEventListener("click", () => {
    fecharModal("modalAdicionais");
});

// Cancelar porções
document.getElementById("cancelarPorcao").addEventListener("click", () => {
    fecharModal("modalPorcoes");
});
// Cancelar bebidas
document.getElementById("cancelarBebida").addEventListener("click", () => {
    document.getElementById("modalBebidas").style.display = "none";
});


const opcoes = document.getElementById("opcoesBebida");
opcoes.addEventListener("change", (e) => {
    if (e.target.name === "volumeBebida") {
        const index = e.target.value;
        const item = cardapio.find(i => i.nome === document.getElementById("nomeBebida").textContent);
        document.getElementById("precoBebida").textContent = item.volumes[index].preco.toFixed(2);
    }
});


    // Função para abrir modal de lanches com adicionais
    function abrirModalAdicionais() {
        const modal = document.getElementById("modalAdicionais");
        const form = document.getElementById("formAdicionais");

        const adicionais = cardapio.filter(item => item.categoria === "Adicionais");

        form.innerHTML = adicionais.map(add => `
            <label>
                <input type="checkbox" value="${add.nome}" data-preco="${add.preco}">
                ${add.nome} — R$ ${add.preco.toFixed(2)}
            </label>
        `).join('');

        modal.style.display = "flex";
    }



    // Função para abrir modal de porções
    function abrirModalPorcoes(item) {
        porcaoSelecionada = item;
        const modal = document.getElementById("modalPorcoes");
        document.getElementById("nomePorcao").textContent = item.nome;
        document.getElementById("precoPorcao").textContent = item.precoMeia.toFixed(2);

        document.querySelector('input[name="tamanhoPorcao"][value="Meia"]').checked = true;

        document.querySelectorAll('input[name="tamanhoPorcao"]').forEach(input => {
            input.addEventListener('change', () => {
                const preco = input.value === "Meia" ? item.precoMeia : item.precoGrande;
                document.getElementById("precoPorcao").textContent = preco.toFixed(2);
            });
        });

        modal.style.display = "flex";
    }

    function fecharModal(modalId) {
        document.getElementById(modalId).style.display = "none";
    }

    // Adicionar ao carrinho
  window.adicionarCarrinho = function (nome, categoria) {
    const item = cardapio.find(i => i.nome === nome);

    if (categoria === "Lanches") {
        lancheSelecionado = item;
        abrirModalAdicionais();
    } else if (categoria === "Porções") {
        abrirModalPorcoes(item);
    } else if (categoria === "Bebidas") {
        abrirModalBebida(item);
    } else {
        carrinho.push({ nome: item.nome, preco: item.preco });
        atualizarCarrinho();
        mostrarAlerta('Item adicionado!', 'add');
    }
};

    // Confirmar adicionais
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
        fecharModal("modalAdicionais");
    });

    // Confirmar porção
    document.getElementById("confirmarPorcao").addEventListener("click", () => {
        const tamanho = document.querySelector('input[name="tamanhoPorcao"]:checked').value;
        const preco = tamanho === "Meia" ? porcaoSelecionada.precoMeia : porcaoSelecionada.precoGrande;

        carrinho.push({ nome: `${porcaoSelecionada.nome} (${tamanho})`, preco });
        atualizarCarrinho();
        mostrarAlerta('Porção adicionada ao carrinho!', 'add');
        fecharModal("modalPorcoes");
    });

    // Atualizar carrinho
function atualizarCarrinho() {
    listaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

        const removerBtn = document.createElement('button');
        removerBtn.textContent = 'Remover';

        removerBtn.onclick = () => {
            carrinho = carrinho.filter(i => i !== item);
            atualizarCarrinho();
            mostrarAlerta(`${item.nome} removido do carrinho`, 'remove');
        };

        li.appendChild(removerBtn);
        listaCarrinho.appendChild(li);
        total += item.preco;
    });

    totalSpan.textContent = `Total: R$ ${total.toFixed(2)}`;
}


    // Alertas
    function mostrarAlerta(mensagem, tipo) {
        alerta.textContent = mensagem;
        alerta.className = `mensagem-alerta mostrar ${tipo}`;
        setTimeout(() => alerta.className = 'mensagem-alerta', 3000);
    }

  // Modal de pagamento
const modalPagamento = document.createElement("div");
modalPagamento.className = "modal";
modalPagamento.innerHTML = `
  <div class="modal-content">
    <h3>Forma de Pagamento</h3>
    <form id="formPagamento">
      <label><input type="radio" name="pagamento" value="Pix"> Pix</label><br>
      <label><input type="radio" name="pagamento" value="Cartão"> Cartão</label><br>
      <label><input type="radio" name="pagamento" value="Dinheiro"> Dinheiro</label><br>
      <div id="detalhesPagamento" style="margin-top:10px;"></div>
    </form>
    <div class="modal-buttons">
      <button id="confirmarPagamento" type="button">Confirmar Pagamento</button>
      <button id="cancelarPagamento" type="button">Cancelar</button>
    </div>
  </div>
`;
document.body.appendChild(modalPagamento);

// Cancelar pagamento
document.getElementById("cancelarPagamento").addEventListener("click", () => {
  modalPagamento.style.display = "none";
});

// Abrir modal ao clicar em finalizar
finalizarBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (carrinho.length === 0) {
    return mostrarAlerta("Adicione itens ao carrinho primeiro!", "alert");
  }
  modalPagamento.style.display = "flex";
});

// Interações com as opções de pagamento
document.getElementById("formPagamento").addEventListener("change", (e) => {
  const div = document.getElementById("detalhesPagamento");
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0).toFixed(2);
  div.innerHTML = "";

  if (e.target.value === "Pix") {
    div.innerHTML = `
      <p><strong>Valor a pagar:</strong> R$ ${total}</p>
      <p>Chave Pix (copie e pague):</p>
      <input type="text" readonly value="5518991418453" style="width:100%; text-align:center; font-weight:bold;">
    `;
  } else if (e.target.value === "Cartão") {
    div.innerHTML = `
      <label><input type="radio" name="tipoCartao" value="Crédito"> Crédito</label><br>
      <label><input type="radio" name="tipoCartao" value="Débito"> Débito</label>
    `;
  } else if (e.target.value === "Dinheiro") {
    div.innerHTML = `
      <label>Precisa de troco?</label><br>
      <input type="text" id="troco" placeholder="Troco para quanto?" style="width:100%;">
    `;
  }
});

// Confirmar pagamento e enviar para o WhatsApp
document.getElementById("confirmarPagamento").addEventListener("click", () => {
  const forma = document.querySelector('input[name="pagamento"]:checked');
  if (!forma) return mostrarAlerta("Selecione uma forma de pagamento!", "alert");

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
  let infoPagamento = `Forma de pagamento: ${forma.value}`;

  if (forma.value === "Pix") {
    infoPagamento += `\nValor: R$ ${total.toFixed(2)}\nChave Pix: 5518991418453`;
  } else if (forma.value === "Cartão") {
    const tipo = document.querySelector('input[name="tipoCartao"]:checked');
    if (!tipo) return mostrarAlerta("Selecione crédito ou débito!", "alert");
    infoPagamento += ` (${tipo.value})`;
  } else if (forma.value === "Dinheiro") {
    const troco = document.getElementById("troco").value.trim();
    infoPagamento += troco ? `\nTroco para: R$ ${troco}` : "\nSem troco";
  }

  const texto = carrinho.map(item => `- ${item.nome}: R$ ${item.preco.toFixed(2)}`).join('\n');
  const mensagem = `Olá! Gostaria de fazer um pedido:\n${texto}\n*Total: R$ ${total.toFixed(2)}*\n\n${infoPagamento}`;

  const url = `https://wa.me/5518991418453?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");

  modalPagamento.style.display = "none";
});
const modal = document.getElementById('modalPorcoes');
const closeBtn = document.querySelector('.close');
const cancelar = document.getElementById('cancelarPorcao');

// Abrir o modal
function abrirModalPorcao(nome) {
  document.getElementById('nomePorcao').textContent = nome;
  modal.style.display = 'flex';
}

// Fechar modal
closeBtn.onclick = () => modal.style.display = 'none';
cancelar.onclick = () => modal.style.display = 'none';

// Fechar clicando fora
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};


    // Eventos
    buscaInput.addEventListener('input', exibirCardapio);
    categoriaSelect.addEventListener('change', exibirCardapio);

    exibirCardapio();
});
