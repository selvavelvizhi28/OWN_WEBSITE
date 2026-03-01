const Contact = () => {
  const phoneNumber = '+919677717928'
  const address = '32, Santhavellore, Sunguvarchatram, Tamil Nadu 602106'
  const plusCode = 'WV73+7C Sunguvarchatram, Tamil Nadu'
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plusCode)}`

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding wave-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-wood-brown">
              Contact <span className="text-red-accent">Us</span>
            </h1>
            <p className="text-xl text-wood-brown/70">
              We'd love to hear from you. Get in touch with us!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding wave-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-wood-brown">
                  Get in Touch
                </h2>
                
                {/* Phone */}
                <div className="flex items-start mb-6">
                  <div className="bg-red-accent/10 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-red-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-wood-brown">
                      Phone
                    </h3>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-lg text-wood-brown/80 hover:text-red-accent transition-colors"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start mb-6">
                  <div className="bg-soft-green/10 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-soft-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-wood-brown">
                      Address
                    </h3>
                    <p className="text-lg text-wood-brown/80 leading-relaxed">
                      {address}
                    </p>
                    <p className="text-sm text-wood-brown/60 mt-2">
                      Plus Code: {plusCode}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start mb-6">
                  <div className="bg-wood-brown/10 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-wood-brown"
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
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-wood-brown">
                      Opening Hours
                    </h3>
                    <p className="text-lg text-wood-brown/80">
                      Open Daily
                    </p>
                    <p className="text-lg text-wood-brown/80">
                      Closes at 11:00 PM
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-cream-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-wood-brown">
                    Services Available
                  </h3>
                  <ul className="space-y-2 text-wood-brown/80">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-soft-green mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Dine-In
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-soft-green mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Takeaway
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-soft-green mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Delivery
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-wood-brown">
                Find Us
              </h2>
              <div className="bg-cream-white rounded-lg overflow-hidden shadow-lg">
                {/* Note: For embedded map, you'll need a Google Maps API key */}
                {/* Alternative: Use the link below or add your API key to the iframe src */}
                <div className="aspect-video bg-gradient-to-br from-wood-brown/10 to-soft-green/10 flex flex-col items-center justify-center p-8">
                  <svg
                    className="w-24 h-24 text-wood-brown/40 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-wood-brown/60 text-center mb-4">
                    Interactive map view
                  </p>
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Open in Google Maps
                  </a>
                </div>
                <div className="p-6 border-t border-wood-brown/10">
                  <p className="text-wood-brown/70 mb-2 text-sm">
                    <strong>Tip:</strong> To embed an interactive map, add your Google Maps API key to the Contact.jsx component.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-soft-green/10">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8 text-wood-brown">
            Quick Actions
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a
              href={`tel:${phoneNumber}`}
              className="btn-primary text-center"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/919677717928`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-center"
            >
              WhatsApp Us
            </a>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

