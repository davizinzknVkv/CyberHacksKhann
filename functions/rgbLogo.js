plppdo.on('domChanged', () => {
    const khanLogo = document.querySelector('svg._1rt6g9t').querySelector('path:nth-last-of-type(2)');
    const styleElement = document.createElement('style');
    styleElement.className = "RGBLogo"
    styleElement.textContent = `
        @keyframes colorShift {
            0% { fill: rgb(220, 20, 60); }      /* Vermelho Natal */
            33% { fill: rgb(34, 139, 34); }     /* Verde Natal */
            66% { fill: rgb(255, 255, 255); }   /* Branco Neve */
            80% { fill: rgb(255, 215, 0); }     /* Dourado */
            100% { fill: rgb(220, 20, 60); }    /* Vermelho Natal */
        }   
    `;
    if(features.rgbLogo&&khanLogo){
        if(!document.getElementsByClassName('RGBLogo')[0]) document.head.appendChild(styleElement);
        if(khanLogo.getAttribute('data-darkreader-inline-fill')!=null) khanLogo.removeAttribute('data-darkreader-inline-fill');
        khanLogo.style.animation = 'colorShift 5s infinite';
    }
})
