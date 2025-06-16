import React, { useEffect, useState } from 'react';

// Particle System Component
const ParticleSystem = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 6,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="particles">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

// Matrix Background Component
const MatrixBackground = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const generateColumns = () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const newColumns = [];
      
      for (let i = 0; i < 20; i++) {
        const columnChars = [];
        for (let j = 0; j < 20; j++) {
          columnChars.push(chars[Math.floor(Math.random() * chars.length)]);
        }
        
        newColumns.push({
          id: i,
          left: i * 5,
          chars: columnChars,
          animationDelay: Math.random() * 10,
        });
      }
      setColumns(newColumns);
    };

    generateColumns();
  }, []);

  return (
    <div className="matrix-bg">
      {columns.map(column => (
        <div
          key={column.id}
          className="matrix-column"
          style={{
            left: `${column.left}%`,
            animationDelay: `${column.animationDelay}s`,
          }}
        >
          {column.chars.map((char, index) => (
            <div key={index} style={{ opacity: Math.random() * 0.8 + 0.2 }}>
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// Futuristic Header Component
const Header = ({ currentView, setCurrentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'tournaments', label: 'Tournaments', icon: '🏆' },
    { id: 'matches', label: 'Matches', icon: '⚔️' },
    { id: 'news', label: 'News', icon: '📰' },
    { id: 'players', label: 'Players', icon: '👤' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-cyber border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4 quantum-glow">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center border border-cyan-400/50 shadow-lg shadow-cyan-500/25">
                <span className="text-white font-black text-2xl neon-text-blue cyber-font">N</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-black neon-text-blue cyber-font">NEX ARENA</h1>
              <p className="text-xs text-cyan-300 cyber-font opacity-80">ELITE COMPETITION NEXUS</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`relative px-6 py-3 rounded-xl transition-all duration-300 cyber-font text-sm font-bold flex items-center space-x-2 ${
                  currentView === item.id
                    ? 'cyber-button text-cyan-300 shadow-lg shadow-cyan-500/25'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
                {currentView === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block cyber-button px-6 py-3 text-white rounded-xl font-bold cyber-font text-sm">
              SIGN IN
            </button>
            <button 
              className="md:hidden text-cyan-300 hover:text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-cyber border-t border-cyan-500/30">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  currentView === item.id
                    ? 'cyber-button text-cyan-300'
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="cyber-font font-bold">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

// Futuristic Hero Component
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <MatrixBackground />
      <ParticleSystem />
      <div className="absolute inset-0 cyber-grid"></div>
      <div className="absolute inset-0 hex-pattern"></div>
      
      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/9093874/pexels-photo-9093874.jpeg)',
          filter: 'hue-rotate(200deg) saturate(2)',
        }}
      ></div>
      
      {/* Neural Network Lines */}
      <div className="absolute top-1/4 left-0 neural-line w-full"></div>
      <div className="absolute top-3/4 left-0 neural-line w-full" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8 quantum-glow">
          <h1 className="text-8xl md:text-9xl font-black leading-none mb-4">
            <span className="block neon-text-blue cyber-font">NEX</span>
            <span className="block neon-text-pink cyber-font text-6xl md:text-7xl">ARENA</span>
            <span className="block neon-text-green cyber-font text-5xl md:text-6xl">NEXUS</span>
          </h1>
        </div>
        
        <div className="mb-12 space-y-4">
          <p className="text-2xl md:text-3xl text-cyan-300 font-bold cyber-font leading-relaxed">
            ENTER THE DIGITAL BATTLEFIELD
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience next-generation competitive gaming. Advanced tournament tracking, real-time match analysis, 
            and quantum-powered performance metrics in the ultimate esports command center.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="cyber-button px-10 py-5 text-white rounded-2xl font-black text-xl cyber-font hover:shadow-2xl hover:shadow-cyan-500/30 transition-all transform hover:scale-105">
            🚀 LAUNCH TOURNAMENT HUB
          </button>
          <button className="relative px-10 py-5 bg-transparent border-2 border-cyan-400 text-cyan-300 rounded-2xl font-black text-xl cyber-font hover:bg-cyan-400/10 transition-all overflow-hidden">
            <span className="relative z-10">⚡ WATCH LIVE BATTLES</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transform -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
        
        {/* Stats Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'ACTIVE TOURNAMENTS', value: '1,247', color: 'text-cyan-400' },
            { label: 'LIVE MATCHES', value: '89', color: 'text-pink-400' },
            { label: 'PRO PLAYERS', value: '15,634', color: 'text-green-400' },
            { label: 'TOTAL PRIZE POOL', value: '$47M', color: 'text-yellow-400' },
          ].map((stat, index) => (
            <div key={index} className="holo-card p-6 text-center">
              <div className={`text-3xl md:text-4xl font-black cyber-font ${stat.color} match-score`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 cyber-font mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 border-2 border-cyan-400 rounded-full flex items-center justify-center neon-text-blue">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

// Enhanced Featured Tournaments
const FeaturedTournaments = ({ tournaments, onTournamentClick }) => {
  const featuredTournaments = tournaments.slice(0, 4);
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black neon-text-blue cyber-font mb-6">
            FEATURED TOURNAMENTS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-6"></div>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto cyber-font">
            THE ULTIMATE DIGITAL BATTLEGROUNDS
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTournaments.map((tournament, index) => (
            <div
              key={tournament.id}
              onClick={() => onTournamentClick(tournament)}
              className={`group cursor-pointer transform hover:scale-105 transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="holo-card rounded-3xl overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-400/80 shadow-2xl">
                <div className={`relative ${index === 0 ? 'h-96' : 'h-64'} overflow-hidden`}>
                  <img
                    src={tournament.image}
                    alt={tournament.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ filter: 'hue-rotate(200deg) saturate(1.5) contrast(1.2)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 right-6">
                    <span className={`tournament-status px-4 py-2 rounded-full text-sm font-black cyber-font ${
                      tournament.status === 'live' ? 'neon-text-pink status-live' :
                      tournament.status === 'upcoming' ? 'neon-text-blue' :
                      'neon-text-green'
                    }`}>
                      {tournament.status.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className={`font-black neon-text-blue cyber-font mb-3 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                      {tournament.name.toUpperCase()}
                    </h3>
                    <p className="text-cyan-300 cyber-font text-sm mb-4">{tournament.game.toUpperCase()}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-cyber p-3 rounded-lg">
                        <div className="text-green-400 font-black text-lg neon-text-green">{tournament.prize}</div>
                        <div className="text-gray-400 text-xs cyber-font">PRIZE POOL</div>
                      </div>
                      <div className="glass-cyber p-3 rounded-lg">
                        <div className="text-cyan-400 font-black text-lg">{tournament.participants}</div>
                        <div className="text-gray-400 text-xs cyber-font">TEAMS</div>
                      </div>
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

// Enhanced Upcoming Matches
const UpcomingMatches = ({ matches, onMatchClick }) => {
  const upcomingMatches = matches.slice(0, 5);
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      <div className="absolute inset-0 hex-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black neon-text-pink cyber-font mb-6">
            LIVE BATTLES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-6"></div>
          <p className="text-2xl text-gray-300 cyber-font">
            REAL-TIME COMBAT STATUS
          </p>
        </div>
        
        <div className="space-y-6">
          {upcomingMatches.map((match, index) => (
            <div
              key={match.id}
              onClick={() => onMatchClick(match)}
              className="holo-card p-8 cursor-pointer hover:border-pink-400/80 transition-all duration-500 rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-12 flex-1">
                  {/* Team 1 */}
                  <div className="text-center min-w-0 flex-1">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <span className="text-4xl">{match.team1.flag}</span>
                      <div className="text-center">
                        <div className="text-2xl font-black text-white cyber-font mb-1">
                          {match.team1.name}
                        </div>
                        <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* VS Section */}
                  <div className="text-center relative">
                    <div className="flex items-center space-x-6 mb-4">
                      <span className={`match-score ${
                        match.status === 'completed' ? 'neon-text-green' : 'text-gray-500'
                      }`}>
                        {match.team1.score !== null ? match.team1.score : '-'}
                      </span>
                      
                      <div className="flex flex-col items-center relative quantum-glow">
                        <span className="text-gray-400 text-lg cyber-font font-bold">VS</span>
                        {match.status === 'live' && (
                          <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse mt-2 shadow-lg shadow-pink-500/50"></div>
                        )}
                        <div className="absolute -inset-4 border border-cyan-400/30 rounded-full"></div>
                      </div>
                      
                      <span className={`match-score ${
                        match.status === 'completed' ? 'neon-text-green' : 'text-gray-500'
                      }`}>
                        {match.team2.score !== null ? match.team2.score : '-'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Team 2 */}
                  <div className="text-center min-w-0 flex-1">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-black text-white cyber-font mb-1">
                          {match.team2.name}
                        </div>
                        <div className="w-16 h-1 bg-gradient-to-l from-cyan-400 to-transparent mx-auto"></div>
                      </div>
                      <span className="text-4xl">{match.team2.flag}</span>
                    </div>
                  </div>
                </div>
                
                {/* Match Info */}
                <div className="ml-12 text-right">
                  <div className={`text-2xl font-black mb-2 cyber-font ${
                    match.status === 'live' ? 'neon-text-pink status-live' :
                    match.status === 'upcoming' ? 'neon-text-blue' :
                    'neon-text-green'
                  }`}>
                    {match.time.toUpperCase()}
                  </div>
                  <div className="text-sm text-gray-400 cyber-font mb-1">{match.tournament}</div>
                  <div className="text-xs text-gray-500 cyber-font">{match.game}</div>
                  
                  {match.status === 'live' && (
                    <div className="mt-3 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-lg">
                      <span className="text-red-400 text-xs font-bold cyber-font">LIVE STREAM</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="cyber-button px-10 py-4 text-white rounded-2xl font-black cyber-font text-lg">
            🎯 ACCESS ALL MATCHES
          </button>
        </div>
      </div>
    </section>
  );
};

// Enhanced Recent News
const RecentNews = ({ news }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/10 to-black"></div>
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black neon-text-green cyber-font mb-6">
            INTEL FEED
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mb-6"></div>
          <p className="text-2xl text-gray-300 cyber-font">
            LATEST BATTLEFIELD REPORTS
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <article 
              key={article.id} 
              className="holo-card rounded-2xl overflow-hidden border border-green-500/30 hover:border-green-400/80 cursor-pointer group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  style={{ filter: 'hue-rotate(120deg) saturate(1.3) contrast(1.1)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="tournament-status px-3 py-1 rounded-full text-xs font-bold cyber-font neon-text-green">
                    {article.category.toUpperCase()}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-gray-400 text-xs cyber-font mb-2">
                    {article.time} • {article.author}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-black text-white mb-4 hover:text-green-400 transition-colors cyber-font leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {article.excerpt}
                </p>
                
                <div className="mt-6 pt-4 border-t border-green-500/20">
                  <button className="text-green-400 hover:text-green-300 cyber-font text-sm font-bold flex items-center space-x-2">
                    <span>READ FULL REPORT</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="cyber-button px-10 py-4 text-white rounded-2xl font-black cyber-font text-lg">
            📡 ACCESS NEWS ARCHIVE
          </button>
        </div>
      </div>
    </section>
  );
};

// Enhanced Player Spotlight
const PlayerSpotlight = ({ players }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-900/10 to-black"></div>
      <div className="absolute inset-0 hex-pattern opacity-15"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black cyber-font mb-6">
            <span className="neon-text-blue">ELITE</span>{' '}
            <span className="neon-text-pink">LEGENDS</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"></div>
          <p className="text-2xl text-gray-300 cyber-font">
            CHAMPIONS OF THE DIGITAL REALM
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {players.map((player, index) => (
            <div 
              key={player.id} 
              className="group cursor-pointer quantum-glow"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="holo-card rounded-3xl overflow-hidden border-2 border-yellow-500/30 hover:border-yellow-400/80 transition-all duration-500">
                <div className="h-80 relative overflow-hidden">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ filter: 'hue-rotate(40deg) saturate(1.2) contrast(1.1)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-6 right-6 glass-cyber rounded-full px-4 py-2">
                    <span className="text-yellow-400 font-black text-lg cyber-font neon-text-green">
                      {player.rating}
                    </span>
                  </div>
                  
                  {/* Player Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{player.country}</span>
                      <div>
                        <h3 className="text-3xl font-black neon-text-blue cyber-font">{player.name}</h3>
                        <p className="text-gray-300 cyber-font">{player.realName}</p>
                      </div>
                    </div>
                    
                    <div className="glass-cyber p-4 rounded-xl">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-cyan-400 font-bold cyber-font text-sm">TEAM</div>
                          <div className="text-white font-black">{player.team}</div>
                        </div>
                        <div>
                          <div className="text-pink-400 font-bold cyber-font text-sm">GAME</div>
                          <div className="text-white font-black">{player.game}</div>
                        </div>
                      </div>
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

// Enhanced Footer
const Footer = () => {
  return (
    <footer className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6 quantum-glow">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex items-center justify-center border border-cyan-400/50">
                  <span className="text-white font-black text-3xl neon-text-blue cyber-font">N</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-3xl blur opacity-30"></div>
              </div>
              <div>
                <h3 className="text-3xl font-black neon-text-blue cyber-font">NEX ARENA</h3>
                <p className="text-sm text-cyan-300 cyber-font">ELITE COMPETITION NEXUS</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              The ultimate neural interface for esports consciousness. Connect to tournaments, 
              analyze quantum battle metrics, and interface with the global gaming matrix.
            </p>
            
            <div className="flex space-x-4 mt-8">
              {[
                { icon: '🐦', color: 'hover:text-cyan-400' },
                { icon: '💬', color: 'hover:text-purple-400' },
                { icon: '📺', color: 'hover:text-pink-400' },
                { icon: '🎮', color: 'hover:text-green-400' },
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 glass-cyber rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-6 cyber-font neon-text-pink">NEURAL LINKS</h4>
            <ul className="space-y-3">
              {['TOURNAMENTS', 'MATCHES', 'PLAYERS', 'TEAMS', 'RANKINGS'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors cyber-font text-sm hover:translate-x-2 transform duration-300 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-6 cyber-font neon-text-green">SUPPORT MATRIX</h4>
            <ul className="space-y-3">
              {['HELP CENTER', 'CONTACT', 'PRIVACY', 'TERMS', 'API ACCESS'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors cyber-font text-sm hover:translate-x-2 transform duration-300 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyan-500/30 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm cyber-font">
              © 2025 NEX ARENA NEXUS. ALL QUANTUM RIGHTS RESERVED.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-green-400 text-sm cyber-font">⚡ SYSTEM STATUS: ONLINE</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Enhanced Tournament Modal
const TournamentModal = ({ tournament, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="holo-card max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border-2 border-cyan-500/50">
        <div className="relative">
          <img
            src={tournament.image}
            alt={tournament.name}
            className="w-full h-80 object-cover"
            style={{ filter: 'hue-rotate(200deg) saturate(1.5) contrast(1.2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 glass-cyber rounded-full flex items-center justify-center text-white hover:text-cyan-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-black neon-text-blue cyber-font">{tournament.name}</h2>
              <span className={`tournament-status px-4 py-2 rounded-full font-bold cyber-font ${
                tournament.status === 'live' ? 'neon-text-pink status-live' :
                tournament.status === 'upcoming' ? 'neon-text-blue' :
                'neon-text-green'
              }`}>
                {tournament.status.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">{tournament.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { label: 'GAME PROTOCOL', value: tournament.game, color: 'text-cyan-400'},
              { label: 'TIMELINE', value: tournament.date, color: 'text-pink-400'},
              { label: 'LOCATION', value: tournament.location, color: 'text-green-400'},
              { label: 'PRIZE MATRIX', value: tournament.prize, color: 'text-yellow-400'},
            ].map((item, index) => (
              <div key={index} className="glass-cyber p-6 rounded-2xl">
                <h4 className="text-gray-400 text-sm cyber-font mb-2">{item.label}</h4>
                <p className={`font-black text-xl cyber-font ${item.color}`}>{item.value}</p>
              </div>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <button className="flex-1 cyber-button py-4 text-white rounded-2xl font-black cyber-font text-lg">
              🎯 TRACK TOURNAMENT
            </button>
            <button className="flex-1 glass-cyber py-4 text-cyan-300 rounded-2xl font-black cyber-font text-lg hover:bg-cyan-500/10 transition-colors">
              📊 VIEW BRACKET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced Match Modal
const MatchModal = ({ match, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="holo-card max-w-3xl w-full rounded-3xl border-2 border-pink-500/50">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black neon-text-pink cyber-font">BATTLE ANALYSIS</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 glass-cyber rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-12 mb-6">
              <div className="text-center quantum-glow">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <span className="text-5xl">{match.team1.flag}</span>
                  <div className="text-center">
                    <div className="text-2xl font-black text-white cyber-font">{match.team1.name}</div>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto mt-2"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center relative">
                <div className="flex items-center space-x-6 mb-4">
                  <span className={`text-6xl font-black cyber-font match-score ${
                    match.status === 'completed' ? 'neon-text-green' : 'text-gray-500'
                  }`}>
                    {match.team1.score !== null ? match.team1.score : '-'}
                  </span>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-400 cyber-font font-bold">VS</span>
                    {match.status === 'live' && (
                      <div className="w-6 h-6 bg-pink-500 rounded-full animate-pulse mt-2 shadow-2xl shadow-pink-500/50"></div>
                    )}
                  </div>
                  <span className={`text-6xl font-black cyber-font match-score ${
                    match.status === 'completed' ? 'neon-text-green' : 'text-gray-500'
                  }`}>
                    {match.team2.score !== null ? match.team2.score : '-'}
                  </span>
                </div>
              </div>
              
              <div className="text-center quantum-glow">
                <div className="flex items-center justify-center space-x-3 mb-3">
                  <div className="text-center">
                    <div className="text-2xl font-black text-white cyber-font">{match.team2.name}</div>
                    <div className="w-20 h-1 bg-gradient-to-l from-cyan-400 to-transparent mx-auto mt-2"></div>
                  </div>
                  <span className="text-5xl">{match.team2.flag}</span>
                </div>
              </div>
            </div>
            
            <div className={`text-3xl font-black mb-6 cyber-font ${
              match.status === 'live' ? 'neon-text-pink status-live' :
              match.status === 'upcoming' ? 'neon-text-blue' :
              'neon-text-green'
            }`}>
              {match.time.toUpperCase()}
            </div>
          </div>
          
          <div className="glass-cyber p-6 rounded-2xl mb-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-gray-400 text-sm cyber-font mb-2">TOURNAMENT</h4>
                <p className="text-white font-black cyber-font">{match.tournament}</p>
              </div>
              <div>
                <h4 className="text-gray-400 text-sm cyber-font mb-2">GAME PROTOCOL</h4>
                <p className="text-white font-black cyber-font">{match.game}</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            {match.status === 'live' && (
              <button className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white py-4 rounded-2xl font-black cyber-font animate-pulse">
                📺 WATCH LIVE STREAM
              </button>
            )}
            {match.status === 'upcoming' && (
              <button className="flex-1 cyber-button text-white py-4 rounded-2xl font-black cyber-font">
                ⏰ SET ALERT PROTOCOL
              </button>
            )}
            {match.status === 'completed' && (
              <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-black cyber-font">
                🎬 VIEW HIGHLIGHTS
              </button>
            )}
            <button className="flex-1 glass-cyber text-cyan-300 py-4 rounded-2xl font-black cyber-font hover:bg-cyan-500/10 transition-colors">
              📊 BATTLE STATS
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
  MatchModal,
  ParticleSystem,
  MatrixBackground
};

export default Components;