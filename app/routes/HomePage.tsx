import { ShoppingCart, User, ShoppingBag } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-sky-300 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <h1 className="text-white text-2xl font-bold text-[#111]">The Club Eskimo</h1>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-black transition-colors font-bold text-[#111]">
              New release
            </a>
            <a href="#" className="text-white hover:text-black transition-colors font-bold text-[#111]">
              Latest release
            </a>
            <a href="#" className="text-white hover:text-black transition-colors font-bold text-[#111]">
              Categories
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-100 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="text-white hover:text-gray-100 transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button className="text-white hover:text-gray-100 transition-colors">
              <ShoppingBag className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-35">
          {/* Product 1 */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/topi.jpg"
                alt="The Club Eskimo cap with tropical background"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <h2 className="text-xl font-normal text-gray-800">The Club Eskimo</h2>
          </div>

          {/* Product 2 */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/topi.jpg"
                alt="The Club Eskimo cap with tropical background"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <h2 className="text-xl font-normal text-gray-800">The Club Eskimo</h2>
          </div>

          {/* Product 3 */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/topi.jpg"
                alt="The Club Eskimo cap with tropical background"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <h2 className="text-xl font-normal text-gray-800">The Club Eskimo</h2>
          </div>

          {/* Product 4 */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/topi.jpg"
                alt="The Club Eskimo cap with tropical background"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <h2 className="text-xl font-normal text-gray-800">The Club Eskimo</h2>
          </div>

          {/* Product 5 */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/topi.jpg"
                alt="The Club Eskimo cap with tropical background"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <h2 className="text-xl font-normal text-gray-800">The Club Eskimo</h2>
          </div>

          {/* Product 6 */}
          <div className="text-center">
            <div className="mb-6">
              <img
                src="/topi.jpg"
                alt="The Club Eskimo cap with tropical background"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <h2 className="text-xl font-normal text-gray-800">The Club Eskimo</h2>
          </div>
        </div>
      </main>
    </div>
  )
}
