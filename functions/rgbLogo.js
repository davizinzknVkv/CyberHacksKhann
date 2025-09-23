plppdo.on('domChanged', () => {
    const khanLogo = document.querySelector('svg._1rt6g9t').querySelector('path:nth-last-of-type(2)');
    const styleElement = document.createElement('style');
    styleElement.className = "RGBLogo"
    styleElement.textContent = `
        @keyframes colorShift {
            0% { fill: rgb(183, 0, 255); }
            33% { fill: rgb(0, 255, 0); }
            66% { fill: rgb(0, 0, 255); }
            100% { fill: rgb(8, 167, 79); }
            100% { fill: rgba(0, 217, 255, 1); }
        }   
    `;
    if(features.rgbLogo&&khanLogo){
        if(!document.getElementsByClassName('RGBLogo')[0]) document.head.appendChild(styleElement);
        if(khanLogo.getAttribute('data-darkreader-inline-fill')!=null) khanLogo.removeAttribute('data-darkreader-inline-fill');
        khanLogo.style.animation = 'colorShift 5s infinite';
    }
})
