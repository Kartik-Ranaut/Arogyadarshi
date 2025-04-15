import React, { useState } from 'react'

export default function Popup(props) {
    const [familyform,setfamilyform]=useState({
        name:"",
        age:"",
        gender:"",
        relation:"",
        token:document.cookie.substring(6)
    });

    const handleChange=(e)=>{
        let {name, value}=e.target;
        setfamilyform({ 
            ...familyform,
            [name]:value
        })
        console.log(familyform)
    }
    const handleSubmitfamilyform=async(event)=>{
        console.log("button clicked")
        event.preventDefault();
        try{
            let response = await fetch(
                "http://localhost:3000/api/addFamilyMember",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(familyform),
                }
              );
              response=await response.json();
              
              if(response.success==true){
                alert("sucessfully added the family member");
              }
              else{
                alert(response.message);
            }
            props.setrefresh((prev)=>!prev)
        }catch(error){
            alert("error while entring family details");
        }
    }
  return (
    <div>Enter family Details
    
    <form onSubmit={handleSubmitfamilyform}>
          <div className="mb-4">
            <label className="form-label">name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={familyform.name}
              onChange={handleChange}
              required
            />
          </div>
        <div className="mb-4">
            <label className="form-label">age:</label>
            <input type="number" className="form-control" name="age" value={familyform.age} onChange={handleChange} required/>
        </div>
          <div className="mb-4">
            <label className="form-label">gemder :</label>
            <select className="form-control"
              name="gender"
              value={familyform.gender}
              onChange={handleChange}
              required>
              <option value="">-- Select Gender --</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
           
          </div>
          <div className="mb-4">
            <label className="form-label">Relation:</label>
            <input
              type="text"
              className="form-control"
              name="relation"
              value={familyform.relation}
              onChange={handleChange}
              required
            />
          </div>


          <button type='submit' className='familyformsubmit'>Submit</button>
    </form>
    
    
    </div>
  )
}
