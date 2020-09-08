import React, { useEffect,useState } from 'react'

const Checkbox =({categories, handleFilters})=>{

    const [checked,setChecked]= useState([])

    const handleToggle = c =>()=>{
        const currentCategoryId = checked.indexOf(c) // false return -1
        const newCheckedcategoryId = [...checked]
        //if currently checked was not already in checked state >push
        //else pull/take off

        if(currentCategoryId === -1){
            newCheckedcategoryId.push(c)
        }else{
            newCheckedcategoryId.splice(currentCategoryId,1)
        }

        setChecked(newCheckedcategoryId)
        handleFilters(newCheckedcategoryId)
    }

    return categories.map((c,i)=>(
        <li key={i} className="list-unstyled">
            <input onChange={handleToggle(c._id)} value={checked.indexOf(c._id === -1 )} type="checkbox" className="form-check-input" /> 
            <label className="form-check-label">{c.name}</label>
        </li>
    ))
}

export default Checkbox