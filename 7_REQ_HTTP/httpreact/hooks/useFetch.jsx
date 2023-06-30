import { useState, useEffect } from "react";

//4 Custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    //5 refatorando post

    //Post
    const [config, setConfig] = useState(null)
    const [method, setMethold] = useState(null)
    const [callFetch, setcallFetch] = useState(false)

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
        }
    }

    // GET
    useEffect(() => {
        const fetchData = async () => {
        const res = await fetch(url)

        const json = await res.json()

        setData(json)
    }

    fetchData()

    }, [url, callFetch])

    //refatorando Post
    useEffect(() => {

     const httpRequest = async ( )=> {
           if (method === "POST") {
            let fetchOptions = [url, config]
            const res = await fetch(...fetchOptions)
            const json = await res.json()
            setcallFetch(json)
        }
     }
     httpRequest()

    }, [config, method, url])

    return { data, httpConfig}

}