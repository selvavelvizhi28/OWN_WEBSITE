import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center wave-background pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-wood-brown/5"></div>
        </div>
        
        <div className="container-custom relative z-10 section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-wood-brown leading-tight">
                <span className="text-red-accent">Authentic</span> South Indian
                <br />
                Pure Vegetarian Cuisine
              </h1>
              <p className="text-lg md:text-xl text-wood-brown/70 mb-8 leading-relaxed">
                Serving fresh, traditional vegetarian meals in Sunguvarchatram.
                Experience the rich flavors of South India with our carefully
                crafted dishes made from the finest ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:+919677717928"
                  className="btn-primary text-center"
                >
                  Call Now
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=WV73+7C+Sunguvarchatram+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center"
                >
                  Get Directions
                </a>
                <Link to="/menu" className="btn-outline text-center">
                  View Menu
                </Link>
              </div>
              
              {/* Rating Badge */}
              <div className="mt-8 flex items-center justify-center md:justify-start space-x-2">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-wood-brown">3.8</span>
                  <div className="ml-2 flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? 'fill-current' : 'text-gray-300'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-wood-brown/70">(725 reviews)</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-rectangle">
                  <img
                    src="/images/interior.jpg"
                    alt="Restaurant interior"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding wave-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-cream-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-soft-green/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-soft-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-wood-brown">
                Pure Vegetarian
              </h3>
              <p className="text-wood-brown/70">
                100% vegetarian ingredients, prepared with traditional methods
                and utmost care.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-cream-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-accent/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-wood-brown">
                Fresh Daily
              </h3>
              <p className="text-wood-brown/70">
                All dishes are prepared fresh daily using locally sourced,
                quality ingredients.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-cream-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-wood-brown/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-wood-brown"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-wood-brown">
                Family Friendly
              </h3>
              <p className="text-wood-brown/70">
                A warm, welcoming atmosphere perfect for family dining and
                gatherings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding wave-background">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-wood-brown">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4 text-wood-brown">
                Dine-In
              </h3>
              <p className="text-wood-brown/70">
                Enjoy our delicious meals in our comfortable, hygienic dining
                space.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4 text-wood-brown">
                Takeaway
              </h3>
              <p className="text-wood-brown/70">
                Order your favorite dishes to enjoy at home or on the go.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4 text-wood-brown">
                Delivery
              </h3>
              <p className="text-wood-brown/70">
                Get fresh, hot meals delivered right to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


