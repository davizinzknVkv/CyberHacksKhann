Object.assign(statsPanel.style, {
    position: 'fixed', top: '95%', left: '20px', width: '270px', height: '34px',
    backgroundColor: 'rgba(34,139,34,0.7)', color: '#FFD700', fontSize: '15px', fontFamily: 'Arial, sans-serif',
    display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'default', borderRadius: '12px',
    userSelect: 'none', zIndex: '1000', transition: 'transform 0.3s', backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)',
    border: '2px solid #B22222', boxShadow: '0 0 8px #B22222',
});

const getPing = async () => { if(window.disablePing) return ':( '; try { const t = performance.now(); await fetch('https://pt.khanacademy.org/', { method: 'HEAD' }); return Math.round(performance.now() - t); } catch { return 'Error'; } };

let lastFrameTime = performance.now(), frameCount = 0, fps = 0;

(function calcFPS() { if (++frameCount && performance.now() - lastFrameTime >= 1000) { fps = Math.round(frameCount * 1000 / (performance.now() - lastFrameTime)); frameCount = 0; lastFrameTime = performance.now(); } requestAnimationFrame(calcFPS); })();

const getTime = () => new Date().toLocaleTimeString();
const update = async () => statsPanel.innerHTML = `
    <span style="text-shadow: 0 0 6px #FFD700, 0 0 12px #B22222;">🎄 CyberHacks 🎅</span>
    <span style="margin: 0 8px;">|</span><span>${fps}fps</span>
    <span style="margin: 0 8px;">|</span><span>${await getPing()}ms</span>
    <span style="margin: 0 8px;">|</span><span>${getTime()}</span>
`;

update(); document.body.appendChild(statsPanel); setInterval(update, 1000);

let isDragging = false, offsetX, offsetY;

statsPanel.onmousedown = e => { isDragging = true; offsetX = e.clientX - statsPanel.offsetLeft; offsetY = e.clientY - statsPanel.offsetTop; statsPanel.style.transform = 'scale(0.9)'; };
statsPanel.onmouseup = () => { isDragging = false; statsPanel.style.transform = 'scale(1)'; };

document.onmousemove = e => { if (isDragging) { Object.assign(statsPanel.style, { left: `${Math.max(0, Math.min(e.clientX - offsetX, window.innerWidth - statsPanel.offsetWidth))}px`, top: `${Math.max(0, Math.min(e.clientY - offsetY, window.innerHeight - statsPanel.offsetHeight))}px` }); }};

if(device.mobile) plppdo.on('domChanged', () => window.location.href.includes("khanacademy.org/profile") ? statsPanel.style.display = 'flex' : statsPanel.style.display = 'none' );




