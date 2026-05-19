export default function Navbar() {
  return (
    <div className="w-full"> {/* Ensuring dark background container */}
      <nav>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center relative border border-white rounded-full shadow-md shadow-white w-full py-2">
              
              {/* Desktop Menu */}
              <div>
                <div className="flex flex-row gap-3">
                  
                  <a href="#Home" className="px-2 py-1 text-sm font-medium 
                  text-gray-300 hover:bg-yellow-400/20 
                  hover:text-yellow-300 border-2 
                  border-yellow-400/40 rounded-full transition duration-300">
                    Home
                  </a>
                  
                  <a 
                    href="#Skills" 
                    className="px-2 py-1 text-sm font-medium 
                    text-gray-300 hover:bg-emerald-400/20 hover:text-emerald-300 
                    border-2 border-emerald-400/40 rounded-full transition duration-300"
                  >
                    Skills
                  </a>
                  
                  {/* Note: Kept the spelling "#Exprerience" to match your portfolio section ID */}
                  <a 
                    href="#Exprerience" 
                    className="px-2 py-1 text-sm font-medium 
                    text-gray-100 hover:bg-white/30 
                    hover:text-white border-2 
                    border-white/60 rounded-full transition duration-300"
                  >
                    Experience
                  </a>
                  
                  <a 
                    href="#Projects" 
                    className="px-2 py-1 text-sm font-medium 
                    text-gray-300 hover:bg-blue-400/20 
                    hover:text-blue-300 border-2 
                    border-blue-400/40 
                    rounded-full transition duration-300"
                  >
                    Projects
                  </a>
                  <a 
                    href="#Certification" 
                    className="px-2 py-1 text-sm font-medium 
                    text-gray-300 hover:bg-red-400/20 
                    hover:text-red-300 border-2 
                    border-red-400/40 
                    rounded-full transition duration-300"
                  >
                    Certification
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