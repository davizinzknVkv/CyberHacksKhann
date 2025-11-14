// Variável global que o main vai esperar
window.aceitouTermos = null;

// Criar fundo escuro com fade
const fundo = document.createElement("div");
fundo.style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.88);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999999;
    animation: fadeIn 0.4s ease;
`;
document.body.appendChild(fundo);

// Animação do fade
const styleFade = document.createElement("style");
styleFade.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
`;
document.head.appendChild(styleFade);

// Caixa moderna
const box = document.createElement("div");
box.style = `
    width: 60%;
    max-width: 900px;
    height: 70%;
    background: #0d0d0d;
    padding: 25px;
    border-radius: 14px;
    overflow-y: auto;
    font-family: 'Segoe UI', Arial, sans-serif;
    border: 2px solid #1aff77;
    box-shadow: 0 0 15px #1aff77aa, 0 0 35px #1aff7733 inset;
    animation: popup 0.35s ease;
`;
fundo.appendChild(box);

// Animação da caixa
const stylePopup = document.createElement("style");
stylePopup.innerHTML = `
@keyframes popup {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}
`;
document.head.appendChild(stylePopup);

// Conteúdo
box.innerHTML = `
    <h2 style="
        text-align:center;
        margin-bottom: 20px;
        font-size: 26px;
        color: #1aff77;
        text-shadow: 0 0 6px #1aff77;
    ">
        Termos de Uso — CyberHacksKhan
    </h2>

    <p style="font-size:16px; line-height:23px; margin-bottom:20px;">
        Ao utilizar este script, você declara estar ciente de que se trata de um recurso não oficial,
        desenvolvido apenas para fins educacionais e demonstrativos. O uso desta ferramenta pode
        violar os Termos de Serviço da Khan Academy, resultando em penalidades.
        <br><br>
        O desenvolvedor não se responsabiliza por:
        <br>
        • Suspensões ou banimentos<br>
        • Perdas de conta ou progresso<br>
        • Travamentos, erros ou danos<br>
        • Qualquer consequência do uso indevido
        <br><br>
        Ao clicar em <b style="color:#1aff77;">ACEITO</b>, você confirma que:
        <br>
        • Está usando o script por conta própria<br>
        • Aceita totalmente os termos acima<br>
        • Assume total responsabilidade pelo uso
        <br><br>
        Caso clique em <b style="color:#ff4444;">RECUSO</b>, o script será abortado imediatamente.
    </p>

    <div style="text-align:center; margin-top:25px;">
        <button id="btnAceito" style="
            padding: 12px 28px;
            background: #1aff77;
            color: #000;
            font-weight: bold;
            border: none;
            cursor: pointer;
            margin-right: 20px;
            font-size: 17px;
            border-radius: 8px;
            box-shadow: 0 0 10px #1aff77aa;
            transition: 0.2s;
        ">ACEITO</button>

        <button id="btnRecuso" style="
            padding: 12px 28px;
            background: #ff3333;
            color: #fff;
            font-weight: bold;
            border: none;
            cursor: pointer;
            font-size: 17px;
            border-radius: 8px;
            box-shadow: 0 0 10px #ff3333aa;
            transition: 0.2s;
        ">RECUSO</button>
    </div>
`;

// Efeitos hover
document.querySelector("#btnAceito").onmouseover = e => e.target.style.transform = "scale(1.05)";
document.querySelector("#btnAceito").onmouseout  = e => e.target.style.transform = "scale(1)";

document.querySelector("#btnRecuso").onmouseover = e => e.target.style.transform = "scale(1.05)";
document.querySelector("#btnRecuso").onmouseout  = e => e.target.style.transform = "scale(1)";

// Eventos dos botões
document.getElementById("btnAceito").onclick = () => {
    window.aceitouTermos = true;
    fundo.remove();
};

document.getElementById("btnRecuso").onclick = () => {
    window.aceitouTermos = false;
    fundo.remove();
};
