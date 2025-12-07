export default function Portfolio() {
  const projects = [
    { title: 'Luxury Brand Launch', category: 'Product Promotion', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80' },
    { title: 'Viral Campaign', category: 'Social Media', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80' },
    { title: 'Modern Portfolio', category: 'Web Design', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80' },
    { title: 'Top Rankings', category: 'SEO', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80' },
    { title: 'Brand Storytelling', category: 'Content Writing', img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80' },
    { title: 'Fashion Shoot', category: 'Photography', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80' },
    { title: 'Influencer Collab', category: 'Influencer Marketing', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80' },
    { title: 'Market Analysis', category: 'Market Research', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80' },
    { title: 'Product Photography', category: 'Photography', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80' },
  ]

  return (
    <section id="portfolio" className="py-20 bg-black relative">
      <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-6xl font-black text-white mb-4">OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">PORTFOLIO</span></h2>
          <p className="text-xl text-gray-400">Stunning projects that deliver results</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer relative overflow-hidden rounded-2xl transform hover:scale-105 transition shadow-2xl shadow-black/50 animate-scaleIn" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative h-80 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition"></div>
                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/10 transition"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition">
                  <div className="inline-block px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full mb-3">{project.category}</div>
                  <h3 className="text-2xl font-black text-white mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-emerald-500 opacity-0 group-hover:opacity-100 transition">
                    <span className="text-sm font-semibold">View Project</span>
                    <span>→</span>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-emerald-500 rounded-2xl transition"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
