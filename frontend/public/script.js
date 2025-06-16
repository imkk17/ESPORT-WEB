// Mock Data
const mockTournaments = [
    {
        id: 1,
        name: "World Championship 2025",
        game: "Valorant",
        date: "Jun 15 - Jul 02, 2025",
        location: "Los Angeles, CA",
        prize: "$1,000,000",
        participants: 32,
        status: "upcoming",
        image: "https://images.pexels.com/photos/9093874/pexels-photo-9093874.jpeg",
        description: "The biggest Valorant tournament of the year featuring the world's best teams."
    },
    {
        id: 2,
        name: "CS2 Major Championship",
        game: "Counter-Strike 2",
        date: "Jul 10 - Jul 24, 2025",
        location: "Stockholm, Sweden",
        prize: "$2,000,000",
        participants: 24,
        status: "upcoming",
        image: "https://images.pexels.com/photos/19012052/pexels-photo-19012052.jpeg",
        description: "The premier Counter-Strike tournament with the highest prize pool."
    },
    {
        id: 3,
        name: "League of Legends Worlds",
        game: "League of Legends",
        date: "Aug 01 - Aug 20, 2025",
        location: "Seoul, South Korea",
        prize: "$2,225,000",
        participants: 22,
        status: "live",
        image: "https://images.pexels.com/photos/19012035/pexels-photo-19012035.jpeg",
        description: "The most prestigious League of Legends tournament in the world."
    },
    {
        id: 4,
        name: "Dota 2 International",
        game: "Dota 2",
        date: "Sep 15 - Oct 05, 2025",
        location: "Singapore",
        prize: "$15,000,000",
        participants: 20,
        status: "upcoming",
        image: "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg",
        description: "The largest prize pool in esports history."
    },
    {
        id: 5,
        name: "Rocket League Championship",
        game: "Rocket League",
        date: "Oct 12 - Oct 20, 2025",
        location: "London, UK",
        prize: "$600,000",
        participants: 16,
        status: "upcoming",
        image: "https://images.pexels.com/photos/10988021/pexels-photo-10988021.jpeg",
        description: "High-speed car soccer action with the world's best teams."
    },
    {
        id: 6,
        name: "Overwatch 2 Grand Finals",
        game: "Overwatch 2",
        date: "Nov 05 - Nov 12, 2025",
        location: "Toronto, Canada",
        prize: "$1,500,000",
        participants: 12,
        status: "upcoming",
        image: "https://images.unsplash.com/photo-1533654238074-8841f6e8e610?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxnYW1pbmclMjBjb21wZXRpdGlvbnxlbnwwfHx8Ymx1ZXwxNzUwMDYxODY1fDA&ixlib=rb-4.1.0&q=85",
        description: "Team-based shooter showdown with the best Overwatch teams."
    }
];

const mockMatches = [
    {
        id: 1,
        tournament: "World Championship 2025",
        team1: { name: "Team Liquid", flag: "🇺🇸", score: 2 },
        team2: { name: "Fnatic", flag: "🇬🇧", score: 1 },
        status: "completed",
        time: "2 hours ago",
        game: "Valorant"
    },
    {
        id: 2,
        tournament: "CS2 Major Championship",
        team1: { name: "Astralis", flag: "🇩🇰", score: 1 },
        team2: { name: "NAVI", flag: "🇺🇦", score: 2 },
        status: "completed",
        time: "4 hours ago",
        game: "Counter-Strike 2"
    },
    {
        id: 3,
        tournament: "League of Legends Worlds",
        team1: { name: "T1", flag: "🇰🇷", score: 0 },
        team2: { name: "G2 Esports", flag: "🇪🇺", score: 0 },
        status: "live",
        time: "LIVE",
        game: "League of Legends"
    },
    {
        id: 4,
        tournament: "World Championship 2025",
        team1: { name: "Sentinels", flag: "🇺🇸", score: null },
        team2: { name: "LOUD", flag: "🇧🇷", score: null },
        status: "upcoming",
        time: "in 2 hours",
        game: "Valorant"
    },
    {
        id: 5,
        tournament: "Dota 2 International",
        team1: { name: "OG", flag: "🇪🇺", score: null },
        team2: { name: "PSG.LGD", flag: "🇨🇳", score: null },
        status: "upcoming",
        time: "Tomorrow 18:00",
        game: "Dota 2"
    }
];

