import { useEffect, useState } from "react"

const useData = (path) => {
    const [data, setData] = useState([])
    useEffect( () => {
        const getData = async () => {
            try {
                const res = await fetch(path)
                const json = await res.json()
                setData(json)
            } catch (error) {
                
            }
          }
          getData()
    }, [])

    return data
}

export default useData