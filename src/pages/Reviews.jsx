const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      rating: 5,
      date: '2 weeks ago',
      comment:
        'Excellent food quality and service! The dosas are crispy and the sambar is flavorful. Highly recommended for authentic South Indian cuisine.',
    },
    {
      id: 2,
      name: 'Priya Menon',
      rating: 4,
      date: '1 month ago',
      comment:
        'Great place for family dining. The uthappams are amazing and the restaurant maintains good hygiene. Will definitely visit again.',
    },
    {
      id: 3,
      name: 'Suresh Iyer',
      rating: 4,
      date: '3 weeks ago',
      comment:
        'Authentic taste and reasonable prices. The filter coffee is perfect. The staff is friendly and the ambiance is pleasant.',
    },
    {
      id: 4,
      name: 'Lakshmi Devi',
      rating: 5,
      date: '1 week ago',
      comment:
        'Pure vegetarian restaurant with excellent food. The South Indian thali is complete and satisfying. Very clean and well-maintained.',
    },
    {
      id: 5,
      name: 'Vikram Reddy',
      rating: 3,
      date: '2 months ago',
      comment:
        'Good food but can be improved in terms of service speed during peak hours. The food quality is consistent and tasty.',
    },
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding wave-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-wood-brown">
              Customer <span className="text-red-accent">Reviews</span>
            </h1>
            
            {/* Overall Rating */}
            <div className="bg-cream-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-5xl font-bold text-wood-brown">3.8</div>
                <div>
                  <div className="flex text-yellow-400 mb-2">
                    {renderStars(4)}
                  </div>
                  <div className="text-wood-brown/70 text-sm">725 reviews</div>
                </div>
              </div>
              <p className="text-wood-brown/80">
                Based on customer feedback and ratings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding wave-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12 text-wood-brown">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-cream-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-soft-green"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-wood-brown">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-wood-brown/60">
                      {testimonial.date}
                    </p>
                  </div>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
                <p className="text-wood-brown/80 leading-relaxed">
                  {testimonial.comment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-soft-green/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-wood-brown">
            Share Your Experience
          </h2>
          <p className="text-lg text-wood-brown/70 mb-6">
            We'd love to hear from you! Visit us and share your feedback.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=WV73+7C+Sunguvarchatram+Tamil+Nadu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Visit Us & Leave a Review
          </a>
        </div>
      </section>
    </div>
  )
}

export default Reviews


