import axios from "axios"
import { API_SERVER_URL_DEV } from "../../../config"

export const getObjects = ()=>async(dispatch)=>{

    const response = await axios.get(`${API_SERVER_URL_DEV}/objects`)
    console.log(response.data)
    dispatch({
        type: 'FETCH_OBJECTS',
        payload : response.data
    })


}

export const addObject = (object)=>async(dispatch)=>{

    const response = await axios.post(`${API_SERVER_URL_DEV}/objects`, object)
    console.log(response.data)
    dispatch({
        type: 'ADD_OBJECT',
        payload : response.data
    })
}

export const deleteObject = (id) =>async(dispatch)=>{
    const response = await axios.delete(`${API_SERVER_URL_DEV}/objects/${id}`)
    console.log(response.data)
    dispatch({
        type: 'DELETE_OBJECT',
        payload : id
    })

}