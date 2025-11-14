(function () {
    // Evita carregar o script antes da hora
    if (window._termosLoaded) return;
    window._termosLoaded = true;

    // Criar tela preta
    const termosDiv = document.createElement("div");
    termosDiv.id = "termosOverlay";
    termosDiv.style = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.92);
        z-index: 999999999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
    `;
    document.body.appendChild(termosDiv);

    // Caixa interna
    const box = document.createElement("div");
    box.style = `
        background: #141414;
        color: #fff;
        padding: 25px;
        width: 480px;
        border-radius: 12px;
        border: 1px solid #444;
        box-shadow: 0 0 15px rgba(0,0,0,0.5);
        text-align: center;
    `;
    termosDiv.appendChild(box);

    // Título
    const title = document.createElement("h2");
    title.innerText = "⚠ Termos de Uso";
    title.style = "margin-top: 0; margin-bottom: 15px; font-size: 24px;";
    box.appendChild(title);

    // Texto dos termos (pode mudar se quiser)
    const text = document.createElement("p");
    text.innerText =
        "Antes de continuar, você deve concordar que este script é apenas para fins educativos. " +
        "Não nos responsabilizamos por uso indevido.";
    text.style = "line-height: 22px; opacity: 0.9; margin-bottom: 25px;";
    box.appendChild(text);

    // Botões
    const buttons = document.createElement("div");
    buttons.style = "display: flex; gap: 10px; justify-content: center;";
    box.appendChild(buttons);

    const btnConcordo = document.createElement("button");
    btnConcordo.innerText = "Concordo";
    btnConcordo.style = `
        padding: 10px 18px;
        background: #27ae60;
        border: none;
        border-radius: 6px;
        color: white;
        cursor: pointer;
        font-size: 16px;
    `;
    buttons.appendChild(btnConcordo);

    const btnRecuso = document.createElement("button");
    btnRecuso.innerText = "Recuso";
    btnRecuso.style = `
        padding: 10px 18px;
        background: #c0392b;
        border: none;
        border-radius: 6px;
        color: white;
        cursor: pointer;
        font-size: 16px;
    `;
    buttons.appendChild(btnRecuso);

    // --- EVENTO SE A PESSOA ACEITAR ---
    btnConcordo.onclick = () => {
        termosDiv.remove();
        console.log("Usuário aceitou os termos.");
    };

    // --- EVENTO SE A PESSOA RECUSAR ---
    btnRecuso.onclick = () => {
        alert("Você recusou os termos. O site será restaurado.");
        window.location.reload(true);
    };

})();
