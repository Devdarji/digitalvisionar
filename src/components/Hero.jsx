export default function Hero() {
  return (
    <section id="home" className="pt-20 bg-black text-white min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-purple-500/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6 animate-bounce">
              <span className="text-emerald-500 text-sm font-semibold">🚀 Welcome to the Future</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-fadeInUp">
              WE CREATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-600 animate-pulse">DIGITAL</span> EXPERIENCES
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed animate-fadeInUp animation-delay-200">
              From product promotion to professional photography - your complete digital marketing partner
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
              <a href="#contact" className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-black px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition transform hover:scale-105 text-center">
                Get Started →
              </a>
              <a href="#portfolio" className="border-2 border-emerald-500 text-emerald-500 px-8 py-4 rounded-xl font-bold hover:bg-emerald-500 hover:text-black transition backdrop-blur-sm text-center">
                View Work
              </a>
            </div>
          </div>
          <div className="relative hidden md:block animate-slideInRight">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl border border-emerald-500/30 shadow-2xl shadow-emerald-500/20 animate-scaleIn">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/30 transform hover:scale-105 transition animate-fadeInUp animation-delay-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-2xl">📢</div>
                    <div>
                      <div className="font-bold text-white">Product Promotion</div>
                      <div className="text-sm text-gray-400">Boost Your Sales</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-purple-500/10 p-4 rounded-xl border border-purple-500/30 transform hover:scale-105 transition animate-fadeInUp animation-delay-400">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-2xl">📱</div>
                    <div>
                      <div className="font-bold text-white">Social Media</div>
                      <div className="text-sm text-gray-400">Engage Audience</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-blue-500/10 p-4 rounded-xl border border-blue-500/30 transform hover:scale-105 transition animate-fadeInUp animation-delay-600">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-2xl">🔍</div>
                    <div>
                      <div className="font-bold text-white">SEO</div>
                      <div className="text-sm text-gray-400">Rank Higher</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-pink-500/10 p-4 rounded-xl border border-pink-500/30 transform hover:scale-105 transition animate-fadeInUp animation-delay-800">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center text-2xl">📸</div>
                    <div>
                      <div className="font-bold text-white">Photography</div>
                      <div className="text-sm text-gray-400">Professional Shots</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center animate-fadeInUp animation-delay-800">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black px-6 py-3 rounded-full font-bold">
                    <span>500+ Projects Delivered</span>
                    <span className="text-xl">✨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
