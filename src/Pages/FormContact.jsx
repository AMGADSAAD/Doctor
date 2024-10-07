import React, { useState } from 'react'

const FormContact = () => {

    const [name ,setname] = useState("");
    const [show , setshow] = useState(true);

 const changename = (event) => {
    setname(event.target.value)
 } 



    const  FormHandler = (event) =>{
        event.preventDefault();
        if(name.length == ""){
            setshow(false)
            return;
        }
        console.log(name);
        setshow(true)
    }

  return (

 



    <form onSubmit={FormHandler}>
          <input placeholder="Your name" onChange={changename} />
          {!show &&<p>not empty</p> }
          
                
            <input placeholder=' Email'/>
              

            
            <input placeholder=' phone Numbers' />

            <select>
                <option>Selecty Department</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select> 
        
         
            <textarea placeholder=' Message'></textarea>
   
              
            <button>Submit</button>
        </form>
                
        
  )
}

export default FormContact
