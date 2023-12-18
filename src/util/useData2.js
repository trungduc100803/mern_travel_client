import { useDispatch } from 'react-redux'
import { useEffect } from 'react';


function useData2(path, reducer) {
    const dispatch = useDispatch()
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(path)
                const json = await res.json()
                dispatch(reducer( json ))
            } catch (error) {
                console.log('err:' , error.message)
            }
        }
        getData()
    }, [])

}

export default useData2;