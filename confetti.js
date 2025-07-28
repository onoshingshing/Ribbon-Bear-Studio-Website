// confetti.js
window.addEventListener('DOMContentLoaded', function() {
    const colors = ['#FFD1DC', '#A4D7E1', '#FFC1CC', '#FFF9C4', '#96CEB4', '#F8BBD0', '#B0E0E6'];
    const confettiCount = 30;
    for(let i=0; i<confettiCount; i++){
        const conf = document.createElement('div');
        conf.className = 'confetti';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.animationDuration = (5 + Math.random()*3) + 's';
        conf.style.background = colors[Math.floor(Math.random()*colors.length)];
        conf.style.width = (10 + Math.random()*18) + 'px';
        conf.style.height = (10 + Math.random()*18) + 'px';
        conf.style.borderRadius = `${Math.random() > 0.5 ? "50%" : "30% 70% 70% 30%/60% 30% 70% 40%"}`; // 有些圓有些像氣球
        if(Math.random() > 0.8) conf.style.backgroundImage = 'url("ribbon-bear-logo.png")'; // 小部分也可放氣球或小熊圖
        document.body.appendChild(conf);
    }
});
