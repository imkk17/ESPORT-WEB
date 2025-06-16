import React from 'react';

// Header Component
const Header = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'tournaments', label: 'Tournaments' },
    { id: 'matches', label: 'Matches' },
    { id: 'news', label: 'News' },
    { id: 'players', label: 'Players' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">EsportsHub</h1>
              <p className="text-xs text-gray-400">Elite Competition Platform</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === item.id
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Sign In
            </button>
            <button className="md:hidden text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 bg-black/50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/9093874/pexels-photo-9093874.jpeg)'
        }}
      ></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
          ELITE
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            ESPORTS
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Experience the ultimate in competitive gaming. Follow tournaments, track matches,
          and stay connected with the global esports community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl">
            Explore Tournaments
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all">
            Watch Live Matches
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

// Featured Tournaments Component
const FeaturedTournaments = ({ tournaments, onTournamentClick }) => {
  const featuredTournaments = tournaments.slice(0, 4);
  
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Tournaments
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The biggest esports competitions happening right now
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTournaments.map((tournament, index) => (
            <div
              key={tournament.id}
              onClick={() => onTournamentClick(tournament)}
              className={`group cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 shadow-2xl">
                <div className={`relative ${index === 0 ? 'h-80' : 'h-48'}`}>
                  <img
                    src={tournament.image}
                    alt={tournament.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      tournament.status === 'live' ? 'bg-red-500 text-white animate-pulse' :
                      tournament.status === 'upcoming' ? 'bg-blue-500 text-white' :
                      'bg-gray-500 text-white'
                    }`}>
                      {tournament.status.charAt(0).toUpperCase() + tournament.status.slice(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className={`font-bold text-white mb-2 ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {tournament.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2">{tournament.game}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-bold">{tournament.prize}</span>
                      <span className="text-gray-400 text-sm">{tournament.participants} teams</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Upcoming Matches Component
const UpcomingMatches = ({ matches, onMatchClick }) => {
  const upcomingMatches = matches.slice(0, 5);
  
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Live & Upcoming Matches
          </h2>
          <p className="text-xl text-gray-400">
            Don't miss a single moment of the action
          </p>
        </div>
        
        <div className="space-y-4">
          {upcomingMatches.map((match) => (
            <div
              key={match.id}
              onClick={() => onMatchClick(match)}
              className="bg-gray-900 rounded-lg p-6 cursor-pointer hover:bg-gray-850 transition-all border border-gray-700 hover:border-blue-500 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-8 flex-1">
                  <div className="text-center min-w-0 flex-1">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <span className="text-2xl">{match.team1.flag}</span>
                      <span className="text-white font-bold text-lg truncate">{match.team1.name}</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className={`text-3xl font-black ${
                        match.status === 'completed' ? 'text-white' : 'text-gray-500'
                      }`}>
                        {match.team1.score !== null ? match.team1.score : '-'}
                      </span>
                      <div className="flex flex-col items-center">
                        <span className="text-gray-400 text-sm">VS</span>
                        {match.status === 'live' && (
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mt-1"></div>
                        )}
                      </div>
                      <span className={`text-3xl font-black ${
                        match.status === 'completed' ? 'text-white' : 'text-gray-500'
                      }`}>
                        {match.team2.score !== null ? match.team2.score : '-'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center min-w-0 flex-1">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <span className="text-white font-bold text-lg truncate">{match.team2.name}</span>
                      <span className="text-2xl">{match.team2.flag}</span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-8 text-right">
                  <div className={`text-lg font-bold mb-1 ${
                    match.status === 'live' ? 'text-red-400 animate-pulse' :
                    match.status === 'upcoming' ? 'text-blue-400' :
                    'text-gray-400'
                  }`}>
                    {match.time}
                  </div>
                  <div className="text-sm text-gray-400">{match.tournament}</div>
                  <div className="text-xs text-gray-500">{match.game}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            View All Matches
          </button>
        </div>
      </div>
    </section>
  );
};

// Recent News Component
const RecentNews = ({ news }) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Esports News
          </h2>
          <p className="text-xl text-gray-400">
            Stay updated with the latest happenings in esports
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <article key={article.id} className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105 cursor-pointer">
              <div className="h-48 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-400 text-sm mb-3">
                  {article.time} • by {article.author}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Read More News
          </button>
        </div>
      </div>
    </section>
  );
};

// Player Spotlight Component
const PlayerSpotlight = ({ players }) => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Player Spotlight
          </h2>
          <p className="text-xl text-gray-400">
            Meet the legends dominating the esports scene
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {players.map((player) => (
            <div key={player.id} className="group cursor-pointer">
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105">
                <div className="h-80 relative">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-black bg-opacity-75 rounded-full px-3 py-2">
                    <span className="text-yellow-400 font-bold">{player.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center mb-2">
                      <span className="text-3xl mr-3">{player.country}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{player.name}</h3>
                        <p className="text-gray-300">{player.realName}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-400 font-semibold">{player.team}</span>
                      <span className="text-gray-400 text-sm">{player.game}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">EsportsHub</h3>
                <p className="text-xs text-gray-400">Elite Competition Platform</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The ultimate destination for esports enthusiasts. Follow tournaments, 
              track matches, and connect with the global gaming community.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tournaments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Matches</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Players</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Teams</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reddit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitch</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 EsportsHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Tournament Modal Component
const TournamentModal = ({ tournament, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={tournament.image}
            alt={tournament.name}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-white">{tournament.name}</h2>
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
              tournament.status === 'live' ? 'bg-red-500 text-white animate-pulse' :
              tournament.status === 'upcoming' ? 'bg-blue-500 text-white' :
              'bg-gray-500 text-white'
            }`}>
              {tournament.status.charAt(0).toUpperCase() + tournament.status.slice(1)}
            </span>
          </div>
          
          <p className="text-gray-300 mb-6 leading-relaxed">{tournament.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-gray-400 text-sm mb-1">Game</h4>
              <p className="text-white font-semibold">{tournament.game}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-gray-400 text-sm mb-1">Date</h4>
              <p className="text-white font-semibold">{tournament.date}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-gray-400 text-sm mb-1">Location</h4>
              <p className="text-white font-semibold">{tournament.location}</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-gray-400 text-sm mb-1">Prize Pool</h4>
              <p className="text-green-400 font-bold text-lg">{tournament.prize}</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Follow Tournament
            </button>
            <button className="flex-1 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors font-semibold">
              View Bracket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Match Modal Component
const MatchModal = ({ match, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-2xl w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Match Details</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-8 mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl">{match.team1.flag}</span>
                  <span className="text-2xl font-bold text-white">{match.team1.name}</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center space-x-4 mb-2">
                  <span className={`text-4xl font-black ${
                    match.status === 'completed' ? 'text-white' : 'text-gray-500'
                  }`}>
                    {match.team1.score !== null ? match.team1.score : '-'}
                  </span>
                  <span className="text-gray-400">vs</span>
                  <span className={`text-4xl font-black ${
                    match.status === 'completed' ? 'text-white' : 'text-gray-500'
                  }`}>
                    {match.team2.score !== null ? match.team2.score : '-'}
                  </span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl font-bold text-white">{match.team2.name}</span>
                  <span className="text-3xl">{match.team2.flag}</span>
                </div>
              </div>
            </div>
            
            <div className={`text-xl font-bold mb-4 ${
              match.status === 'live' ? 'text-red-400 animate-pulse' :
              match.status === 'upcoming' ? 'text-blue-400' :
              'text-gray-400'
            }`}>
              {match.time}
            </div>
          </div>
          
          <div className="bg-gray-700 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-gray-400 text-sm mb-1">Tournament</h4>
                <p className="text-white font-semibold">{match.tournament}</p>
              </div>
              <div>
                <h4 className="text-gray-400 text-sm mb-1">Game</h4>
                <p className="text-white font-semibold">{match.game}</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            {match.status === 'live' && (
              <button className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold animate-pulse">
                Watch Live
              </button>
            )}
            {match.status === 'upcoming' && (
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Set Reminder
              </button>
            )}
            {match.status === 'completed' && (
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                View Highlights
              </button>
            )}
            <button className="flex-1 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors font-semibold">
              Match Stats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export all components
const Components = {
  Header,
  Hero,
  FeaturedTournaments,
  UpcomingMatches,
  RecentNews,
  PlayerSpotlight,
  Footer,
  TournamentModal,
  MatchModal
};

export default Components;