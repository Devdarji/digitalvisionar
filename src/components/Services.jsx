export default function Services() {
  const services = [
    { title: 'Product Promotion', description: 'Strategic campaigns to boost your product visibility and sales', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80' },
    { title: 'Market Research', description: 'In-depth analysis to understand your target audience and market trends', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
    { title: 'Web Design & Developing', description: 'Custom websites and web applications built with modern technologies', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80' },
    { title: 'Social Media', description: 'Engaging social media management and content strategies', img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80' },
    { title: 'SEO', description: 'Search engine optimization to improve your online visibility', img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&q=80' },
    { title: 'Content Writing', description: 'Compelling content that engages and converts your audience', img: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&q=80' },
    { title: 'Influencer Marketing', description: 'Connect with influencers to amplify your brand message', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80' },
    { title: 'Professional Photography', description: 'High-quality photography for your brand and products', img: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&q=80' },
  ]

  return (
    <section id="services" className="py-20 bg-black relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-6xl font-black text-white mb-4">OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">SERVICES</span></h2>
          <p className="text-xl text-gray-400">Comprehensive solutions for your digital needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-emerald-500 transition transform hover:scale-105 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative h-48 overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-500 transition">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
