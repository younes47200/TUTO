// script.js

const matches = [
    {
        name: "PSG vs L'Olympique de Marseille",
        image: "psg-marseille.png",
        link: "https://www.beinsports.com/fr-fr/football/ligue-1#news"
    },
    {
        name: "Real Madrid vs FC Barcelone",
        image: "real-barca.png",
        link: "https://www.beinsports.com/fr-fr/football/la-liga#news"
    },
    {
        name: "Manchester United vs Liverpool",
        image: "https://static.beinsports.com/image/manu-liverpool.jpg",
        link: "https://www.beinsports.com/france/premier-league/manchester-united-vs-liverpool"
    },
    {
        name: "Bayern Munich vs Borussia Dortmund",
        image: "https://static.beinsports.com/image/bayern-dortmund.jpg",
        link: "https://www.beinsports.com/fr-fr/football/bundesliga#news"
    },
    {
        name: "Juventus vs AC Milan",
        image: "https://static.beinsports.com/image/juve-milan.jpg",
        link: "https://www.beinsports.com/france/serie-a/juventus-vs-milan"
    }
    // Ajoutez d'autres matchs ici si besoin
];

const grid = document.getElementById('matches-grid');

matches.forEach(match => {
    const card = document.createElement('a');
    card.className = 'match-card';
    card.href = match.link;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';

    const img = document.createElement('img');
    img.src = match.image;
    img.alt = match.name;

    const title = document.createElement('div');
    title.className = 'match-title';
    title.textContent = match.name;

    card.appendChild(img);
    card.appendChild(title);
    grid.appendChild(card);
});
