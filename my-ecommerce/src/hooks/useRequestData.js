import axios from "axios"
import { useEffect, useState } from "react"

export function useRequestData(url, initialState) {
    // Custom hook , criado para retornar dados do produto. 
    const [data, setData] = useState(initialState)

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    // Função para consumo API.
    const getData = async () => {
        try {
            const res = await axios.get(url)
            setData(res.data)
            setIsLoading(true)

        } catch (error) {
            console.log('Erro ao buscar produto!');
            setIsLoading(false)

        }
    }
        useEffect(() => {
            getData()
        },[])

        return [data, isLoading, error]
    }
