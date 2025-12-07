export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black text-white mb-4">ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">US</span></h2>
          <p className="text-xl text-gray-400">Transforming brands through creative excellence</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" alt="Team" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-emerald-500/30">
                <h3 className="text-2xl font-black text-white mb-2">Our Mission</h3>
                <p className="text-gray-300">Empowering businesses to achieve extraordinary growth through innovative digital marketing strategies.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
              <span className="text-emerald-500 text-sm font-semibold">🚀 Since 2023</span>
            </div>
            <h3 className="text-3xl font-black text-white mb-6">We Don't Just Market. We Create Impact.</h3>
            <p className="text-lg text-gray-400 mb-4 leading-relaxed">
              At DigitalVisionar, we're not just another marketing agency. We're your growth partners, dedicated to turning your vision into measurable success. Every campaign we create is designed to captivate, engage, and convert.
            </p>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              From startups to established brands, we've helped hundreds of businesses dominate their markets through strategic promotion, compelling content, and stunning visuals.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">🎯</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Results-Driven Strategy</h4>
                  <p className="text-gray-400 text-sm">Every decision backed by data, every campaign optimized for ROI</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">💡</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Creative Excellence</h4>
                  <p className="text-gray-400 text-sm">Award-winning designs and content that stand out</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">⚡</span>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Lightning-Fast Delivery</h4>
                  <p className="text-gray-400 text-sm">Quick turnarounds without compromising quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-emerald-500/30 p-6 rounded-2xl text-center hover:border-emerald-500 transition transform hover:scale-105 shadow-lg shadow-emerald-500/10">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 mb-2">500+</div>
            <div className="text-gray-400 font-semibold">Projects Delivered</div>
            <div className="text-emerald-500 text-xs mt-1">& Counting</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 p-6 rounded-2xl text-center hover:border-purple-500 transition transform hover:scale-105 shadow-lg shadow-purple-500/10">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-2">200+</div>
            <div className="text-gray-400 font-semibold">Happy Clients</div>
            <div className="text-purple-500 text-xs mt-1">Worldwide</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 p-6 rounded-2xl text-center hover:border-blue-500 transition transform hover:scale-105 shadow-lg shadow-blue-500/10">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2">50+</div>
            <div className="text-gray-400 font-semibold">Expert Team</div>
            <div className="text-blue-500 text-xs mt-1">Specialists</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-pink-500/30 p-6 rounded-2xl text-center hover:border-pink-500 transition transform hover:scale-105 shadow-lg shadow-pink-500/10">
            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 mb-2">98%</div>
            <div className="text-gray-400 font-semibold">Success Rate</div>
            <div className="text-pink-500 text-xs mt-1">Proven Results</div>
          </div>
        </div>
      </div>
    </section>
  )
}
