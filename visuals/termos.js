// Variável global que o main vai esperar
window.aceitouTermos = null;

// Cria o fundo preto de tela inteira
const fundo = document.createElement("div");
fundo.style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    color: white;
    z-index: 999999;
    overflow-y: auto;
    padding: 40px;
    font-family: Arial, sans-serif;
`;
document.body.appendChild(fundo);

// Caixa do texto (tela inteira mesmo, sem popup)
const box = document.createElement("div");
box.style = `
    width: 100%;
    max-width: 900px;
    margin: 0 auto 100px auto;
    font-size: 16px;
    line-height: 22px;
    text-align: left;
`;
fundo.appendChild(box);

// Texto COMPLETO do termo
box.innerHTML = `
<h1 style="text-align:center; margin-bottom:30px; font-size:28px; color:#00ff80;">
Termo de Mandato, Autorização de Acesso e Declaração de Ciência e Risco
</h1>

<p>
Este documento é a base para sua autorização formal, cujo aceite será coletado externamente.
<br><br>

<b>AS PARTES</b><br>
<b>OUTORGANTE:</b> O Usuário, pessoa física que realiza o ato de aceite destes termos e que fornecerá as credenciais de acesso, doravante denominado(a) simplesmente OUTORGANTE.<br><br>

<b>OUTORGADA:</b> CYBERHACKSKHAN (“CYBERHACKSKHAN”, “Empresa” ou “Plataforma”), doravante denominada simplesmente OUTORGADA.
<br><br>

Pelo presente Instrumento Particular, o(a) OUTORGANTE nomeia e constitui, de forma irrevogável e irretratável durante a vigência deste mandato, sua bastante procuradora a OUTORGADA, conferindo-lhe os poderes específicos para atuar em seu nome.
<br><br>

<h2>CLÁUSULA PRIMEIRA - DO OBJETO E ESCOPO DA AUTORIZAÇÃO</h2>

1.1 O objeto deste mandato consiste na concessão de autorização expressa para que a OUTORGADA, utilizando-se das credenciais fornecidas, acesse e opere plataformas de terceiros em seu nome.<br><br>

1.2 A autorização inclui, entre outras plataformas:<br>
• SED<br>
• Sala do Futuro<br>
• Matific<br>
• Khan Academy<br>
• Árvore (LeiaSP)<br>
• Speak<br>
• Expansão Noturno (Moodle)<br>
• Alura<br>
• E demais plataformas relacionadas.
<br><br>

<h2>CLÁUSULA SEGUNDA - DOS PODERES CONCEDIDOS</h2>
O OUTORGANTE concede poderes amplos para login, acesso, execução de tarefas, consulta de dados, análise e todos os atos necessários ao serviço.
<br><br>

<h2>CLÁUSULA TERCEIRA - DECLARAÇÕES, GARANTIAS E RISCOS</h2>
O OUTORGANTE declara que:<br>
• As credenciais são legítimas ou autorizadas<br>
• É capaz civilmente ou possui autorização dos responsáveis<br>
• Assume totalmente os riscos acadêmicos<br>
• Reconhece que o uso pode violar políticas escolares<br>
• A OUTORGADA não tem vínculo com órgãos oficiais
<br><br>

<h2>CLÁUSULA QUARTA - PRIVACIDADE (LGPD)</h2>
A OUTORGADA trata dados apenas para a execução do serviço, adota medidas de segurança e não usa informações para outras finalidades.
<br><br>

<h2>CLÁUSULA QUINTA - PROPRIEDADE INTELECTUAL</h2>
Nada neste termo concede propriedade intelectual ao OUTORGANTE.
<br><br>

<h2>CLÁUSULA SEXTA – ISENÇÃO DE RESPONSABILIDADE</h2>
A OUTORGADA não garante funcionamento contínuo, nem resultados acadêmicos e não responde por falhas externas.
<br><br>

<h2>CLÁUSULA SÉTIMA - INDENIZAÇÃO</h2>
O OUTORGANTE indenizará a OUTORGADA por qualquer uso indevido, violação ou falsidade de informações.
<br><br>

<h2>CLÁUSULA OITAVA - VIGÊNCIA</h2>
O mandato é válido a partir do aceite e pode ser revogado pelo OUTORGANTE a qualquer momento.
<br><br>

<h2>CLÁUSULA NONA - ACEITE EXTERNO</h2>
O aceite será realizado via Discord (ou canal designado) e possui validade jurídica, podendo incluir hash SHA-256, data, hora e ID.
<br><br>

<h2>CLÁUSULA DÉCIMA - DISPOSIÇÕES GERAIS</h2>
O termo constitui o acordo total entre as partes.
<br><br>

© 2025 CYBERHACKSKHAN. Todos os direitos reservados.
</p>

<br><br><br>
`;

// Botões fixos no rodapé
const botoes = document.createElement("div");
botoes.style = `
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #000000dd;
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 30px;
    z-index: 1000000;
`;
botoes.innerHTML = `
    <button id="aceitoTermo" style="padding:12px 30px; background:green; color:white; border:none; font-size:18px; border-radius:8px; cursor:pointer;">ACEITO</button>
    <button id="recusoTermo" style="padding:12px 30px; background:red; color:white; border:none; font-size:18px; border-radius:8px; cursor:pointer;">RECUSO</button>
`;
fundo.appendChild(botoes);

// Eventos
document.getElementById("aceitoTermo").onclick = () => {
    window.aceitouTermos = true;
    fundo.remove();
};

document.getElementById("recusoTermo").onclick = () => {
    window.aceitouTermos = false;
    fundo.remove();
};
