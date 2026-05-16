export default function Navbar() {
  return (
    <div className="w-full bg-gray-900"> {/* Ensuring dark background container */}
      <nav className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center justify-center relative w-full">
              
              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  
                  <a href="#Home" className="px-3 py-2 text-sm font-medium 
                  text-gray-300 hover:bg-yellow-400/20 
                  hover:text-yellow-300 border-2 
                  border-yellow-400/40 rounded-full transition duration-300">
                    Home
                  </a>
                  
                  <a 
                    href="#Skills" 
                    className="px-3 py-2 text-sm font-medium 
                    text-gray-300 hover:bg-emerald-400/20 hover:text-emerald-300 
                    border-2 border-emerald-400/40 rounded-full transition duration-300"
                  >
                    Skills
                  </a>
                  
                  {/* Note: Kept the spelling "#Exprerience" to match your portfolio section ID */}
                  <a 
                    href="#Exprerience" 
                    className="px-3 py-2 text-sm font-medium 
                    text-gray-100 hover:bg-white/30 
                    hover:text-white border-2 
                    border-white/60 rounded-full transition duration-300"
                  >
                    Experience
                  </a>
                  
                  <a 
                    href="#Projects" 
                    className="px-3 py-2 text-sm font-medium 
                    text-gray-300 hover:bg-blue-400/20 
                    hover:text-blue-300 border-2 
                    border-blue-400/40 
                    rounded-full transition duration-300"
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}