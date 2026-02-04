import { useRef } from "react";


const Inprev = () => {

    const inputRef = useRef(0)

const handleclick = ()=>{

inputRef.current.value = "Vanakkam Chennai";

}

  return (
    <>
    <label htmlFor="name">Predefined:</label>
    <input ref={inputRef} type="text" />
    <button onClick={handleclick} className="bg-orange-400">Value</button>
    </>
  )
}

export default Inprev