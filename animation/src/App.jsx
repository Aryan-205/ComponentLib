import {motion} from 'motion/react'

export default function App() {

  return (
    <>
    <div 
      className='bg-black h-screen flex justify-center items-center w-full'
      style={{
        backgroundImage:"radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat"
      }}
    >
      <motion.button 
        className='group relative text-gray-400 hover:text-cyan-500 rounded-lg px-4 py-2 bg-black shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]' 
        whileHover={{ rotateX:20,rotateY:15, boxShadow: "0px 20px 50px rgba(8,112,104,0.7)"}} 
        style={{translateZ:30}} transition={{duration:0.3,ease:"easeInOut"}}
        >
          Hello World
          <span className='absolute inset-x-0 bottom-px w-3/4 bg-gradient-to-r from-transparent via-cyan-400 to-transparent h-px mx-auto'/>
          <span className='absolute inset-x-0 duration-300 h-[4px] opacity-0 group-hover:opacity-100 transition-opacity bottom-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm mx-auto'/>
      </motion.button>
    </div>
    </>
  );
}