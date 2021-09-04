let content = document.querySelector("#cont");
let click = document.querySelector("#cont");
let score = 10000;
let scorePlace = document.querySelector("#score");
let clickSound = new Audio('resc/Audio/Click.wav');
let theme = new Audio('resc/Audio/sawkoIntro.wav');
let kupczape = document.querySelector("#kupczape");
let kupdrip = document.querySelector("#kupdrip");
let kupmagika = document.querySelector("#kupmagika");
let mnoznik = 1;
let kapital = document.querySelector("#kapital");
let drip = document.querySelector("#drip");
let magik = document.querySelector("#magik");
let boxdelpls = document.querySelector("#boxdelpls");

document.body.addEventListener("click", e => {
    theme.play();
}, { once: true });

click.addEventListener('click', e => {
    score += mnoznik;
    scorePlace.innerHTML = score;

    const ripple = document.createElement("div");
    ripple.className = "ripple";
    document.body.appendChild(ripple);

    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";

    ripple.style.animation = 'ripple-effect .4s linear';
    ripple.onanimationend = () => ripple.remove();
    clickSound.play();
    console.log(mnoznik);
});

let ceny = {
    czapa: 200,
    drip: 1000,
    magik: 10000
};

let btn = document.querySelector("#btn");
let menu = document.querySelector("#menu");
btn.addEventListener('click', e => {
    menu.classList.toggle('aktywny');
    btn.classList.toggle('aktywny');
    if (score >= ceny.czapa) {
        kupczape.style.backgroundColor = 'green';
    }
    else {
        kupczape.style.backgroundColor = 'red';
    }
    if (score >= ceny.drip) {
        kupdrip.style.backgroundColor = 'green';
    }
    else {
        kupdrip.style.backgroundColor = 'red';
    }
    if (score >= ceny.magik) {
        kupmagika.style.backgroundColor = 'green';
    }
    else {
        kupmagika.style.backgroundColor = 'red';
    }
});
let sciezka;
let themeM = new Audio();
function muzyka(path) {
    if (!themeM.pause()) {
        themeM.pause();
    }
    themeM.src = 'resc/Audio/' + path;
    themeM.play();
    themeM.loop = true;
}
function dodajItem(btn, item, cena, zdj, ile, path, czy) {
    btn.addEventListener("click", e => {
        if (score >= cena) {
            if (czy == 1) {
                setTimeout(() => {
                    content.style.backgroundImage = "url(resc/sawko1.gif)";
                    content.style.backgroundPosition = "50% 50%";
                    content.style.backgroundSize = "150%";
                    console.log(":0");
                }, 1000)
                setTimeout(() => {
                    content.style.backgroundImage = "url(resc/Outfits/" + zdj + ")";
                    content.style.backgroundSize = "190%";
                    boxdelpls.classList.add('aktywny');
                    boxdelpls.style.left = (Math.floor(Math.random() * (100 - 1)) + 1) + "%";
                }, 4000);
            }
            theme.pause();
            mnoznik += ile;
            content.style.backgroundImage = "url(resc/Outfits/" + zdj + ")";
            content.style.backgroundSize = "190%";
            score -= cena;
            item.remove();

            muzyka(path);
        }
    })
}
dodajItem(kupczape, kapital, ceny.czapa, 'srump.png', 8 - 1, 'loop.wav', 0);
dodajItem(kupdrip, drip, ceny.drip, 'dripawko.jpg', 30 - 1, 'dripmusic.mp3', 1);
dodajItem(kupmagika, magik, ceny.magik, 'sawkoczarodziej.jpg', 90 - 1, 'loop.wav', 0);

