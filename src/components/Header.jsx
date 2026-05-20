const NAV_ITEMS = [
  {
    label: 'Products',
    icon: <img src="../assets/products.svg" alt="" />,
  },
  {
    label: 'Inspiration',
    icon: <img src="../assets/inspiration.svg" alt="" />,
  },
  {
    label: 'Service',
    icon: <img src="../assets/service.svg" alt="" />,
  },
  {
    label: 'Support',
    icon: <img src="../assets/support.svg" alt="" />,
  },
]

export default function Header(){
  return (
    <header className="hero">
      <nav className="navbar">
        {NAV_ITEMS.map((item) => (
          <div className="nav-item" key={item.label}>
            {item.icon}
            {item.label}
          </div>
        ))}
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">
          Your One-Stop Shop for Everyday Essentials and Unique Finds.
        </h1>
        <p className="hero-subtitle">
          Explore a seamless shopping experience with fast delivery, exceptional customer service, and exclusive deals that make every purchase worthwhile. Shop smart, shop easy, shop with ShopSphere!
        </p>
      </div>

      <div className="hero-bottom">
        <div className="hero-bottom-left">
          <button className="btn-categories">Categories</button>
          <div className="pill-tags">
            {['Men', 'Women', 'Accessories', 'Sale'].map((tag) => (
              <span className="pill-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button className="btn-contact">Contact Us</button>
      </div>
    </header>
  )
}