const mockNews = [
    {
        id: 1,
        title: "Team Liquid Dominates Valorant Championship Qualifiers",
        excerpt: "Team Liquid secured their spot in the World Championship with a dominant 3-0 victory over Cloud9 in yesterday's qualifier match.",
        time: "2 hours ago",
        author: "Sarah Johnson",
        category: "Valorant",
        image: "https://images.pexels.com/photos/7562116/pexels-photo-7562116.jpeg"
    },
    {
        id: 2,
        title: "New Prize Pool Record Set for CS2 Major",
        excerpt: "The upcoming CS2 Major Championship announces a record-breaking $2 million prize pool, the highest in Counter-Strike history.",
        time: "5 hours ago",
        author: "Mike Chen",
        category: "Counter-Strike 2",
        image: "https://images.pexels.com/photos/5657556/pexels-photo-5657556.jpeg"
    },
    {
        id: 3,
        title: "Rookie Player 'Phoenix' Makes Professional Debut",
        excerpt: "19-year-old prodigy 'Phoenix' joins Team Liquid's Valorant roster, becoming the youngest player in professional esports.",
        time: "1 day ago",
        author: "Alex Rivera",
        category: "Valorant",
        image: "https://images.pexels.com/photos/9093874/pexels-photo-9093874.jpeg"
    }
];

const mockPlayers = [
    {
        id: 1,
        name: "TenZ",
        realName: "Tyson Ngo",
        team: "Sentinels",
        game: "Valorant",
        country: "🇨🇦",
        rating: 1.45,
        image: "https://images.pexels.com/photos/19012052/pexels-photo-19012052.jpeg"
    },
    {
        id: 2,
        name: "s1mple",
        realName: "Oleksandr Kostyliev",
        team: "NAVI",
        game: "Counter-Strike 2",
        country: "🇺🇦",
        rating: 1.38,
        image: "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg"
    },
    {
        id: 3,
        name: "Faker",
        realName: "Lee Sang-hyeok",
        team: "T1",
        game: "League of Legends",
        country: "🇰🇷",
        rating: 9.2,
        image: "https://images.pexels.com/photos/10988021/pexels-photo-10988021.jpeg"
    }
];

// Global variables
let currentView = 'home';
let searchQuery = '';
let selectedGame = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeParticleSystem();
    initializeMatrixBackground();
    initializeNavigation();
    initializeModals();
    initializeSearch();
    populateContent();
});

// Particle System
function initializeParticleSystem() {
    const particlesContainer = document.getElementById('particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.3;
        particlesContainer.appendChild(particle);
    }
}

// Matrix Background
function initializeMatrixBackground() {
    const matrixContainer = document.getElementById('matrix-bg');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    
    for (let i = 0; i < 20; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = i * 5 + '%';
        column.style.animationDelay = Math.random() * 10 + 's';
        
        for (let j = 0; j < 20; j++) {
            const char = document.createElement('div');
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.opacity = Math.random() * 0.8 + 0.2;
            column.appendChild(char);
        }
        
        matrixContainer.appendChild(column);
    }
}

// Navigation
function initializeNavigation() {
    // Desktop navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            switchView(view);
            updateActiveNav(btn, navButtons);
        });
    });
    
    // Mobile navigation
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavButtons = document.querySelectorAll('.mobile-nav-btn');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    mobileNavButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            switchView(view);
            updateActiveNav(btn, mobileNavButtons);
            mobileMenu.style.display = 'none';
        });
    });
}

function switchView(view) {
    currentView = view;
    
    // Hide all views
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
    });
    
    // Show selected view
    document.getElementById(view + '-view').classList.add('active');
    
    // Update content for specific views
    if (view === 'tournaments') {
        populateAllTournaments();
    } else if (view === 'matches') {
        populateAllMatches();
    } else if (view === 'news') {
        populateAllNews();
    } else if (view === 'players') {
        populateAllPlayers();
    }
}

