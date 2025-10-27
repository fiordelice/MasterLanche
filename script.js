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
// --- Substitua/cole esta parte EM VEZ da lógica anterior de "finalizar" ---
finalizarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!carrinho || carrinho.length === 0) {
        return mostrarAlerta("Adicione itens ao carrinho primeiro!", "alert");
    }

    // Remove modal anterior se existir (evita duplicar)
    const existing = document.getElementById('modalPagamentoPro');
    if (existing) existing.remove();

    // --- Criar modal profissional ---
    const modal = document.createElement('div');
    modal.id = 'modalPagamentoPro';
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
      <div class="modal-content" role="dialog" aria-modal="true" style="max-width:500px; width:95%; padding:18px; border-radius:10px;">
        <h3 style="margin:0 0 10px;">Forma de Pagamento</h3>

        <label for="selectPagamentoPro" style="display:block; margin-bottom:8px;">Escolha:</label>
        <select id="selectPagamentoPro" style="width:100%; padding:8px; margin-bottom:12px; border-radius:6px;">
          <option value="">Selecione...</option>
          <option value="pix">Pix</option>
          <option value="dinheiro">Dinheiro</option>
          <option value="cartao">Cartão</option>
        </select>

        <div id="detalhesPagamentoPro" style="min-height:80px; margin-bottom:12px;"></div>

        <div style="display:flex; gap:10px;">
          <button id="confirmarFinalizacaoPro" disabled style="flex:1; padding:10px; border-radius:8px; border:none; background:#b5b5b5; color:#fff; cursor:not-allowed;">
            Finalizar Pedido
          </button>
          <button id="cancelarFinalizacaoPro" style="flex:1; padding:10px; border-radius:8px; border:1px solid #ccc; background:#fff; color:#333;">
            Cancelar
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const select = document.getElementById('selectPagamentoPro');
    const detalhes = document.getElementById('detalhesPagamentoPro');
    const btnConfirm = document.getElementById('confirmarFinalizacaoPro');
    const btnCancel = document.getElementById('cancelarFinalizacaoPro');

    // formatador simples para R$
    const fmt = (num) => Number(num).toFixed(2).replace('.', ',');

    // calcula total mostrado no modal
    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

    // helper para habilitar/desabilitar confirm
    function setConfirmEnabled(enabled) {
        btnConfirm.disabled = !enabled;
        if (enabled) {
            btnConfirm.style.background = '#25d366'; // verde whatsapp
            btnConfirm.style.cursor = 'pointer';
        } else {
            btnConfirm.style.background = '#b5b5b5';
            btnConfirm.style.cursor = 'not-allowed';
        }
    }

    // Quando muda seleção principal
    select.addEventListener('change', () => {
        detalhes.innerHTML = '';
        setConfirmEnabled(false);

        if (select.value === 'pix') {
            detalhes.innerHTML = `
              <p style="margin:6px 0;"><strong>Total:</strong> R$ ${fmt(total)}</p>
              <p style="margin:6px 0;">Copie a chave PIX para efetuar o pagamento:</p>
              <div style="display:flex; gap:8px; align-items:center;">
                <input id="pixKeyPro" value="5518991418453" readonly style="flex:1; padding:8px; border-radius:6px; border:1px solid #ddd; text-align:center; font-weight:600;">
                <button id="copyPixPro" style="padding:8px 10px; border-radius:6px; border:none; background:#007bff; color:#fff; cursor:pointer;">Copiar</button>
              </div>
              <p style="font-size:13px; color:#666; margin-top:8px;">Depois de copiar, confirme para enviar o pedido com as informações.</p>
            `;
            // copy functionality
            document.getElementById('copyPixPro').addEventListener('click', async () => {
                const key = document.getElementById('pixKeyPro').value;
                try {
                    await navigator.clipboard.writeText(key);
                    mostrarAlerta('Chave PIX copiada!', 'add');
                } catch (err) {
                    // fallback
                    const inp = document.getElementById('pixKeyPro');
                    inp.select();
                    document.execCommand('copy');
                    mostrarAlerta('Chave PIX copiada!', 'add');
                }
            });
            setConfirmEnabled(true);

        } else if (select.value === 'dinheiro') {
            detalhes.innerHTML = `
              <p style="margin:6px 0;"><strong>Total:</strong> R$ ${fmt(total)}</p>
              <div style="margin-top:6px;">
                <label style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                  <input type="radio" name="trocoPrecisaPro" value="nao" checked> Não preciso de troco
                </label>
                <label style="display:flex; align-items:center; gap:8px;">
                  <input type="radio" name="trocoPrecisaPro" value="sim"> Preciso de troco
                </label>
              </div>
              <div id="trocoAreaPro" style="margin-top:8px; display:none;">
                <label style="display:block; margin-bottom:6px;">Troco para quanto? (valor que você dará)</label>
                <input id="trocoValorPro" type="text" placeholder="Ex: 50.00" style="width:100%; padding:8px; border-radius:6px; border:1px solid #ddd;">
                <p style="font-size:13px; color:#666; margin-top:6px;">Informe o VALOR que você entregará (ex: 50.00). Se vazio, será enviado como "Sem troco".</p>
              </div>
            `;

            const radios = detalhes.querySelectorAll('input[name="trocoPrecisaPro"]');
            const trocoArea = document.getElementById('trocoAreaPro');
            radios.forEach(r => r.addEventListener('change', () => {
                if (r.value === 'sim' && r.checked) {
                    trocoArea.style.display = 'block';
                } else if (r.value === 'nao' && r.checked) {
                    trocoArea.style.display = 'none';
                }
            }));

            // confirm can be pressed even if no troco (user chose "nao"), so enable
            setConfirmEnabled(true);

        } else if (select.value === 'cartao') {
            detalhes.innerHTML = `
              <p style="margin:6px 0;"><strong>Total:</strong> R$ ${fmt(total)}</p>
              <label style="display:block; margin-top:8px; margin-bottom:6px;">Escolha o tipo de cartão:</label>
              <select id="tipoCartaoPro" style="width:100%; padding:8px; border-radius:6px; border:1px solid #ddd;">
                <option value="">Selecione...</option>
                <option value="Crédito">Crédito</option>
                <option value="Débito">Débito</option>
              </select>
              <p style="font-size:13px; color:#666; margin-top:8px;">O pagamento será processado na entrega.</p>
            `;
            // desabilita até o usuário escolher
            setConfirmEnabled(false);
            const tipo = document.getElementById('tipoCartaoPro');
            tipo.addEventListener('change', () => {
                setConfirmEnabled(tipo.value !== '');
            });
        } else {
            detalhes.innerHTML = '';
            setConfirmEnabled(false);
        }
    });

    // cancelar
    btnCancel.addEventListener('click', () => {
        modal.remove();
    });

    // confirmar finalizacao
    btnConfirm.addEventListener('click', () => {
        if (btnConfirm.disabled) return;

        const forma = select.value;
        const totalNum = carrinho.reduce((acc, item) => acc + item.preco, 0);
        let infoPagamento = `Forma de pagamento: ${forma.charAt(0).toUpperCase() + forma.slice(1)}`;

        if (forma === 'pix') {
            infoPagamento += `\nValor: R$ ${fmt(totalNum)}\nChave Pix: 5518991418453`;
        } else if (forma === 'dinheiro') {
            const trocoRadio = document.querySelector('input[name="trocoPrecisaPro"]:checked').value;
            if (trocoRadio === 'sim') {
                const raw = document.getElementById('trocoValorPro').value.trim().replace(',', '.');
                const num = parseFloat(raw);
                if (!isNaN(num) && num > 0) {
                    infoPagamento += `\nTroco para: R$ ${fmt(num)}`; // valor que o cliente dará
                } else {
                    // Se cliente marcou que precisa mas não informou valor válido, mostra alerta
                    mostrarAlerta("Informe o valor do troco corretamente ou escolha 'Não preciso de troco'.", "alert");
                    return;
                }
            } else {
                infoPagamento += `\nSem troco`;
            }
        } else if (forma === 'cartao') {
            const tipo = document.getElementById('tipoCartaoPro').value;
            if (!tipo) {
                mostrarAlerta("Escolha crédito ou débito!", "alert");
                return;
            }
            infoPagamento += ` (${tipo})`;
        }

        // montar texto do pedido
        const texto = carrinho.map(item => `- ${item.nome}: R$ ${Number(item.preco).toFixed(2)}`).join('\n');
        const mensagem = `Olá! Gostaria de fazer um pedido:\n${texto}\n*Total: R$ ${totalNum.toFixed(2)}*\n\n${infoPagamento}`;

        const numeroLoja = "5518991418453"; // seu número com DDI+DDD
        const url = `https://wa.me/${numeroLoja}?text=${encodeURIComponent(mensagem)}`;

        // abrir whatsapp e limpar
        window.open(url, "_blank");
        mostrarAlerta("Pedido finalizado! Obrigado 😊", "add");
        carrinho = [];
        atualizarCarrinho();

        // remove modal
        modal.remove();
    });

    // abre modal já com foco no select
    select.focus();
});
// --- fim do bloco de finalizar ---


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
