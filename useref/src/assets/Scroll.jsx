import { useRef } from "react"


const Scroll = () => {

    const sec1Ref = useRef(null)

    const sec2Ref = useRef(null)

    const sec3Ref = useRef(null)

    const sec4Ref = useRef(null)

    const topRef = useRef(null)

const handleclick =(ref)=>{

ref.current.scrollIntoView({behavior:"smooth"})
}


    return (
        <>

            <div ref={topRef} className="flex flex-row gap-4">
                <button onClick={()=>handleclick(sec1Ref)} className="bg-amber-400 px-2 rounded-2xl">Section 1</button>
            

         
                <button  onClick={()=>handleclick(sec2Ref)} className="bg-green-400 px-2 rounded-2xl">Section 2</button>
            

            
                <button onClick={()=>handleclick(sec3Ref)} className="bg-purple-400 px-2 rounded-2xl">Section 3</button>
          

           
                <button onClick={()=>handleclick(sec4Ref)} className="bg-pink-400 px-2 rounded-2xl">Section 4</button>
            </div>


            <div  ref={sec1Ref} className="text-center bg-amber-300 p-2 w-350 h-100 mb-2 mt-3">
                <section>Section1</section>
            </div>

            <div ref={sec2Ref} className="text-center bg-green-300 p-2 w-350 h-100 mb-2">
                <section>Section2</section>
            </div>

            <div ref={sec3Ref} className="text-center bg-purple-300 p-2 w-350 h-100 mb-2">
                <section>Section3</section>
            </div>

            <div ref={sec4Ref} className="text-center bg-pink-300 p-2 w-350 h-100 mb-2">
                <section>Section4</section>
            </div>


            <button onClick={()=>handleclick(topRef)} className="bg-red-400">Go To Top</button>
        </>
    )
}

export default Scroll