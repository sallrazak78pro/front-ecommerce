import {API} from '../config'

export const getProducts = (sortBy) =>{
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=9`,{
        method:"GET"
    })
    .then(res =>res.json())
    .catch(err=>console.log(err))
}


export const getCategories = () =>{
    return fetch(`${API}/categories`,{
        method:"GET"
    })
    .then(res =>res.json())
    .catch(err=>console.log(err))
}

export const getFilteredProducts=(skip,limit,filters={})=>{
    const data={limit, skip, filters}
    return fetch(`${API}/products/by/search`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
    })
    .then(response=>{return response.json()})

    .catch(error=>console.log(error))
}
