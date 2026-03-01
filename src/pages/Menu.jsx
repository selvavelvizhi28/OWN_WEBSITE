const Menu = () => {
  const menuCategories = [
    {
      title: 'Special Dosas',
      items: [
        { name: 'Butter Dosa', price: '₹80', description: 'Crispy dosa with butter' },
        { name: 'Mysore Masala Dosa', price: '₹90', description: 'Spicy masala dosa with Mysore chutney' },
        { name: 'Cheese Dosa', price: '₹100', description: 'Dosa topped with melted cheese' },
        { name: 'Onion Dosa', price: '₹75', description: 'Dosa with fresh onions' },
        { name: 'Podi Dosa', price: '₹85', description: 'Dosa with spicy podi powder' },
      ],
    },
    {
      title: 'Uthappams',
      items: [
        { name: 'Tomato Uthappam', price: '₹90', description: 'Uthappam topped with fresh tomatoes' },
        { name: 'Onion Uthappam', price: '₹85', description: 'Uthappam with chopped onions' },
        { name: 'Mushroom Uthappam', price: '₹110', description: 'Uthappam with sautéed mushrooms' },
        { name: 'Paneer Uthappam', price: '₹120', description: 'Uthappam with fresh paneer' },
        { name: 'Gobi Uthappam', price: '₹95', description: 'Uthappam with cauliflower' },
        { name: 'Cashew Uthappam', price: '₹130', description: 'Uthappam with cashew nuts' },
      ],
    },
    {
      title: 'South Indian Meals',
      items: [
        { name: 'South Indian Thali', price: '₹150', description: 'Complete meal with rice, sambar, rasam, vegetables, and curd' },
        { name: 'Mini Meals', price: '₹100', description: 'Light meal with rice, sambar, and one curry' },
        { name: 'Curd Rice', price: '₹60', description: 'Traditional curd rice with pickle' },
        { name: 'Lemon Rice', price: '₹70', description: 'Tangy lemon rice' },
        { name: 'Tomato Rice', price: '₹75', description: 'Spicy tomato rice' },
        { name: 'Sambar Rice', price: '₹65', description: 'Rice with sambar' },
      ],
    },
    {
      title: 'Beverages',
      items: [
        { name: 'Filter Coffee', price: '₹30', description: 'Traditional South Indian filter coffee' },
        { name: 'Tea', price: '₹20', description: 'Hot tea' },
        { name: 'Fresh Lime Juice', price: '₹40', description: 'Fresh lime with salt/sugar' },
        { name: 'Buttermilk', price: '₹35', description: 'Spiced buttermilk' },
        { name: 'Fresh Fruit Juice', price: '₹50', description: 'Seasonal fresh fruit juice' },
        { name: 'Badam Milk', price: '₹60', description: 'Almond milk' },
      ],
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding wave-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-wood-brown">
              Our <span className="text-red-accent">Menu</span>
            </h1>
            <p className="text-xl text-wood-brown/70 mb-4">
              Authentic South Indian Pure Vegetarian Cuisine
            </p>
            <p className="text-wood-brown/60">
              Price Range: ₹1–200 per person
            </p>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding wave-background">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto space-y-12">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold mb-8 text-wood-brown border-b-4 border-red-accent pb-2">
                  {category.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-cream-white p-6 rounded-lg hover:shadow-lg transition-shadow border-l-4 border-soft-green"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-wood-brown">
                          {item.name}
                        </h3>
                        <span className="text-lg font-bold text-red-accent">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-wood-brown/70">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-soft-green/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4 text-wood-brown">
            Ready to Order?
          </h2>
          <p className="text-lg text-wood-brown/70 mb-6">
            Call us now or visit us for dine-in, takeaway, or delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919677717928"
              className="btn-primary"
            >
              Call Now: +91 96777 17928
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=WV73+7C+Sunguvarchatram+Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Menu


