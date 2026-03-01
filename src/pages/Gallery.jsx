import { useState } from 'react'

const Gallery = () => {
  // Placeholder images - replace with actual image URLs
  const galleryImages = [
    {
      id: 1,
      category: 'Interior',
      alt: 'Restaurant interior view',
      placeholder: 'Restaurant Interior 1',
    },
    {
      id: 2,
      category: 'Food',
      alt: 'Dosa platter',
      placeholder: 'Dosa Special',
    },
    {
      id: 3,
      category: 'Interior',
      alt: 'Dining area',
      placeholder: 'Dining Area',
    },
    {
      id: 4,
      category: 'Food',
      alt: 'Uthappam',
      placeholder: 'Uthappam',
    },
    {
      id: 5,
      category: 'Exterior',
      alt: 'Restaurant exterior',
      placeholder: 'Restaurant Exterior',
    },
    {
      id: 6,
      category: 'Food',
      alt: 'South Indian thali',
      placeholder: 'South Indian Thali',
    },
    {
      id: 7,
      category: 'Interior',
      alt: 'Kitchen view',
      placeholder: 'Kitchen',
    },
    {
      id: 8,
      category: 'Food',
      alt: 'Idli and vada',
      placeholder: 'Idli & Vada',
    },
    {
      id: 9,
      category: 'Food',
      alt: 'Filter coffee',
      placeholder: 'Filter Coffee',
    },
  ]

  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Interior', 'Exterior', 'Food']
  const filteredImages =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding wave-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-wood-brown">
              Our <span className="text-red-accent">Gallery</span>
            </h1>
            <p className="text-xl text-wood-brown/70">
              Take a look at our restaurant, food, and atmosphere
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="section-padding wave-background">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-red-accent text-white shadow-lg'
                    : 'bg-cream-white text-wood-brown hover:bg-wood-brown hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square bg-gradient-to-br from-wood-brown/20 to-soft-green/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg
                      className="w-16 h-16 mx-auto mb-2 text-wood-brown/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-wood-brown/60 text-sm font-medium">
                      {image.placeholder}
                    </p>
                    <p className="text-wood-brown/40 text-xs mt-1">
                      {image.category}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full">
            <div className="relative">
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="bg-gradient-to-br from-wood-brown/20 to-soft-green/20 aspect-video flex items-center justify-center rounded-lg">
                <div className="text-center text-white">
                  <p className="text-2xl font-semibold mb-2">
                    {selectedImage.placeholder}
                  </p>
                  <p className="text-white/70">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery


