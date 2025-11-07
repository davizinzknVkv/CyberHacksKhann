const phrases = [ 
    "[🎅] Chora Seduc Lixo./nao tenta derruba felipe seduc",
    "[🎄] Fuck Gov",
    "[🎁] CyberHacksKhan on top.",
    "[☃️] davizinzkn said hello!",
    "[🎅] Deus, eu queria ter o CyberHacks.",
    "[🎄] Fique bom, pegue ScrotKhan!",
    "[🎁] cyberhackskhan.space goes brrrrr" 
];

setInterval(() => { 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);