function updateActiveNav(activeBtn, allButtons) {
    allButtons.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// Modals
function initializeModals() {
    const tournamentModal = document.getElementById('tournament-modal');
    const matchModal = document.getElementById('match-modal');
    const closeTournamentModal = document.getElementById('close-tournament-modal');
    const closeMatchModal = document.getElementById('close-match-modal');
    
    closeTournamentModal.addEventListener('click', () => {
        tournamentModal.classList.remove('active');
    });
    
    closeMatchModal.addEventListener('click', () => {
        matchModal.classList.remove('active');
    });
    
    // Close modals when clicking overlay
    [tournamentModal, matchModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
}

function showTournamentModal(tournament) {
    const modal = document.getElementById('tournament-modal');
    
    document.getElementById('modal-tournament-image').src = tournament.image;
    document.getElementById('modal-tournament-title').textContent = tournament.name.toUpperCase();
    document.getElementById('modal-tournament-description').textContent = tournament.description;
    
    const statusElement = document.getElementById('modal-tournament-status');
    statusElement.textContent = tournament.status.toUpperCase();
    statusElement.className = `tournament-status ${tournament.status}`;
    
    const infoGrid = document.getElementById('modal-tournament-info');
    infoGrid.innerHTML = `
        <div class="modal-info-item">
            <div class="modal-info-label">Game Protocol</div>
            <div class="modal-info-value neon-text-blue">${tournament.game}</div>
        </div>
        <div class="modal-info-item">
            <div class="modal-info-label">Timeline</div>
            <div class="modal-info-value neon-text-pink">${tournament.date}</div>
        </div>
        <div class="modal-info-item">
            <div class="modal-info-label">Location</div>
            <div class="modal-info-value neon-text-green">${tournament.location}</div>
        </div>
        <div class="modal-info-item">
            <div class="modal-info-label">Prize Matrix</div>
            <div class="modal-info-value neon-text-yellow">${tournament.prize}</div>
        </div>
    `;
    
    modal.classList.add('active');
}

function showMatchModal(match) {
    const modal = document.getElementById('match-modal');
    
    const analysisSection = document.getElementById('match-analysis');
    analysisSection.innerHTML = `
        <div class="match-teams-analysis">
            <div class="match-team-analysis">
                <div class="match-team-analysis-info">
                    <span class="match-team-analysis-flag">${match.team1.flag}</span>
                    <div>
                        <div class="match-team-analysis-name">${match.team1.name}</div>
                        <div class="match-team-analysis-line"></div>
                    </div>
                </div>
            </div>
            
            <div class="match-scores-analysis">
                <span class="match-score-analysis ${match.status === 'completed' ? 'neon-text-green' : 'text-gray-500'}">
                    ${match.team1.score !== null ? match.team1.score : '-'}
                </span>
                <div class="match-vs-analysis">
                    <span class="match-vs-analysis-text">VS</span>
                    ${match.status === 'live' ? '<div class="match-vs-analysis-indicator"></div>' : ''}
                </div>
                <span class="match-score-analysis ${match.status === 'completed' ? 'neon-text-green' : 'text-gray-500'}">
                    ${match.team2.score !== null ? match.team2.score : '-'}
                </span>
            </div>
            
            <div class="match-team-analysis">
                <div class="match-team-analysis-info">
                    <div>
                        <div class="match-team-analysis-name">${match.team2.name}</div>
                        <div class="match-team-analysis-line"></div>
                    </div>
                    <span class="match-team-analysis-flag">${match.team2.flag}</span>
                </div>
            </div>
        </div>
        
        <div class="match-time-analysis ${match.status} ${match.status === 'live' ? 'neon-text-pink' : match.status === 'upcoming' ? 'neon-text-blue' : 'neon-text-green'}">
            ${match.time.toUpperCase()}
        </div>
    `;
    
    const infoGrid = document.getElementById('modal-match-info');
    infoGrid.innerHTML = `
        <div class="modal-info-item">
            <div class="modal-info-label">Tournament</div>
            <div class="modal-info-value">${match.tournament}</div>
        </div>
        <div class="modal-info-item">
            <div class="modal-info-label">Game Protocol</div>
            <div class="modal-info-value">${match.game}</div>
        </div>
    `;
    
    const actionsSection = document.getElementById('modal-match-actions');
    let actionsHTML = '';
    
    if (match.status === 'live') {
        actionsHTML += '<button class="cyber-button" style="background: linear-gradient(135deg, #dc2626, #ec4899); animation: cyberpunk-pulse 1s infinite;">📺 WATCH LIVE STREAM</button>';
    } else if (match.status === 'upcoming') {
        actionsHTML += '<button class="cyber-button">⏰ SET ALERT PROTOCOL</button>';
    } else if (match.status === 'completed') {
        actionsHTML += '<button class="cyber-button" style="background: linear-gradient(135deg, #059669, #10b981);">🎬 VIEW HIGHLIGHTS</button>';
    }
    
    actionsHTML += '<button class="glass-cyber" style="color: #00d4ff; padding: 1rem 2rem; border-radius: 16px; font-family: Orbitron, monospace; font-weight: 900; font-size: 1.125rem; text-transform: uppercase;">📊 BATTLE STATS</button>';
    
    actionsSection.innerHTML = actionsHTML;
    
    modal.classList.add('active');
}

// Search and Filter
function initializeSearch() {
    const tournamentSearch = document.getElementById('tournament-search');
    const tournamentFilter = document.getElementById('tournament-filter');
    const matchSearch = document.getElementById('match-search');
    const matchFilter = document.getElementById('match-filter');
    
    if (tournamentSearch) {
        tournamentSearch.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            populateAllTournaments();
        });
    }
    
    if (tournamentFilter) {
        tournamentFilter.addEventListener('change', (e) => {
            selectedGame = e.target.value;
            populateAllTournaments();
        });
    }
    
    if (matchSearch) {
        matchSearch.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            populateAllMatches();
        });
    }
    
    if (matchFilter) {
        matchFilter.addEventListener('change', (e) => {
            selectedGame = e.target.value;
            populateAllMatches();
        });
    }
}

