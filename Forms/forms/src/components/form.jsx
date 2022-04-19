import { useState } from "react"

export const Form = ()=>{

    const [formData,setFormData] = useState({
        userName : "",
        age : ""
    })

    const handleChange = (e)=>{
        const {id,value} = e.target

        setFormData({
            ...formData,
            [id] : value
        });
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        // console.log(formData)

        fetch(" http://localhost:8080/form",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(formData)
        })
    }
    return(
        <div>
            <input type="text" placeholder="Enter UserName" id="userName" onChange={handleChange} />
            <input type="number" placeholder="Enter Age" id="age" onChange={handleChange} />
            <input type="submit" value="submit" onClick={handleSubmit} />
        </div>
    )
}