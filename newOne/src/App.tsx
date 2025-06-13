//import { DirectionAwareHover } from "./components/ui/direction-aware-hover"

export default function App() {
  return (
    <>
    {/* <div className="bg-black flex justify-center p-2 mt-20 h-screen">
      <DirectionAwareHover imageUrl={`/111.jpeg`} children={``} childrenClassName={``} imageClassName={``} className={``} />
    </div> */}
    <div className="bg-black flex justify-center items-center h-screen p-2 ">
      <div className="rounded-full border border-white w-60 h-60 relative transition-all animate-spinSlow duration-500 ease-in-out">
        <img src="111.jpeg" alt="" className="rounded-full border border-white w-8 h-8 absolute top-4 left-4"/>
        <img src="112.jpeg" alt="" className="rounded-full border border-white w-8 h-8 absolute bottom-4 right-4"/>
      </div>
    </div>
    </>
  )
}