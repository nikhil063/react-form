import React, { useState } from 'react'

const Inputfields = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    country:'',
    gender:''
  });

  const [copy, setCopy] = useState([]);

  const handleInput = (e) => {

    const name = e.target.name;
    const value = e.target.value;
   
    setInputValue({ ...inputValue, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCopy = { ...inputValue, id: Math.random()*10 }
    
    setCopy([...copy, inputCopy]);
    
    setInputValue({ email: '', password: '', country:'', gender:'' });

  }

  return (
    <>

      <form onSubmit={handleSubmit}>
        <div>
          <fieldset style={{width:"250px"}}>
            <legend>Email</legend>
            <input value={inputValue.email} onChange={handleInput} name="email" type='email' placeholder='example@email.com' />
            </fieldset>
            <fieldset style={{width:"250px"}}>
              <legend>Password</legend>
                        
                        <input value={inputValue.password} onChange={handleInput} name="password" type='password' />
            </fieldset>
          <fieldset style={{width:"250px"}}>
            <legend>Country</legend>
            <select value={inputValue.country} onChange={handleInput} name="country">
              <option>Select country</option>
              <option>India</option>
              <option>Germany</option>
              <option>USA</option>
              <option>Japan</option>
              <option>Other</option>
            </select>
          </fieldset>
          <fieldset style={{width:"250px"}}>
            <legend value={inputValue.gender} onChange={handleInput} name='gender'>Gender</legend>
            <input value='Male' onChange={handleInput}  type='radio' name='gender' />
            <label >Male</label>
            <input value='Female' onChange={handleInput} type='radio' name='gender'/>
            <label>Female</label>
            <input value='Other' onChange={handleInput} type='radio' name='gender'/>
            <label>Other</label>
          </fieldset>
        </div>
        <div>
          <button type='submit' style={{padding:"10px 35px", margin:"10px 0px"}}>Submit</button>
        </div>
      </form>
      <div>
        {copy.map((ele)=>{
          return(
            <div key={ele.id}>
              <table style={{padding:"10px 0px", width: "50%", textAlign:"left"}}>
                <tr>
                  <th style={{border:"1px solid black", width:"250px"}}>Email</th>
                  <th style={{border:"1px solid black",width:"200px"}}>Password</th>
                  <th style={{border:"1px solid black", width:"80px"}}>Country</th>
                  <th style={{border:"1px solid black", width:"80px"}}>Gender</th>
                </tr>

                <tr>
                  <td style={{border:"1px solid black", padding:"8px"}}>{ele.email}</td>
                  
                  <td style={{border:"1px solid black"}}>{ele.password}</td>
                  <td style={{border:"1px solid black"}}>{ele.country}</td>
                   <td style={{border:"1px solid black"}}>{ele.gender}</td>
                </tr>
              </table><br/>
              
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Inputfields;
