(function() {
    // Bloqueia a página
    const overlay = document.createElement("div");
    overlay.id = "termoOverlay";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,0.96)";
    overlay.style.zIndex = "999999999";
    overlay.style.display = "flex";
    overlay.style.flexDirection = "column";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.padding = "40px";
    overlay.style.fontFamily = "Arial, sans-serif";
    overlay.style.color = "white";
    overlay.style.textAlign = "center";

    overlay.innerHTML = `
        <div style="max-width: 900px;">
            <h2 style="font-size: 28px; margin-bottom: 20px; font-weight: bold;">
                Termo de Mandato, Autorização de Acesso e Declaração de Ciência e Risco
            </h2>

            <div style="
                font-size: 14px;
                text-align: left;
                line-height: 1.45;
                max-height: 350px;
                overflow-y: auto;
                padding-right: 10px;
                background: rgba(255,255,255,0.05);
                border-radius: 8px;
                padding: 15px;
            ">
                <p><strong>AS PARTES</strong></p>

                <p><strong>OUTORGANTE:</strong> O Usuário, pessoa física que realiza o ato de aceite destes termos e que fornecerá as credenciais de acesso, doravante denominado(a) simplesmente OUTORGANTE.</p>

                <p><strong>OUTORGADA:</strong> CYBERHACKSKHAN (“CYBERHACKSKHAN”, “Empresa” ou “Plataforma”), doravante denominada simplesmente OUTORGADA.</p>

                <p>Pelo presente Instrumento Particular, o(a) OUTORGANTE nomeia e constitui, de forma irrevogável e irretratável durante a vigência deste mandato, sua bastante procuradora a OUTORGADA, conferindo-lhe os poderes específicos para atuar em seu nome, representando-o(a) digitalmente perante terceiros, nos exatos termos e limites aqui estabelecidos.</p>

                <p><strong>CLÁUSULA PRIMEIRA - DO OBJETO E ESCOPO DA AUTORIZAÇÃO</strong></p>

                <p>1.1. O objeto deste mandato consiste na concessão de autorização expressa, inequívoca e informada para que a OUTORGADA, utilizando-se das credenciais de acesso (RA, login, senha ou equivalentes) que serão fornecidas voluntariamente pelo(a) OUTORGANTE como ato indispensável à prestação do serviço, acesse e opere plataformas de terceiros em seu nome, com a finalidade exclusiva de prestar os Serviços.</p>

                <p>1.2. A autorização abrange, de forma exemplificativa e não exaustiva, o acesso e a interação com as seguintes plataformas, quando disponíveis no ambiente do(a) OUTORGANTE:</p>

                <ul>
                    <li>Secretaria Escolar Digital (SED)</li>
                    <li>Portal "Sala do Futuro"</li>
                    <li>Matific</li>
                    <li>Khan Academy</li>
                    <li>Árvore (LeiaSP)</li>
                    <li>Speak (Learn Corporation)</li>
                    <li>Expansão Noturno SP (Moodle)</li>
                    <li>Alura</li>
                    <li>E outras correlatas que o(a) OUTORGANTE fornecer</li>
                </ul>

                <p><strong>CLÁUSULA SEGUNDA – DOS PODERES CONCEDIDOS</strong></p>

                <p>2.1. O OUTORGANTE concede poderes amplos e irrestritos para: login, manutenção de sessões, acesso a notas, histórico, atividades, execução de tarefas, organização acadêmica, geração de relatórios, acesso a documentos e todos os demais atos necessários à automação educacional.</p>

                <p>2.2. Todos os atos praticados dentro desses limites são reconhecidos como válidos e ratificados pelo OUTORGANTE.</p>

                <p><strong>CLÁUSULA TERCEIRA – DECLARAÇÕES E ASSUNÇÃO DE RISCOS</strong></p>

                <p>O OUTORGANTE declara:</p>
                <ul>
                    <li>Legitimidade das credenciais fornecidas</li>
                    <li>Capacidade civil ou autorização dos responsáveis</li>
                    <li>Assunção total dos riscos acadêmicos (notas zero, sanções, reprovação, etc.)</li>
                    <li>Ciência de que CYBERHACKSKHAN não é afiliada às instituições de ensino</li>
                </ul>

                <p><strong>CLÁUSULA QUARTA – PRIVACIDADE E LGPD</strong></p>

                <p>A OUTORGADA tratará os dados exclusivamente para fins do serviço contratado, adotando medidas de segurança e criptografia.</p>

                <p><strong>CLÁUSULA QUINTA – PROPRIEDADE INTELECTUAL</strong></p>

                <p>O termo não concede ao OUTORGANTE qualquer direito sobre o código-fonte, software, algoritmos ou marcas da OUTORGADA.</p>

                <p><strong>CLÁUSULA SEXTA – LIMITAÇÃO DE RESPONSABILIDADE</strong></p>

                <p>A OUTORGADA não garante funcionamento contínuo, compatibilidade total ou desempenho perfeito, sendo apenas um serviço assistivo.</p>

                <p><strong>CLÁUSULA SÉTIMA – INDENIZAÇÃO</strong></p>

                <p>O OUTORGANTE isentará a OUTORGADA de quaisquer danos, processos, perdas ou reclamações decorrentes do uso.</p>

                <p><strong>CLÁUSULA OITAVA – VIGÊNCIA</strong></p>

                <p>O termo vale enquanto o usuário utiliza a plataforma, podendo revogar a qualquer momento.</p>

                <p><strong>CLÁUSULA NONA – ACEITE JURÍDICO</strong></p>

                <p>O aceite eletrônico possui validade jurídica conforme a Medida Provisória nº 2.200-2/2001.</p>

                <p><strong>CLÁUSULA DÉCIMA – DISPOSIÇÕES GERAIS</strong></p>

                <p>Este termo constitui o acordo integral entre as partes.</p>

                <p style="opacity: 0.7; margin-top: 10px;">
                    © 2025 CYBERHACKSKHAN. Todos os direitos reservados.
                </p>
            </div>

            <div style="margin-top: 25px; display: flex; gap: 20px; justify-content: center;">
                <button id="btnConcordo" style="
                    padding: 12px 25px;
                    background: #4CAF50;
                    border: none;
                    border-radius: 8px;
                    color: white;
                    font-size: 16px;
                    cursor: pointer;
                ">Concordo</button>

                <button id="btnRecuso" style="
                    padding: 12px 25px;
                    background: #D32F2F;
                    border: none;
                    border-radius: 8px;
                    color: white;
                    font-size: 16px;
                    cursor: pointer;
                ">Recuso</button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    // Se clicar em CONCORDO
    document.getElementById("btnConcordo").onclick = () => {
        overlay.remove();
        console.log("✔ Termo aceito. Script liberado.");
    };

    // Se clicar em RECUSO
    document.getElementById("btnRecuso").onclick = () => {
        overlay.remove();
        console.log("❌ Termo recusado. Script desativado.");
        return;
    };
})();
