import Image from "next/image";


const products = [
  {
    name: "Baby Romper",
    price: "₦18,500",
    image: "/products/baby-romper.jpg",
  },
  {
    name: "Soft Baby Blanket",
    price: "₦25,000",
    image: "/products/baby-blanket.jpg",
  },
  {
    name: "Baby Feeding Set",
    price: "₦15,000",
    image: "/products/feeding-set.jpg",
  },
  {
    name: "Baby Gift Box",
    price: "₦35,000",
    image: "/products/baby-gift-box.jpg",
  },
];

const categories = [
  "Baby Clothing",
  "Feeding",
  "Toys",
  "Baby Care",
  "Nursery",
  "Gift Sets",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffaf7] text-zinc-800">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-pink-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-pink-600">
              LittleNest
            </h1>
            <p className="text-xs text-zinc-500">
              Everything little ones need
            </p>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-medium hover:text-pink-600">
              Home
            </a>
            <a
              href="#shop"
              className="text-sm font-medium hover:text-pink-600"
            >
              Shop
            </a>
            <a
              href="#categories"
              className="text-sm font-medium hover:text-pink-600"
            >
              Categories
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:text-pink-600"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-pink-600"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-full border border-pink-200 px-4 py-2 text-sm font-medium hover:bg-pink-50">
              ♡ Wishlist
            </button>

            <button className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white hover:bg-pink-700">
              🛒 Cart
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24"
      >
        <div>
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            🧸 Made for little moments
          </span>

          <h2 className="mt-6 max-w-xl text-5xl font-bold leading-tight tracking-tight text-zinc-900 md:text-6xl">
            Everything your
            <span className="text-pink-600"> little one </span>
            needs.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-600">
            Discover carefully selected baby essentials, adorable clothing,
            toys, feeding products and thoughtful gifts for every little
            bundle of joy.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="rounded-full bg-pink-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-pink-700"
            >
              Shop Now →
            </a>

            <a
              href="#categories"
              className="rounded-full border border-pink-200 bg-white px-7 py-3.5 font-semibold text-pink-600 transition hover:bg-pink-50"
            >
              Explore Categories
            </a>
          </div>

          <div className="mt-10 flex gap-8 text-sm">
            <div>
              <p className="text-2xl font-bold text-zinc-900">500+</p>
              <p className="text-zinc-500">Happy parents</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-zinc-900">100+</p>
              <p className="text-zinc-500">Baby products</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-zinc-900">Nationwide</p>
              <p className="text-zinc-500">Delivery</p>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative">
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-yellow-200" />
          <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-pink-200" />

          <div className="relative overflow-hidden rounded-[2.5rem] bg-pink-100 p-3 shadow-2xl">
            <div className="flex h-[480px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#fce8e8]">
              <div className="text-center">
                <div className="text-8xl">👶</div>
                <p className="mt-5 text-lg font-semibold text-pink-600">
                  LittleNest Baby Collection
                </p>
                <p className="mt-2 text-sm text-zinc-500">
                  Cute • Safe • Comfortable
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-pink-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-4">
          <div className="flex gap-4">
            <span className="text-3xl">🚚</span>
            <div>
              <h3 className="font-bold">Fast Delivery</h3>
              <p className="text-sm text-zinc-500">
                We deliver nationwide
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-3xl">💗</span>
            <div>
              <h3 className="font-bold">Quality Products</h3>
              <p className="text-sm text-zinc-500">
                Carefully selected for babies
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-3xl">🔒</span>
            <div>
              <h3 className="font-bold">Secure Shopping</h3>
              <p className="text-sm text-zinc-500">
                Safe and simple checkout
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-3xl">🎁</span>
            <div>
              <h3 className="font-bold">Perfect Gifts</h3>
              <p className="text-sm text-zinc-500">
                Beautiful baby gift options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-pink-600">
            Shop by category
          </span>

          <h2 className="mt-3 text-3xl font-bold text-zinc-900 md:text-4xl">
            Find something special
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-zinc-500">
            Everything you need to make your baby&apos;s world more
            comfortable, beautiful and fun.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => (
            <a
              href="#shop"
              key={category}
              className="group rounded-3xl border border-pink-100 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 text-3xl group-hover:bg-pink-100">
                {["👕", "🍼", "🧸", "🧴", "🛏️", "🎁"][index]}
              </div>

              <p className="mt-4 text-sm font-semibold">{category}</p>
            </a>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="shop" className="bg-pink-50/50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-pink-600">
                Our favourites
              </span>

              <h2 className="mt-2 text-3xl font-bold text-zinc-900 md:text-4xl">
                Popular baby picks
              </h2>
            </div>

            <a
              href="#shop"
              className="font-semibold text-pink-600 hover:text-pink-700"
            >
              View all products →
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative flex h-64 items-center justify-center bg-[#fff3f4]">
                  <div className="text-center">
                    <div className="text-7xl">🧸</div>
                    <p className="mt-2 text-xs text-pink-400">
                      Product image
                    </p>
                  </div>

                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-pink-600 shadow-sm">
                    New
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-pink-500">
                    Baby essentials
                  </p>

                  <h3 className="mt-2 font-bold text-zinc-900">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-lg font-bold text-pink-600">
                      {product.price}
                    </p>

                    <button className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-pink-600">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] bg-pink-600 px-8 py-12 text-white md:px-16 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
                🎁 Special for new parents
              </span>

              <h2 className="mt-5 text-3xl font-bold md:text-5xl">
                Build a beautiful baby gift box.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-pink-100">
                Put together a thoughtful collection of baby essentials for
                birthdays, baby showers, naming ceremonies and newborn gifts.
              </p>

              <button className="mt-7 rounded-full bg-white px-7 py-3 font-bold text-pink-600 hover:bg-pink-50">
                Create a Gift Box →
              </button>
            </div>

            <div className="text-center text-9xl">🎁 👶 🧸</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-pink-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-pink-600">
            Why LittleNest?
          </span>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-zinc-900 md:text-4xl">
            Making parenting a little easier, one product at a time.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-500">
            We believe shopping for your little one should be simple,
            enjoyable and stress-free. That&apos;s why we bring together
            quality baby products in one convenient place.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#fff5f5]">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="text-4xl">💌</div>

          <h2 className="mt-4 text-3xl font-bold">
            Get baby deals & updates
          </h2>

          <p className="mt-3 text-zinc-500">
            Be the first to know about new arrivals, special offers and useful
            baby products.
          </p>

          <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-full border border-pink-200 bg-white px-5 outline-none focus:border-pink-500"
            />

            <button className="rounded-full bg-pink-600 px-6 font-semibold text-white hover:bg-pink-700">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-pink-400">LittleNest</h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Quality baby essentials, adorable products and thoughtful gifts
              for every little one.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Shop</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <p>Baby Clothing</p>
              <p>Baby Care</p>
              <p>Toys</p>
              <p>Feeding</p>
              <p>Gift Sets</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Help</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <p>Contact Us</p>
              <p>Delivery Information</p>
              <p>Returns & Refunds</p>
              <p>FAQs</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <p>📞 +234 800 000 0000</p>
              <p>✉️ hello@littlenest.com</p>
              <p>📍 Nigeria</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
          © 2026 LittleNest. All rights reserved.
        </div>
      </footer>
    </div>
  );
}