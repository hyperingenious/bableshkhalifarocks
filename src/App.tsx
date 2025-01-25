import { Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-pink">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[url('twitter-image.jpg')] bg-cover bg-center"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Star className="w-8 h-8 text-white animate-pulse" />
            <Star className="w-8 h-8 text-white animate-pulse" />
            <Star className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-extrabold text-white mb-2 sm:mb-2 animate-fade-in">
            Bablesh Khalifa Rocks
          </h1>
          <p className="text-xs sm:text-sm md:text-md lg:text-lg text-white leading-normal sm:leading-relaxed mx-auto mb-4 sm:mb-6 md:mb-8">
            It doesn’t work; he does it even with the negligible hope available to him, but he’s deluded. Somewhere around, he’s about to die trying. He says it out loud: Bablesh Khalifa Rocks. Welcome, Motherfuckers.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 bg-orange-900 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-yellow-900 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-black rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
