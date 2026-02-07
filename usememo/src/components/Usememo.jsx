import { useMemo, useState } from 'react'

const Usememo = () => {


    const [count, setCount] = useState(0)
    const [theme, Settheme] = useState(null)

    const handleloop = (value) => {
        for (let i = 0; i <= 1000; i++) {
            console.log(i);

        } 
        
        
        return value+1
    }

const inc = useMemo(()=>handleloop(count),[count])

    return (
        <>

            <p>{inc}</p>
            <button onClick={()=>setCount(count+1)}Increase>Increase</button>
        </>
    )
}

export default Usememo