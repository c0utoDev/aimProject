const botao = document.getElementById('alvo');

botao.addEventListener('click', () => {
    const maxX = window.innerWidth - botao.offsetWidth;
    const maxY = window.innerHeight - botao.offsetHeight;

    const margem = 20;
    const randomX = Math.floor(Math.random() * (maxX - margem * 2)) + margem;
    const randomY = Math.floor(Math.random() * (maxY - margem * 2)) + margem;


    botao.style.left = randomX + 'px';
    botao.style.top = randomY + 'px';

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    botao.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});