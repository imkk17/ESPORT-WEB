import React, { useState, useEffect } from 'react';
import './App.css';
import Components from './components';

const {
  Header,
  Hero,
  FeaturedTournaments,
  UpcomingMatches,
  RecentNews,
  PlayerSpotlight,
  Footer,
  TournamentModal,
  MatchModal
} = Components;

// Mock data for the esports platform
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

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState('all');

  const handleTournamentClick = (tournament) => {
    setSelectedTournament(tournament);
  };

  const handleMatchClick = (match) => {
    setSelectedMatch(match);
  };

  const filteredTournaments = mockTournaments.filter(tournament => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tournament.game.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGame = selectedGame === 'all' || tournament.game === selectedGame;
    return matchesSearch && matchesGame;
  });

  const filteredMatches = mockMatches.filter(match => {
    const matchesSearch = match.tournament.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         match.team1.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         match.team2.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGame = selectedGame === 'all' || match.game === selectedGame;
    return matchesSearch && matchesGame;
  });

  const renderContent = () => {
    switch(currentView) {
      case 'tournaments':
        return (
          <div className="min-h-screen bg-gray-900 pt-20">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search tournaments..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <select
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  className="px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                >
                  <option value="all">All Games</option>
                  <option value="Valorant">Valorant</option>
                  <option value="Counter-Strike 2">Counter-Strike 2</option>
                  <option value="League of Legends">League of Legends</option>
                  <option value="Dota 2">Dota 2</option>
                  <option value="Rocket League">Rocket League</option>
                  <option value="Overwatch 2">Overwatch 2</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTournaments.map(tournament => (
                  <div
                    key={tournament.id}
                    onClick={() => handleTournamentClick(tournament)}
                    className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-700 hover:border-blue-500"
                  >
                    <div className="relative h-48">
                      <img
                        src={tournament.image}
                        alt={tournament.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          tournament.status === 'live' ? 'bg-red-500 text-white animate-pulse' :
                          tournament.status === 'upcoming' ? 'bg-blue-500 text-white' :
                          'bg-gray-500 text-white'
                        }`}>
                          {tournament.status.charAt(0).toUpperCase() + tournament.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{tournament.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{tournament.game}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-300 text-sm">
                          <span className="mr-2">📅</span>
                          {tournament.date}
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <span className="mr-2">📍</span>
                          {tournament.location}
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <span className="mr-2">💰</span>
                          {tournament.prize}
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <span className="mr-2">👥</span>
                          {tournament.participants} teams
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'matches':
        return (
          <div className="min-h-screen bg-gray-900 pt-20">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search matches..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <select
                  value={selectedGame}
                  onChange={(e) => setSelectedGame(e.target.value)}
                  className="px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                >
                  <option value="all">All Games</option>
                  <option value="Valorant">Valorant</option>
                  <option value="Counter-Strike 2">Counter-Strike 2</option>
                  <option value="League of Legends">League of Legends</option>
                  <option value="Dota 2">Dota 2</option>
                </select>
              </div>
              <div className="space-y-4">
                {filteredMatches.map(match => (
                  <div
                    key={match.id}
                    onClick={() => handleMatchClick(match)}
                    className="bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-750 transition-colors border border-gray-700 hover:border-blue-500"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 flex-1">
                        <div className="text-center min-w-0 flex-1">
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-lg">{match.team1.flag}</span>
                            <span className="text-white font-semibold truncate">{match.team1.name}</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center space-x-4">
                            <span className={`text-2xl font-bold ${
                              match.status === 'completed' ? 'text-white' : 'text-gray-500'
                            }`}>
                              {match.team1.score !== null ? match.team1.score : '-'}
                            </span>
                            <span className="text-gray-400">vs</span>
                            <span className={`text-2xl font-bold ${
                              match.status === 'completed' ? 'text-white' : 'text-gray-500'
                            }`}>
                              {match.team2.score !== null ? match.team2.score : '-'}
                            </span>
                          </div>
                        </div>
                        <div className="text-center min-w-0 flex-1">
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-white font-semibold truncate">{match.team2.name}</span>
                            <span className="text-lg">{match.team2.flag}</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-6 text-right">
                        <div className={`text-sm font-semibold ${
                          match.status === 'live' ? 'text-red-400 animate-pulse' :
                          match.status === 'upcoming' ? 'text-blue-400' :
                          'text-gray-400'
                        }`}>
                          {match.time}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{match.tournament}</div>
                        <div className="text-xs text-gray-500">{match.game}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'news':
        return (
          <div className="min-h-screen bg-gray-900 pt-20">
            <div className="max-w-4xl mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-white mb-8">Latest Esports News</h1>
              <div className="space-y-6">
                {mockNews.map(article => (
                  <div key={article.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-center mb-2">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold mr-3">
                            {article.category}
                          </span>
                          <span className="text-gray-400 text-sm">
                            {article.time} • by {article.author}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3 hover:text-blue-400 cursor-pointer">
                          {article.title}
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'players':
        return (
          <div className="min-h-screen bg-gray-900 pt-20">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold text-white mb-8">Player Spotlight</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockPlayers.map(player => (
                  <div key={player.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all hover:scale-105">
                    <div className="h-64 relative">
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-black bg-opacity-75 rounded-full px-3 py-1">
                        <span className="text-white font-bold text-sm">{player.rating}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">{player.country}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{player.name}</h3>
                          <p className="text-gray-400 text-sm">{player.realName}</p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Team:</span>
                          <span className="text-white font-semibold">{player.team}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Game:</span>
                          <span className="text-white">{player.game}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <FeaturedTournaments tournaments={mockTournaments} onTournamentClick={handleTournamentClick} />
            <UpcomingMatches matches={mockMatches} onMatchClick={handleMatchClick} />
            <RecentNews news={mockNews} />
            <PlayerSpotlight players={mockPlayers} />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      {renderContent()}
      <Footer />
      
      {selectedTournament && (
        <TournamentModal
          tournament={selectedTournament}
          onClose={() => setSelectedTournament(null)}
        />
      )}
      
      {selectedMatch && (
        <MatchModal
          match={selectedMatch}
          onClose={() => setSelectedMatch(null)}
        />
      )}
    </div>
  );
}

export default App;