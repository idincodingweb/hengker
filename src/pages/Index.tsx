import hackerImage from '@/assets/hacker.png';
import BinaryRain from '@/components/BinaryRain';
import { useState, useEffect } from 'react';

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);
  
  const bootSequence = [
    '> Initializing system...',
    '> Loading kernel modules...',
    '> Bypassing firewall...',
    '> Establishing secure connection...',
    '> Access granted.',
    '> Welcome, Hacker.',
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setBootLines(prev => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 400);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden crt-effect">
      {/* Binary Rain Background */}
      <BinaryRain />
      
      {/* Scanline overlay */}
      <div className="scanline-overlay" />
      
      {/* Boot sequence */}
      {!showContent && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-background">
          <div className="terminal-text text-lg md:text-xl space-y-2 p-8">
            {bootLines.map((line, i) => (
              <div key={i} className="animate-fade-in">{line}</div>
            ))}
            <span className="inline-block w-3 h-5 bg-primary animate-pulse" />
          </div>
        </div>
      )}
      
      {/* Main Content */}
      {showContent && (
        <div className="relative z-10 text-center flex flex-col items-center gap-6 p-8 animate-fade-in">
          {/* Terminal header */}
          <div className="terminal-text text-sm md:text-base opacity-70 mb-4">
            root@system:~# cat /etc/profile
          </div>
          
          {/* Hacker Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-125" />
            <img
              src={hackerImage}
              alt="Anonymous"
              className="hacker-image relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-primary"
            />
          </div>
          
          {/* ASCII Art Divider */}
          <div className="terminal-text text-xs md:text-sm opacity-50 font-mono">
            {'<'}======[ IDENTITY ]======{'>'}
          </div>
          
          {/* Glowing Name with Glitch */}
          <h1 className="glow-text text-4xl md:text-6xl lg:text-7xl">
            I'am Idin Iskandar
          </h1>
          
          {/* Tagline */}
          <div className="terminal-text text-xl md:text-2xl lg:text-3xl tracking-widest">
            <span className="opacity-70">&gt; </span>
            Gak ngefly Gak Asik
            <span className="inline-block w-3 h-6 bg-primary ml-2 animate-pulse" />
          </div>
          
          {/* Fake status */}
          <div className="mt-8 space-y-2 terminal-text text-sm opacity-60">
            <div>[+] Status: <span className="text-primary">ONLINE</span></div>
            <div>[+] Connection: <span className="text-primary">ENCRYPTED</span></div>
            <div>[+] Location: <span className="text-primary">CLASSIFIED</span></div>
          </div>
          
          {/* Warning message */}
          <div className="mt-6 border border-primary/50 p-4 max-w-md">
            <p className="terminal-text text-xs md:text-sm animate-pulse">
              ⚠ WARNING: You are being watched. We are Anonymous. We are Legion. 
              We do not forgive. We do not forget. Expect us.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
