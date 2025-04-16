import React from 'react'
import './progress.css'
import { useState } from "react";
export default function Progress(props) {
    const [member,setmember]=useState({});
  return (
    <div className='progress'>
            <div className="select">
                    {!props.islogedin ? (
                    <div>Please login first</div>
                    ) : (
                    <select id="relation" name="relation"
                        onChange={(e) => {
                        const selectedMember = props.user.family.find(
                        (relation) => relation._id === e.target.value
                        );
                        setmember(selectedMember);
                        console.log(selectedMember); 
                    }}
                    >
                    <option value="">-- Select Member --</option>
                        {props.user.family.map((relation, index) => (
                        <option key={index} value={relation._id} >
                            {relation.name}
                        </option>
                        ))}
                        </select>
                    )}
                    
            </div>
    </div>
  )
}
