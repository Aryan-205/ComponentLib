export default function App(){
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 p-8 flex flex-wrap gap-10 items-center justify-center">
      
      {/* Rounded Corner Shape (like the image) */}
      <div className="relative w-80 h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 overflow-hidden group">
        {/* Glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent rounded-3xl"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Rounded Corners</h3>
          <p className="text-sm opacity-90 drop-shadow-md">Smooth & Elegant</p>
        </div>
        
        {/* Decorative element */}
        <div className="absolute bottom-5 right-5 w-16 h-8 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
        
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/0 via-blue-300/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Slanted Sides Shape */}
      <div 
        className="relative w-80 h-96 bg-gradient-to-br from-red-500 to-red-700 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 group"
        style={{
          clipPath: 'polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)'
        }}
      >
        {/* Glossy overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"
          style={{
            clipPath: 'polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)'
          }}
        ></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Slanted Sides</h3>
          <p className="text-sm opacity-90 drop-shadow-md">Sharp & Modern</p>
        </div>
        
        {/* Decorative triangle */}
        <div 
          className="absolute bottom-8 right-8 w-0 h-0 opacity-30"
          style={{
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            borderBottom: '25px solid rgba(255, 255, 255, 0.4)'
          }}
        ></div>
        
        {/* Hover glow effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-300/10 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            clipPath: 'polygon(12% 0%, 88% 0%, 100% 12%, 100% 88%, 88% 100%, 12% 100%, 0% 88%, 0% 12%)'
          }}
        ></div>
      </div>

      {/* Additional Hexagon Shape */}
      <div 
        className="relative w-80 h-96 bg-gradient-to-br from-purple-500 to-purple-700 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 group"
        style={{
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
        }}
      >
        {/* Glossy overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}
        ></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Hexagon</h3>
          <p className="text-sm opacity-90 drop-shadow-md">Bold & Dynamic</p>
        </div>
        
        {/* Decorative circle */}
        <div className="absolute bottom-8 right-8 w-6 h-6 bg-white/30 rounded-full"></div>
        
        {/* Hover glow effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-300/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}
        ></div>
      </div>

      {/* Diamond Shape */}
      <div 
        className="relative w-80 h-96 bg-gradient-to-br from-green-500 to-green-700 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-300 group"
        style={{
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
        }}
      >
        {/* Glossy overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }}
        ></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Diamond</h3>
          <p className="text-sm opacity-90 drop-shadow-md">Precise & Clean</p>
        </div>
        
        {/* Decorative square */}
        <div className="absolute bottom-12 right-12 w-4 h-4 bg-white/30 rotate-45"></div>
        
        {/* Hover glow effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-300/10 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }}
        ></div>
      </div>
    </div>
    </>
  )
}