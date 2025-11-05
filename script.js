
document.addEventListener('DOMContentLoaded', () => {

    const cardapio = [
    { nome: "X-BURGUER", descricao: "Pão de hambúrguer, hambúrguer de carne, presunto, mussarela e tomate.", preco: 25.00, categoria: "Lanches", },
    { nome: "X-BACON", descricao: "Pão de hambúrguer, hambúrguer de carne, bacon, presunto, mussarela e tomate.", preco: 28.00, categoria: "Lanches", },
    { nome: "X-BACON-CHEEDAR", descricao: "Pão de hambúrguer, hambúrguer de carne, bacon, cheedar, presunto, mussarela e tomate.", preco: 30.00, categoria: "Lanches", },
    { nome: "X-BACON-CALABRESA", descricao: "Pão de hambúrguer, hambúrguer de carne, calabresa, presunto, bacon, mussarela e tomate.", preco: 35.00, categoria: "Lanches",  },
    { nome: "X-EGG", descricao: "Pão de hambúrguer, hambúrguer de carne, ovo, presunto, mussarela e tomate.", preco: 26.00, categoria: "Lanches",  },
    { nome: "X-FRANGO", descricao: "Pão de hambúrguer, filé de frango, mussarela, tomate e alface.", preco: 27.00, categoria: "Lanches", },
     { nome: "X-CALABRESA", descricao: "Pão de hambúrguer, hambúrguer de carne, calabresa, presunto, mussarela e tomate.", preco: 27.00, categoria: "Lanches",  },
    { nome: "AMERICANO COM BACON", descricao: "Pão francês, bife de carne, bacon, presunto, mussarela, tomate e alface.", preco: 40.00, categoria: "Lanches",},
    { nome: "X-FRANGO-CATUPIRY", descricao: "Pão de hambúrguer, filé de frango, catupiry, mussarela, tomate e alface.", preco: 30.00, categoria: "Lanches", },
    { nome: "X-FRANGO BACON", descricao: "Pão de hambúrguer, filé de frango, bacon, mussarela, tomate e alface.", preco: 30.00, categoria: "Lanches", },
    { nome: "X-FRANGO CALABRESA", descricao: "Pão de hambúrguer, filé de frango, calabresa, mussarela, tomate e alface.", preco: 30.00, categoria: "Lanches", },
    { nome: "X-TUDO", descricao: "Pão de hambúrguer, hambúrguer de carne, bacon, calabresa, ovo, presunto, mussarela, tomate e alface.", preco: 36.00, categoria: "Lanches",  },
    { nome: "X-FILE TUDO", descricao: "Pão de hambúrguer, bife de carne, bacon, calabresa, ovo, presunto, mussarela, tomate e alface.", preco: 40.00, categoria: "Lanches",  },
    { nome: "BAURU", descricao: "Pão francês, presunto, mussarela e tomate.", preco: 18.00, categoria: "Lanches",  },
    { nome: "MISTO", descricao: "Pão francês, presunto, mussarela.", preco: 18.00, categoria: "Lanches", },
    { nome: "PAULISTA", descricao: "Pão francês, bife de carne, mussarela e tomate.", preco: 36.00, categoria: "Lanches", },
    { nome: "AMERICANO", descricao: "Pão francês, bife de carne, presunto, mussarela, tomate e alface.", preco: 38.00, categoria: "Lanches", },
    { nome: "X-SALADA", descricao: "Pão de hambúrguer, hambúrguer, presunto, mussarela, tomate e alface.", preco: 25.00, categoria: "Lanches", },


        // Maiones
      
     

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

        // Porções
        { nome: "CALABRESA", descricao: "Porção de Calabresa", precoMeia: 36.20, precoGrande: 48.20, categoria: "Porções", img:"porcale.webp" },
        { nome: "FILÉ MIGNON", descricao: "Porção de Filé Mignon", precoMeia: 65.00, precoGrande: 97.50, categoria: "Porções", img:"file.jpg" },
        { nome: "PICANHA", descricao: "Porção de Picanha", precoMeia: 65.00, precoGrande: 97.50, categoria: "Porções", img:"picanha.webp" },

        // Bebidas
          { nome: "ABACAXI C/ HORTELÃ", descricao: "Suco de Abacaxi", volumes: [
            { tamanho: "500ml", preco: 13.00 },
        ], categoria: "Bebidas", img:"abacaxi.jpg"  },
        { nome: "LARANJA", descricao: "Suco de Laranja", volumes: [
            { tamanho: "500ml", preco: 15.00 },
        ], categoria: "Bebidas", img:"laranja.webp"  },
         { nome: "MARACUJÁ", descricao: "Suco de Maracujá", volumes: [
            { tamanho: "500ml", preco: 15.00 },
        ], categoria: "Bebidas", img:"maracuja.jpg"  },
        { nome: "ACEROLA C/ LARANJA", descricao: "Suco de Acerola com Laranja", volumes: [
            { tamanho: "500ml", preco: 16.00 },
        ], categoria: "Bebidas", img:"cella.jpg"  },
      
        // Refrigerantes
        { nome: "COCA COLA", descricao: "Refrigerante Coca Cola", volumes: [
            { tamanho: "350ml", preco: 5.50 },
            { tamanho: "2 litros", preco: 16.00 }
        ], categoria: "Bebidas", img: "coca.png" },
        { nome: "FANTA", descricao: "Refrigerante Fanta", volumes: [
            { tamanho: "350ml", preco: 5.50 },
            { tamanho: "2 litros", preco: 13.00 }
        ], categoria: "Bebidas",  img: "fantal.png"},
        { nome: "ANTÁRTICA", descricao: "Refrigerante Antártica", volumes: [
            { tamanho: "350ml", preco: 5.50 },
            { tamanho: "2 litros", preco: 13.50 }
        ], categoria: "Bebidas", img: "guarana.png" },
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
                <input id="pixKeyPro" value="63083827000126" readonly style="width:100%; padding:8px; margin-bottom:6px; border-radius:6px; border:1px solid #ddd; text-align:center;">
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
        if (forma === 'pix') infoPagamento += `\nValor: R$ ${fmt(total)}\nChave Pix: 5518991418453`;
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
                <h3>Endereço de Entrega</h3>
                <label>Rua: <input id="ruaEntrega" type="text" style="width:100%; padding:8px; border-radius:6px; border:1px solid #ddd;"></label>
                <label>Bairro: <input id="bairroEntrega" type="text" style="width:100%; padding:8px; border-radius:6px; border:1px solid #ddd;"></label>
                <label>Número: <input id="numeroEntrega" type="text" style="width:100%; padding:8px; border-radius:6px; border:1px solid #ddd;"></label>
                <div style="display:flex; gap:10px; margin-top:12px;">
                    <button id="confirmarEndereco" style="flex:1; padding:10px; border-radius:8px; border:none; background:#25d366; color:#fff;">Finalizar Pedido</button>
                    <button id="cancelarEndereco" style="flex:1; padding:10px; border-radius:8px; border:1px solid #ccc; background:#fff;">Cancelar</button>
                </div>
            </div>
        `;

        document.getElementById('cancelarEndereco').addEventListener('click', () => modal.remove());
        document.getElementById('confirmarEndereco').addEventListener('click', () => {
            const rua = document.getElementById('ruaEntrega').value.trim();
            const bairro = document.getElementById('bairroEntrega').value.trim();
            const numero = document.getElementById('numeroEntrega').value.trim();
            if (!rua || !bairro || !numero) return mostrarAlerta("Preencha todos os campos do endereço", "alert");

            const texto = carrinho.map(item => `- ${item.nome}: R$ ${Number(item.preco).toFixed(2)}`).join('\n');
            const mensagem = `Olá! Gostaria de fazer um pedido:\n${texto}\n*Total: R$ ${total.toFixed(2)}*\n\n${infoPagamento}\n\nEndereço:\nRua: ${rua}\nBairro: ${bairro}\nNúmero: ${numero}`;

            const numeroLoja = "5518991418453";
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

// Função para verificar horário permitido (18:30 às 00:00, horário de Brasília)
function verificarHorario() {
    // Obter horário de Brasília
    const now = new Date();
    // Horário de Brasília = UTC-3
    const nowBR = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
    
    const hora = nowBR.getHours();
    const minuto = nowBR.getMinutes();

    // Transformar hora e minuto em decimal para facilitar comparação
    const horaDecimal = hora + minuto / 60;

    // 18:30 = 18.5, 00:00 = 24 ou 0 (vamos considerar até 23.999)
    return horaDecimal >= 18.5 && horaDecimal <= 24;
}

// Modificar a função adicionarCarrinho
window.adicionarCarrinho = function (nome, categoria) {
    if (!verificarHorario()) {
        mostrarAlertaHorario("Informamos que os pedidos só estão disponíveis entre 18h30 e 00h00. Solicitamos que retorne nesse período para realizar seu pedido.");
        return;
    }

    const item = cardapio.find(i => i.nome === nome);

    if (!item) {
        mostrarAlertaHorario("Item não encontrado!");
        return;
    }

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
        mostrarAlertaHorario('Item adicionado!');
    }
};
function mostrarAlertaHorario(mensagem) {
    const alertaHorario = document.createElement('div');
    alertaHorario.className = 'alerta-bonito';
    alertaHorario.innerHTML = `<span></span> ${mensagem}`;
    document.body.appendChild(alertaHorario);

    setTimeout(() => alertaHorario.remove(), 3000);
}


    // Eventos
    buscaInput.addEventListener('input', exibirCardapio);
    categoriaSelect.addEventListener('change', exibirCardapio);

    exibirCardapio();
});

