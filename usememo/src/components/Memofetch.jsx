import React, { useEffect, useMemo, useState } from 'react'

const Memofetch = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {

        const fetchproducts = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products?limit=50")
                const data = await res.json()
                setProducts(data.products)
            } catch (err) {
                console.log(err)
            }
        }
        fetchproducts()

    }, [])

    const calculates = useMemo(() => {

        return products.reduce((acc, item) => acc + item.price, 0)
    }, [products])


    return (

        <>
            <h2>Total Products: {products.length}</h2>
            <h2>Total Price: ${calculates}</h2>
        </>
    )
}

export default Memofetch