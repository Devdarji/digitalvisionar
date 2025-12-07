export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black text-white mb-4">GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">TOUCH</span></h2>
          <p className="text-xl text-gray-400">Let's discuss your next project</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-emerald-500 transition" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-emerald-500 transition" />
              </div>
              <div>
                <input type="text" placeholder="Subject" className="w-full px-6 py-4 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-emerald-500 transition" />
              </div>
              <div>
                <textarea rows="5" placeholder="Your Message" className="w-full px-6 py-4 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-emerald-500 transition"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-black px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition transform hover:scale-105">
                Send Message →
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-emerald-500 transition transform hover:scale-105">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2 text-xl">Address</h3>
                <p className="text-gray-400">Arved transcube plaza, 6, Bandhu Nagar, Vijay Nagar, Ranip, Ahmedabad, Gujarat 382480</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-emerald-500 transition transform hover:scale-105">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2 text-xl">Email</h3>
                <p className="text-emerald-500">withdigitalvisionar@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-emerald-500 transition transform hover:scale-105">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white mb-2 text-xl">Phone</h3>
                <a href="tel:+919104596435" className="text-emerald-500 hover:text-emerald-400 transition">+91 91045 96435</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
