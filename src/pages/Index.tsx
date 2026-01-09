import clownImage from '@/assets/clown.png';
import BinaryRain from '@/components/BinaryRain';

const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
      {/* Binary Rain Background */}
      <BinaryRain />
      
      {/* Red overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-background to-background z-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-6 p-8">
        {/* Clown Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/50 rounded-full blur-3xl scale-110" />
          <img
            src={clownImage}
            alt="Badut"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent shadow-2xl"
            style={{
              boxShadow: '0 0 30px hsl(120 100% 50% / 0.5), 0 0 60px hsl(0 85% 45% / 0.3)',
            }}
          />
        </div>
        
        {/* Glowing Name */}
        <h1 className="glow-text text-4xl md:text-6xl lg:text-7xl tracking-wider mt-6">
          I'am Idin Iskandar
        </h1>
        
        {/* Tagline */}
        <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-bold tracking-wide opacity-90">
          Gak ngefly Gak Asik
        </p>
      </div>
    </div>
  );
};

export default Index;