function filterTournaments(tournaments) {
    return tournaments.filter(tournament => {
        const matchesSearch = tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             tournament.game.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGame = selectedGame === 'all' || tournament.game === selectedGame;
        return matchesSearch && matchesGame;
    });
}

function filterMatches(matches) {
    return matches.filter(match => {
        const matchesSearch = match.tournament.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             match.team1.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             match.team2.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGame = selectedGame === 'all' || match.game === selectedGame;
        return matchesSearch && matchesGame;
    });
}

// Content Population
function populateContent() {
    populateFeaturedTournaments();
    populateMatches();
    populateNews();
    populatePlayers();
}

function populateFeaturedTournaments() {
    const container = document.getElementById('tournaments-grid');
    const featuredTournaments = mockTournaments.slice(0, 4);
    
    container.innerHTML = featuredTournaments.map((tournament, index) => `
        <div class="tournament-card holo-card ${index === 0 ? 'featured' : ''}" onclick="showTournamentModal(${JSON.stringify(tournament).replace(/"/g, '&quot;')})">
            <div class="tournament-image">
                <img src="${tournament.image}" alt="${tournament.name}" class="tournament-bg">
                <div class="tournament-overlay"></div>
                <div class="tournament-status ${tournament.status}">${tournament.status.toUpperCase()}</div>
                <div class="tournament-content">
                    <h3 class="tournament-title ${index === 0 ? 'text-3xl' : 'text-xl'}">${tournament.name.toUpperCase()}</h3>
                    <p class="tournament-game">${tournament.game.toUpperCase()}</p>
                    <div class="tournament-info">
                        <div class="tournament-info-item">
                            <div class="tournament-prize">${tournament.prize}</div>
                            <div class="tournament-info-label">Prize Pool</div>
                        </div>
                        <div class="tournament-info-item">
                            <div class="tournament-teams">${tournament.participants}</div>
                            <div class="tournament-info-label">Teams</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function populateAllTournaments() {
    const container = document.getElementById('all-tournaments-grid');
    if (!container) return;
    
    const filteredTournaments = filterTournaments(mockTournaments);
    
    container.innerHTML = filteredTournaments.map(tournament => `
        <div class="tournament-card holo-card" onclick="showTournamentModal(${JSON.stringify(tournament).replace(/"/g, '&quot;')})">
            <div class="tournament-image">
                <img src="${tournament.image}" alt="${tournament.name}" class="tournament-bg">
                <div class="tournament-overlay"></div>
                <div class="tournament-status ${tournament.status}">${tournament.status.toUpperCase()}</div>
                <div class="tournament-content">
                    <h3 class="tournament-title">${tournament.name.toUpperCase()}</h3>
                    <p class="tournament-game">${tournament.game.toUpperCase()}</p>
                    <div class="tournament-info">
                        <div class="tournament-info-item">
                            <div class="tournament-prize">${tournament.prize}</div>
                            <div class="tournament-info-label">Prize Pool</div>
                        </div>
                        <div class="tournament-info-item">
                            <div class="tournament-teams">${tournament.participants}</div>
                            <div class="tournament-info-label">Teams</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function populateMatches() {
    const container = document.getElementById('matches-list');
    const upcomingMatches = mockMatches.slice(0, 5);
    
    container.innerHTML = upcomingMatches.map((match, index) => `
        <div class="match-card holo-card" onclick="showMatchModal(${JSON.stringify(match).replace(/"/g, '&quot;')})" style="animation-delay: ${index * 0.1}s;">
            <div class="match-content">
                <div class="match-teams">
                    <div class="match-team">
                        <div class="match-team-info">
                            <span class="match-team-flag">${match.team1.flag}</span>
                            <div>
                                <div class="match-team-name">${match.team1.name}</div>
                                <div class="match-team-line"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="match-vs">
                        <div class="match-scores">
                            <span class="match-score ${match.status === 'completed' ? 'completed' : 'pending'}">
                                ${match.team1.score !== null ? match.team1.score : '-'}
                            </span>
                            <div class="match-vs-text">
                                VS
                                ${match.status === 'live' ? '<div class="match-live-indicator"></div>' : ''}
                            </div>
                            <span class="match-score ${match.status === 'completed' ? 'completed' : 'pending'}">
                                ${match.team2.score !== null ? match.team2.score : '-'}
                            </span>
                        </div>
                    </div>
                    
                    <div class="match-team">
                        <div class="match-team-info">
                            <div>
                                <div class="match-team-name">${match.team2.name}</div>
                                <div class="match-team-line"></div>
                            </div>
                            <span class="match-team-flag">${match.team2.flag}</span>
                        </div>
                    </div>
                </div>
                
                <div class="match-info">
                    <div class="match-time ${match.status}">${match.time.toUpperCase()}</div>
                    <div class="match-tournament">${match.tournament}</div>
                    <div class="match-game">${match.game}</div>
                    ${match.status === 'live' ? '<div class="match-live-stream"><span class="match-live-stream-text">LIVE STREAM</span></div>' : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function populateAllMatches() {
    const container = document.getElementById('all-matches-list');
    if (!container) return;
    
    const filteredMatches = filterMatches(mockMatches);
    
    container.innerHTML = filteredMatches.map(match => `
        <div class="match-card holo-card" onclick="showMatchModal(${JSON.stringify(match).replace(/"/g, '&quot;')})">
            <div class="match-content">
                <div class="match-teams">
                    <div class="match-team">
                        <div class="match-team-info">
                            <span class="match-team-flag">${match.team1.flag}</span>
                            <div>
                                <div class="match-team-name">${match.team1.name}</div>
                                <div class="match-team-line"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="match-vs">
                        <div class="match-scores">
                            <span class="match-score ${match.status === 'completed' ? 'completed' : 'pending'}">
                                ${match.team1.score !== null ? match.team1.score : '-'}
                            </span>
                            <div class="match-vs-text">
                                VS
                                ${match.status === 'live' ? '<div class="match-live-indicator"></div>' : ''}
                            </div>
                            <span class="match-score ${match.status === 'completed' ? 'completed' : 'pending'}">
                                ${match.team2.score !== null ? match.team2.score : '-'}
                            </span>
                        </div>
                    </div>
                    
                    <div class="match-team">
                        <div class="match-team-info">
                            <div>
                                <div class="match-team-name">${match.team2.name}</div>
                                <div class="match-team-line"></div>
                            </div>
                            <span class="match-team-flag">${match.team2.flag}</span>
                        </div>
                    </div>
                </div>
                
                <div class="match-info">
                    <div class="match-time ${match.status}">${match.time.toUpperCase()}</div>
                    <div class="match-tournament">${match.tournament}</div>
                    <div class="match-game">${match.game}</div>
                    ${match.status === 'live' ? '<div class="match-live-stream"><span class="match-live-stream-text">LIVE STREAM</span></div>' : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function populateNews() {
    const container = document.getElementById('news-grid');
    
    container.innerHTML = mockNews.map((article, index) => `
        <article class="news-card holo-card" style="animation-delay: ${index * 0.2}s;">
            <div class="news-image">
                <img src="${article.image}" alt="${article.title}" class="news-bg">
                <div class="news-overlay"></div>
                <div class="news-category">${article.category.toUpperCase()}</div>
                <div class="news-meta">${article.time} • ${article.author}</div>
            </div>
            <div class="news-content">
                <h3 class="news-title">${article.title}</h3>
                <p class="news-excerpt">${article.excerpt}</p>
                <div class="news-footer">
                    <a href="#" class="news-read-more">
                        <span>READ FULL REPORT</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

function populateAllNews() {
    const container = document.getElementById('all-news-grid');
    if (!container) return;
    
    container.innerHTML = mockNews.map(article => `
        <article class="news-card holo-card">
            <div class="news-image">
                <img src="${article.image}" alt="${article.title}" class="news-bg">
                <div class="news-overlay"></div>
                <div class="news-category">${article.category.toUpperCase()}</div>
                <div class="news-meta">${article.time} • ${article.author}</div>
            </div>
            <div class="news-content">
                <h3 class="news-title">${article.title}</h3>
                <p class="news-excerpt">${article.excerpt}</p>
                <div class="news-footer">
                    <a href="#" class="news-read-more">
                        <span>READ FULL REPORT</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

function populatePlayers() {
    const container = document.getElementById('players-grid');
    
    container.innerHTML = mockPlayers.map((player, index) => `
        <div class="player-card holo-card" style="animation-delay: ${index * 0.3}s;">
            <div class="player-image">
                <img src="${player.image}" alt="${player.name}" class="player-bg">
                <div class="player-overlay"></div>
                <div class="player-rating">${player.rating}</div>
                <div class="player-info">
                    <div class="player-header">
                        <span class="player-flag">${player.country}</span>
                        <div>
                            <h3 class="player-name">${player.name}</h3>
                            <p class="player-real-name">${player.realName}</p>
                        </div>
                    </div>
                    <div class="player-details">
                        <div class="player-detail">
                            <div class="player-detail-label team">TEAM</div>
                            <div class="player-detail-value">${player.team}</div>
                        </div>
                        <div class="player-detail">
                            <div class="player-detail-label game">GAME</div>
                            <div class="player-detail-value">${player.game}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function populateAllPlayers() {
    const container = document.getElementById('all-players-grid');
    if (!container) return;
    
    container.innerHTML = mockPlayers.map(player => `
        <div class="player-card holo-card">
            <div class="player-image">
                <img src="${player.image}" alt="${player.name}" class="player-bg">
                <div class="player-overlay"></div>
                <div class="player-rating">${player.rating}</div>
                <div class="player-info">
                    <div class="player-header">
                        <span class="player-flag">${player.country}</span>
                        <div>
                            <h3 class="player-name">${player.name}</h3>
                            <p class="player-real-name">${player.realName}</p>
                        </div>
                    </div>
                    <div class="player-details">
                        <div class="player-detail">
                            <div class="player-detail-label team">TEAM</div>
                            <div class="player-detail-value">${player.team}</div>
                        </div>
                        <div class="player-detail">
                            <div class="player-detail-label game">GAME</div>
                            <div class="player-detail-value">${player.game}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}