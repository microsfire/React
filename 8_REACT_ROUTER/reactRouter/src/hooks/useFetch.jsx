import { useState, useEffect } from "react";

//4 Custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    //5 refatorando post

    //Post
    const [config, setConfig] = useState(null)
    const [method, setMethold] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //6 - loading
    const [loading, setLoading] = useState(false)

    //7 - tratando error
    const [error, setError] = useState(null)

    //8 - DELETE
    const [itemId, setItemId] = useState(null)

    //Config
    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(data),
            })
            setMethold(method)
        }else if (method === 'DELETE'){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json",
                },
            })
            setMethold(method)
            setItemId(data)
        }
    }

    // GET
    useEffect(() => {
        const fetchData = async () => {
            // 6- loading
        setLoading(true)
        
       try {

            const res = await fetch(url)

            const json = await res.json()

        setData(json)
        
       } catch (error) {
            //console.log(error.message)
            setError('Ouve um erro ao carregar os dados tente novamente mais tarde.')
        
       }

        setLoading(false)
    }

    fetchData()

    }, [url, callFetch])

    //refatorando Post
    useEffect(() => {
     const httpRequest = async ( )=> {

        let json

           if (method === "POST") {
            let fetchOptions = [url, config]
            const res = await fetch(...fetchOptions)
            json = await res.json()

        }else if (method === 'DELETE'){
            const urlDelete = `${url}/${itemId}`
            const res = await fetch(urlDelete, config)
            json = await res.json()
        }
        setCallFetch(json)
     }
     httpRequest()

    }, [config, method, url])

    return { data, httpConfig, loading, error}

}