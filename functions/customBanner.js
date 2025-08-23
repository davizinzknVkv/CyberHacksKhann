const phrases = [ 
    "[🌿] Chora Seduc Lixo.",
    "[🌿] SCROTKAHN on top.",
    "[🌿] davizinzkn said hello!",
    "[🌿] Deus, eu queria ter o ScrotKhan.",
    "[🌿] Fique bom, pegue Khanware!",
    "[🌿] davizinzkn.shop goes brrrrr" 
];

setInterval(() => { 
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);
