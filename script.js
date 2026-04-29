// script.js


const matches = [
    {
        name: "PSG vs L'Olympique de Marseille",
        image: "psg-marseille.png",
        link: "https://www.beinsports.com/fr-fr/football/ligue-1#news",
        competition: "Ligue 1"
    },
    {
        name: "Real Madrid vs FC Barcelone",
        image: "real-barca.png",
        link: "https://www.beinsports.com/fr-fr/football/la-liga#news",
        competition: "Liga"
    },
    {
        name: "Manchester United vs Liverpool",
        image: "Manchester-United--Liverpool.png",
        link: "https://www.beinsports.com/france/premier-league/manchester-united-vs-liverpool",
        competition: "Premier League"
    },
    {
        name: "Bayern Munich vs Borussia Dortmund",
        image: "./bayern.png",
        link: "https://www.beinsports.com/fr-fr/football/bundesliga#news",
        competition: "Bundesliga"
    },
    {
        name: "Juventus vs AC Milan",
        image: "./juventus-Acmilan.png",
        link: "https://www.beinsports.com/france/serie-a/juventus-vs-milan",
        competition: "Serie A"
    }
    // Ajoutez d'autres matchs ici si besoin
];

function afficherMatchsParCompetition(competition) {
    const grid = document.getElementById('matches-grid');
    if (!grid) return;
    grid.innerHTML = '';
    matches.filter(match => match.competition === competition).forEach(match => {
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
}

// Par défaut, sur index.html, afficher tous les matchs
document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('matches-grid');
    if (grid && typeof afficherMatchsParCompetition !== 'function') return;
    if (grid && !window.location.pathname.includes('ligue1') && !window.location.pathname.includes('liga') && !window.location.pathname.includes('premierleague')) {
        grid.innerHTML = '';
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
    }
});
