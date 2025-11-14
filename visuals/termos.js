(function() {
    // Bloqueia a página
    const overlay = document.createElement("div");
    overlay.id = "termoOverlay";
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,0.95)";
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
        <div style="max-width: 800px;">
            <h2 style="font-size: 26px; margin-bottom: 20px; font-weight: bold;">
                Termo de Autorização, Ciência e Risco
            </h2>

            <div style="font-size: 15px; text-align: justify; line-height: 1.5; max-height: 350px; overflow-y: auto; padding-right: 10px;">
                <p>
                Este termo estabelece a autorização para o uso dos serviços de automação da plataforma CYBERHACKSKHAN.
                O usuário declara ter lido, compreendido e concordado com os riscos e responsabilidades,
                incluindo possíveis consequências acadêmicas, administrativas ou disciplinares.
                </p>
                <p>
                O uso deste sistema é de total responsabilidade do usuário (OUTORGANTE), que autoriza a automação
                de acessos, execução de atividades e consultas em plataformas educacionais de terceiros.
                Ao prosseguir, o usuário assume integralmente os riscos associados ao uso da ferramenta.
                </p>
                <p>
                Caso não concorde com este termo, clique em <strong>Recuso</strong> e o sistema será desabilitado imediatamente.
                </p>
            </div>

            <div style="margin-top: 30px; display: flex; gap: 20px; justify-content: center;">
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
        // Aqui pode iniciar seu script NORMAL
        console.log("✔ Termo aceito. Script liberado.");
    };

    // Se clicar em RECUSO
    document.getElementById("btnRecuso").onclick = () => {
        overlay.remove();
        console.log("❌ Termo recusado. Script desativado.");
        return; // Impede seu script de continuar
    };
})();
