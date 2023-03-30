import React, { useState } from 'react'

const Inputfields = () => {
  const [inputValue, setInputValue] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    password: '',
    cpassword: '',
    country: '',
    gender: '',
    tandc: ''
  });

  const [formErrors, setFormErrors] = useState([]);

  const [copy, setCopy] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];
    if (!inputValue.fname) errors.push("First name is required");
    if (!inputValue.lname) errors.push("Last name is required");
    if (!inputValue.email) errors.push("Email is required");
    if (!/\S+@\S+\.\S+/.test(inputValue.email)) errors.push("Email is invalid");
    if (inputValue.password.length<6) errors.push("Password should have at least 6 characters");
    if (inputValue.password !== inputValue.cpassword) errors.push("Passwords do not match");
    if (!inputValue.gender) errors.push("Enter a gender")
    setFormErrors(errors);
    if (errors.length === 0) {
      const inputCopy = { ...inputValue, id: Math.random() }
        setCopy([...copy, inputCopy]);
        setInputValue({ fname: '', lname: '', mobile: '', email: '', password: '', cpassword: '', country: '', gender: false, tandc: false });
      }
  }

  return (
    <>
      <form id="myForm" className='myForm' onSubmit={handleSubmit}>
        <div>

          <fieldset style={{ width: "250px" }}>
            <legend>First name</legend>
            <input value={inputValue.fname} required onChange={handleInput} name="fname" type='text' />
          </fieldset>

          <fieldset style={{ width: "250px" }}>
            <legend>Last name</legend>
            <input value={inputValue.lname} required onChange={handleInput} name="lname" type='text' />
          </fieldset>

          <fieldset style={{ width: "250px" }}>
            <legend>Email</legend>
            <input value={inputValue.email} required onChange={handleInput} name="email" type='email' placeholder='example@email.com' />
          </fieldset>

          <fieldset style={{ width: "250px" }}>
            <legend>Phone number</legend>
            <input value={inputValue.mobile} required onChange={handleInput} name="mobile" type='number' />
          </fieldset>

          <fieldset style={{ width: "250px" }}>
            <legend>Password</legend>
            <input value={inputValue.password} required onChange={handleInput} name="password" type='password' />

            <legend>Confirm password</legend>
            <input value={inputValue.cpassword} required onChange={handleInput} name="cpassword" type='password' />

          </fieldset>

          <fieldset style={{ width: "250px" }}>
            <legend>Country</legend>
            <select value={inputValue.country} required onChange={handleInput} name="country" placeholder='Select your country'>
              <option value='' disabled selected>Select your country</option>
              <option>India</option>
              <option>Germany</option>
              <option>USA</option>
              <option>Japan</option>
              <option>Other</option>
            </select>
          </fieldset>
          <fieldset style={{ width: "250px" }}>
            <legend value={inputValue.gender} required onChange={handleInput} name='gender'>Gender</legend>

            <label ><input value='Male' required onChange={handleInput} type='radio' name='gender' />Male</label>

            <label><input value='Female' onChange={handleInput} type='radio' name='gender' />Female</label>

            <label><input value='Other' onChange={handleInput} type='radio' name='gender' />Other</label>
          </fieldset>
          <label>Accept all terms & condition</label>
          <input value={inputValue.tandc} required onChange={handleInput} name="tandc" type='checkbox'></input>
        </div>
        <div>
          <button type='submit' style={{ padding: "10px 35px", margin: "10px 0px" }}>Submit</button>
        </div>

      </form>
      {formErrors.map((item)=>(
      <fieldset style={{color:"red", width: "250px",fontSize:"13px"}} >
        <legend style={{fontWeight:"bold", color:"red"}}>Error!</legend> 
        {item}
        </fieldset>
        ))}
      <div>
        {copy.map((ele) => (
            <div key={ele.id}>
              <table style={{ padding: "10px 0px", width: "100%", textAlign: "left" }}>
                <tr>
                  <th style={{ border: "1px solid black", width: "250px" }}>First name</th>
                  <th style={{ border: "1px solid black", width: "250px" }}>Last name</th>
                  <th style={{ border: "1px solid black", width: "250px" }}>Email</th>
                  <th style={{ border: "1px solid black", width: "250px" }}>Phone number</th>
                  <th style={{ border: "1px solid black", width: "200px" }}>Password</th>
                  <th style={{ border: "1px solid black", width: "80px" }}>Country</th>
                  <th style={{ border: "1px solid black", width: "80px" }}>Gender</th>
                </tr>

                <tr>
                  <td style={{ border: "1px solid black" }}>{ele.fname}</td>
                  <td style={{ border: "1px solid black" }}>{ele.lname}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{ele.email}</td>
                  <td style={{ border: "1px solid black" }}>{ele.mobile}</td>
                  <td style={{ border: "1px solid black" }}>{ele.password}</td>

                  <td style={{ border: "1px solid black" }}>{ele.country}</td>
                  <td style={{ border: "1px solid black" }}>{ele.gender}</td>
                </tr>
              </table><br />
            </div>
          )
        )}
     
      </div>
    </>
  )
}

export default Inputfields;
