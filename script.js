
document.addEventListener('DOMContentLoaded', () => {

    const cardapio = [
    { nome: "X-BURGUER", descricao: "Pão de hambúrguer, hambúrguer de carne, presunto, mussarela e tomate.", preco: 23.00, categoria: "Lanches",img:"burguer.jpg" },
    { nome: "X-BACON", descricao: "Pão de hambúrguer, hambúrguer de carne, bacon, presunto, mussarela e tomate.", preco: 26.00, categoria: "Lanches",img:"bacon.jpg" },
    { nome: "X-BACON-CHEEDAR", descricao: "Pão de hambúrguer, hambúrguer de carne, bacon, cheedar, presunto, mussarela e tomate.", preco: 28.00, categoria: "Lanches",img:"che.jpg" },
    { nome: "X-BACON-CALABRESA", descricao: "Pão de hambúrguer, hambúrguer de carne, calabresa, presunto, bacon, mussarela e tomate.", preco: 33.00, categoria: "Lanches",img:"calabresabacon.jpg"  },
    { nome: "X-EGG", descricao: "Pão de hambúrguer, hambúrguer de carne, ovo, presunto, mussarela e tomate.", preco: 24.00, categoria: "Lanches",  img:"egg.jpg"},
    { nome: "X-FRANGO", descricao: "Pão de hambúrguer, filé de frango, mussarela, tomate e alface.", preco: 25.00, categoria: "Lanches",img:"frango.jpg" },
    { nome: "X-CALABRESA", descricao: "Pão de hambúrguer, hambúrguer de carne, calabresa, presunto, mussarela e tomate.", preco: 26.00, categoria: "Lanches",  img:"calabresa.jpg"},
    { nome: "AMERICANO COM BACON", descricao: "Pão francês, bife de carne, bacon, presunto, mussarela, tomate e alface.", preco: 36.00, categoria: "Lanches",},
    { nome: "X-FRANGO-CATUPIRY", descricao: "Pão de hambúrguer, filé de frango, catupiry, mussarela, tomate e alface.", preco: 28.00, categoria: "Lanches", },
    { nome: "X-FRANGO BACON", descricao: "Pão de hambúrguer, filé de frango, bacon, mussarela, tomate e alface.", preco: 28.00, categoria: "Lanches", },
    { nome: "X-FRANGO CALABRESA", descricao: "Pão de hambúrguer, filé de frango, calabresa, mussarela, tomate e alface.", preco: 28.00, categoria: "Lanches", },
    { nome: "X-TUDO", descricao: "Pão de hambúrguer, hambúrguer de carne, bacon, calabresa, ovo, presunto, mussarela, tomate e alface.", preco: 35.00, categoria: "Lanches", img:"tudo.jpg" },
    { nome: "X-FILE TUDO", descricao: "Pão de hambúrguer, bife de carne, bacon, calabresa, ovo, presunto, mussarela, tomate e alface.", preco: 38.00, categoria: "Lanches", img:"filex.jpg" },
    { nome: "BAURU", descricao: "Pão francês, presunto, mussarela e tomate.", preco: 18.00, categoria: "Lanches",  },
    { nome: "MISTO", descricao: "Pão francês, presunto, mussarela.", preco: 18.00, categoria: "Lanches", },
    { nome: "PAULISTA", descricao: "Pão francês, bife de carne, mussarela e tomate.", preco: 35.00, categoria: "Lanches", },
    { nome: "AMERICANO", descricao: "Pão francês, bife de carne, presunto, mussarela, tomate e alface.", preco: 37.00, categoria: "Lanches", },
    { nome: "X-SALADA", descricao: "Pão de hambúrguer, hambúrguer, presunto, mussarela, tomate e alface.", preco: 23.00, categoria: "Lanches", img:"salada.jpg" },
    { nome: "CEBOLA SUPREME", descricao: "pão de brioche com gergelim, bacon, smash burg 100g, molho caseiro, aneis de cebola, mussarela, cebola roxa, molho barbecue e tomate.", preco: 26.00, categoria: "Lanches", },


        // Maiones
        { nome: "COMBO CASAL", descricao: "2x burguer, 2 batatas 150g, 2 sprite lata 350ml.", preco: 75.00, categoria: "Combo",img:"combo casal.jpg" },
        { nome: "COMBO TOP BACON", descricao: "1x bacon, 1 batata 150g, 1coca-coca lata 350ml.", preco: 40.00, categoria: "Combo", img:"cambo top.jpg"},
        { nome: "COMBO KIDS", descricao: "1xbuguer, pão com gergelin,hambrguer 120g,presunto,mussarela, 1 suco capo, 120g de batata e um sonho de valsa.", preco: 36.00, categoria: "Lanches", img:"Com kids.jpg" },
        { nome: "COMBO MASTER", descricao: "2 x-salada,batata com cheedar e bacon,nuggets e aneis de cebola.", preco: 85.00, categoria: "Lanches", },
        { nome: "COMBO FAMÍLIA", descricao: "3 x-salada,1 batata 350g, 6 nuggets mini chicken tradicional, 1 coca-cola 2l.", preco: 123.00, categoria: "Lanches", },
        { nome: "COMBO CHICKEN", descricao: " 1 x-frango,1 batata150g, 1coca colca lata 350ml.", preco: 40.00, categoria: "Lanches", },
     

{
    nome: "COMBO DO DIA ",
    descricao: "1 enrolado de presunto, mussarela, tomate e orégano + 1 refrigerante lata 350ml (Coca-Cola, Pepsi ou Sprite).",
    preco: 13.00,
    categoria: "Salgados",

},
{
    nome: "COMBO DO DIA",
    descricao: "1 enrolado de presunto, mussarela, tomate e orégano.",
    preco: 10.00,
    categoria: "Salgados"
},



        // Adicionais
        { nome: "Hambúrguer", descricao: "Adicional de Hambúrguer", preco: 8.00, categoria: "Adicionais" },
        { nome: "Bacon", descricao: "Adicional de Bacon", preco: 4.00, categoria: "Adicionais" },
        { nome: "Calabresa", descricao: "Adicional de Calabresa", preco: 4.00, categoria: "Adicionais" },
        { nome: "Cheedar", descricao: "Adicional de Cheedar", preco: 4.00, categoria: "Adicionais" },
        { nome: "Catupiry", descricao: "Adicional de Catupiry", preco: 4.50, categoria: "Adicionais" },
        { nome: "Ovo", descricao: "Adicional de Ovo", preco: 2.50, categoria: "Adicionais" },
        { nome: "Frango", descricao: "Adicional de Frango", preco: 4.00, categoria: "Adicionais" },
        { nome: "Batata palha", descricao: "Adicional de Batata palha", preco: 2.00, categoria: "Adicionais" },
        { nome: "MAIONESE VERDE", descricao: "Temperada com ervas frescas e um sabor especial que combina perfeitamente com nossos lanches.", preco: 3.00, categoria: "Adicionais" },

  // Porções tradicionais (mantém meia e grande)
{ nome: "CALABRESA", descricao: "Porção de Calabresa", precoMeia: 36.20, precoGrande: 48.20, categoria: "Porções", img:"porcale.webp" },
{ nome: "FILÉ MIGNON", descricao: "Porção de Filé Mignon", precoMeia: 65.00, precoGrande: 97.50, categoria: "Porções", img:"file.jpg" },
{ nome: "PICANHA", descricao: "Porção de Picanha", precoMeia: 65.00, precoGrande: 97.50, categoria: "Porções", img:"picanha.webp" },

// Porções PREÇO ÚNICO — nova categoria para não quebrar
{
    nome: "ANEIS DE CEBOLA",
    descricao: "Porção de Anéis de Cebola",
    preco: 10.00,
    categoria: "Porções Únicas",
    img: "default.png"
},
{
    nome: "NUGGETS",
    descricao: "Porção de Nuggets",
    preco: 14.00,
    categoria: "Porções Únicas",
    img: "default.png"
},
{
    nome: "BATATA INDIVIDUAL 150g",
    descricao: "Batata Individual",
    preco: 10.00,
    categoria: "Porções Únicas",
    img: "default.png"
},
{
    nome: "BATATA INDIVIDUAL CHEDDAR E BACON",
    descricao: "Batata com Cheddar e Bacon",
    preco: 22.00,
    categoria: "Porções Únicas",
    img: "default.png"
},
{
    nome: "BATATA TRADICIONAL",
    descricao: "Batata Frita",
    preco: 25.00,
    categoria: "Porções Únicas",
    img: "default.png"
},
{
    nome: "BATATA CHEDDAR E BACON 350g",
    descricao: "Batata 350g com Cheddar e Bacon",
    preco: 35.00,
    categoria: "Porções Únicas",
    img: "default.png"
},


        // Bebidas
          { nome: "ABACAXI", descricao: "Suco de Abacaxi", volumes: [
            { tamanho: "500ml", preco: 13.00 },
        ], categoria: "Bebidas", img:"abacaxi.jpg"  },
          { nome: "ABACAXI COM HORTELÃ", descricao: "Suco de Abacaxi", volumes: [
            { tamanho: "500ml", preco: 10.00 },
        ], categoria: "Bebidas", img:"abacaxi.jpg"  },
        { nome: "LARANJA", descricao: "Suco de Laranja", volumes: [
            { tamanho: "500ml", preco: 15.00 },
        ], categoria: "Bebidas", img:"laranja.webp"  },
         { nome: "MARACUJÁ", descricao: "Suco de Maracujá", volumes: [
            { tamanho: "500ml", preco: 15.00 },
        ], categoria: "Bebidas", img:"maracuja.jpg"  },
         { nome: "ACEROLA", descricao: "Suco de Acerola", volumes: [
            { tamanho: "500ml", preco: 10.00 },
        ], categoria: "Bebidas", },
        { nome: "ACEROLA C/ LARANJA", descricao: "Suco de Acerola com Laranja", volumes: [
            { tamanho: "500ml", preco: 16.00 },
        ], categoria: "Bebidas", img:"cella.jpg"  },
      
        // Refrigerantes
        { nome: "COCA COLA", descricao: "Refrigerante Coca Cola", volumes: [
            { tamanho: "350ml", preco: 6.00 },
            { tamanho: "2 litros", preco: 16.00 }
        ], categoria: "Bebidas", img: "coca.png" },
        { nome: "FANTA", descricao: "Refrigerante Fanta", volumes: [
            { tamanho: "2 litros", preco: 13.00 }
        ], categoria: "Bebidas",  img: "fantal.png"},
        { nome: "ANTÁRTICA", descricao: "Refrigerante Antártica", volumes: [
            { tamanho: "2 litros", preco: 13.50 }
        ], categoria: "Bebidas", img: "guarana.png" },
         { nome: "PESPI", descricao: "Refrigerante Pespi", volumes: [
            { tamanho: "350ml", preco: 6.00 },
            { tamanho: "2 litros", preco: 13.00 }
        ], categoria: "Bebidas", img: "pespi.jpeg" },
        { nome: "SPRITE", descricao: "Refrigerante Sprite", volumes: [
            { tamanho: "350ml", preco: 5.50 },
            { tamanho: "2 litros", preco: 13.50 }
        ], categoria: "Bebidas",img: "sprite.png" }
        
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
            <img src="${item.img}" alt="${item.nome}">
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
    mostrarAlerta('Bebida adicionada ao carrinho!', 'add');  mostrarAlerta

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
        mostrarAlerta('Item adicionado no carrinho!', 'add');
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
finalizarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!carrinho || carrinho.length === 0) {
        return mostrarAlerta("Adicione itens ao carrinho primeiro!", "alert");
    }

    // Remove modal anterior
    const existing = document.getElementById('modalPagamentoPro');
    if (existing) existing.remove();

    // --- Modal Forma de Pagamento ---
    const modal = document.createElement('div');
    modal.id = 'modalPagamentoPro';
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
      <div class="modal-content" role="dialog" aria-modal="true" style="max-width:500px; width:95%; padding:18px; border-radius:10px;">
        <h3>Forma de Pagamento</h3>
        <select id="selectPagamentoPro" style="width:100%; padding:8px; margin-bottom:12px; border-radius:6px;">
          <option value="">Selecione...</option>
          <option value="pix">Pix</option>
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao">Cartão</option>
        </select>
        <div id="detalhesPagamentoPro" style="min-height:80px; margin-bottom:12px;"></div>
        <div style="display:flex; gap:10px;">
          <button id="confirmarPagamentoPro" disabled style="flex:1; padding:10px; border-radius:8px; border:none; background:#b5b5b5; color:#fff; cursor:not-allowed;">
            Próximo
          </button>
          <button id="cancelarPagamentoPro" style="flex:1; padding:10px; border-radius:8px; border:1px solid #ccc; background:#fff; color:#333;">
            Cancelar
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const select = document.getElementById('selectPagamentoPro');
    const detalhes = document.getElementById('detalhesPagamentoPro');
    const btnNext = document.getElementById('confirmarPagamentoPro');
    const btnCancel = document.getElementById('cancelarPagamentoPro');
    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

    function fmt(num) {
        return Number(num).toFixed(2).replace('.', ',');
    }

    function setNextEnabled(enabled) {
        btnNext.disabled = !enabled;
        btnNext.style.background = enabled ? '#25d366' : '#b5b5b5';
        btnNext.style.cursor = enabled ? 'pointer' : 'not-allowed';
    }

    select.addEventListener('change', () => {
        detalhes.innerHTML = '';
        setNextEnabled(false);

        if (select.value === 'pix') {
            detalhes.innerHTML = `
                <p><strong>Total:</strong> R$ ${fmt(total)}</p>
                <p>Copie a chave PIX:</p>
                <input id="pixKeyPro" value="48283370839" readonly style="width:100%; padding:8px; margin-bottom:6px; border-radius:6px; border:1px solid #ddd; text-align:center;">
            `;
            setNextEnabled(true);
        } else if (select.value === 'dinheiro') {
            detalhes.innerHTML = `
                <p><strong>Total:</strong> R$ ${fmt(total)}</p>
                <label><input type="radio" name="trocoPrecisaPro" value="nao" checked> Não preciso de troco</label>
                <label><input type="radio" name="trocoPrecisaPro" value="sim"> Preciso de troco</label>
                <div id="trocoAreaPro" style="display:none; margin-top:6px;">
                    <label>Troco para quanto?</label>
                    <input id="trocoValorPro" type="text" placeholder="Ex: 50.00" style="width:100%; padding:8px; border-radius:6px; border:1px solid #ddd;">
                </div>
            `;
            const radios = detalhes.querySelectorAll('input[name="trocoPrecisaPro"]');
            const trocoArea = document.getElementById('trocoAreaPro');
            radios.forEach(r => r.addEventListener('change', () => {
                trocoArea.style.display = r.value === 'sim' ? 'block' : 'none';
            }));
            setNextEnabled(true);
        } else if (select.value === 'cartao') {
            detalhes.innerHTML = `
                <p><strong>Total:</strong> R$ ${fmt(total)}</p>
                <label>Tipo de cartão:</label>
                <select id="tipoCartaoPro" style="width:100%; padding:8px; border-radius:6px; border:1px solid #ddd;">
                  <option value="">Selecione...</option>
                  <option value="Crédito">Crédito</option>
                  <option value="Débito">Débito</option>
                </select>
            `;
            setNextEnabled(false);
            const tipo = document.getElementById('tipoCartaoPro');
            tipo.addEventListener('change', () => setNextEnabled(tipo.value !== ''));
        }
    });

    btnCancel.addEventListener('click', () => modal.remove());

    btnNext.addEventListener('click', () => {
        const forma = select.value;
        let infoPagamento = `Forma de pagamento: ${forma.charAt(0).toUpperCase() + forma.slice(1)}`;
        if (forma === 'pix') infoPagamento += `\nValor: R$ ${fmt(total)}\nChave Pix: 18991604747`;
        if (forma === 'dinheiro') {
            const trocoRadio = document.querySelector('input[name="trocoPrecisaPro"]:checked').value;
            if (trocoRadio === 'sim') {
                const raw = document.getElementById('trocoValorPro').value.trim().replace(',', '.');
                const num = parseFloat(raw);
                if (isNaN(num) || num <= 0) return mostrarAlerta("Informe o valor do troco corretamente", "alert");
                infoPagamento += `\nTroco para: R$ ${fmt(num)}`;
            } else infoPagamento += `\nSem troco`;
        }
        if (forma === 'cartao') infoPagamento += ` (${document.getElementById('tipoCartaoPro').value})`;

        // --- Modal Endereço ---
     modal.innerHTML = `
  <div class="modal-content" style="max-width:500px; width:95%; padding:18px; border-radius:10px;">
    <h3>Entrega ou Retirada</h3>

    <label style="display:block; margin-bottom:8px;">
      <input type="radio" name="tipoEntrega" value="retirada" checked>
      Retirar no local (sem taxa)
    </label>

    <label style="display:block; margin-bottom:15px;">
      <input type="radio" name="tipoEntrega" value="entrega">
      Entrega (taxa R$ 5,00)
    </label>

    <!-- Endereço fixo para retirada -->
    <div id="enderecoRetirada"
         style="padding:10px; background:#f5f5f5; border-radius:6px; margin-bottom:15px;">
      <strong>Retirada no local:</strong><br>
      Rua Boeing, 756
    </div>

    <!-- Campos para entrega -->
    <div id="camposEndereco" style="display:none;">
      <label>Rua:
        <input id="ruaEntrega" type="text" style="width:100%; padding:8px; border-radius:6px; border:1px solid #ddd;">
      </label>

      <label>Bairro:
        <input id="bairroEntrega" type="text" style="width:100%; padding:8px; border-radius:6px; border:1px solid #ddd;">
      </label>

      <label>Número:
        <input id="numeroEntrega" type="text" style="width:100%; padding:8px; border-radius:6px; border:1px solid #ddd;">
      </label>
    </div>

    <div style="display:flex; gap:10px; margin-top:20px;">
      <button id="confirmarEndereco"
        style="flex:1; padding:10px; border-radius:8px; border:none; background:#25d366; color:#fff;">
        Próximo
      </button>
      <button id="cancelarEndereco"
        style="flex:1; padding:10px; border-radius:8px; border:1px solid #ccc; background:#fff;">
        Cancelar
      </button>
    </div>
  </div>
`;
const radiosEntrega = document.querySelectorAll('input[name="tipoEntrega"]');
const camposEndereco = document.getElementById('camposEndereco');
const enderecoRetirada = document.getElementById('enderecoRetirada');

radiosEntrega.forEach(r => {
  r.addEventListener('change', () => {

    if (r.value === "entrega") {
      camposEndereco.style.display = "block";
      enderecoRetirada.style.display = "none";
    } else {
      camposEndereco.style.display = "none";
      enderecoRetirada.style.display = "block";
    }

  });
});


        document.getElementById('cancelarEndereco').addEventListener('click', () => modal.remove());
       document.getElementById('confirmarEndereco').addEventListener('click', () => {
    const tipoEntrega = document.querySelector('input[name="tipoEntrega"]:checked').value;

    let rua = "";
    let bairro = "";
    let numero = "";
    let taxa = 0;
    let totalFinal = total;

    // ENTREGA
    if (tipoEntrega === "entrega") {
        rua = document.getElementById('ruaEntrega').value.trim();
        bairro = document.getElementById('bairroEntrega').value.trim();
        numero = document.getElementById('numeroEntrega').value.trim();

        if (!rua || !bairro || !numero) {
            return mostrarAlerta("Preencha todos os campos do endereço", "alert");
        }

        taxa = 5;
        totalFinal += taxa;
    }

    // TEXTO DO PEDIDO
    const texto = carrinho.map(item =>
        `- ${item.nome}: R$ ${Number(item.preco).toFixed(2)}`
    ).join('\n');

    let mensagem = `Olá! Gostaria de fazer um pedido:
${texto}
Taxa de entrega: R$ ${taxa.toFixed(2)}
*Total final: R$ ${totalFinal.toFixed(2)}*

${infoPagamento}
`;

    // SE FOR RETIRADA
    if (tipoEntrega === "retirada") {
        mensagem += `
Retirada no local:
Rua Boeing, 756`;
    }

    // SE FOR ENTREGA
    else {
        mensagem += `
Endereço para entrega:
Rua: ${rua}
Bairro: ${bairro}
Número: ${numero}`;
    }

    const numeroLoja = "18991604747";
    const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");

    mostrarAlerta("Pedido finalizado! Obrigado 😊", "add");
    carrinho = [];
    atualizarCarrinho();
    modal.remove();
});
    });
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


// Modificar a função adicionarCarrinho

    // Eventos
    buscaInput.addEventListener('input', exibirCardapio);
    categoriaSelect.addEventListener('change', exibirCardapio);

    exibirCardapio();
});





