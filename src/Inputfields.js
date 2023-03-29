import React, { useState } from 'react'
// import validation from './validation';

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

  const [copy, setCopy] = useState([]);
  const [error, setError] = useState({
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

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value })
    validate(e);
  }

  const validate = (e) => {
    let name = e.target.name;
    setError((prev) => {
      const obj = { ...prev, [name]: "" };
      switch (name) {
        case "email":
          let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (mailformat.test(inputValue.email)) {
            obj[name] = "";
          }
          else{
            obj[name] = "Invalid email format";
          }
          break;

        case "password":
          if (inputValue.password.length < 6) {
            obj[name] = "Password must contain at least 6 characters";
          }
          break;

          // case "mobile":
          //   if(inputValue.mobile.length<10){
          //     obj[name]="Invalid phone number"
          //   }

        case "password":
          if (inputValue.password.length < 5) {
            obj[name] = "Password must contain at least 6 characters"
          }
          break;

        // case "cpassword":
        //   if (inputValue.password !== inputValue.cpassword) {
        //     obj[name] = "Both passwordds must match";
        //   }
        //     else if (inputValue.password === inputValue.cpassword){
        //       obj[name]=""
        //     }
        // break;

        case "cpassword":
          if (inputValue.cpassword !== inputValue.password) {
            obj[name] = "Passwords do not match";
          } else {
            obj[name] = "";
          }
          break;

        default:
          break;
      }
      return obj;
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCopy = { ...inputValue, id: Math.random() }
    setCopy([...copy, inputCopy]);
    setInputValue({ fname: '', lname: '', mobile: '', email: '', password: '', cpassword: '', country: '', gender: '', tandc: '' });
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
            <input value={inputValue.email} required onChange={handleInput} name="email" type='email' placeholder='example@email.com'
            />
            {error.email && <p style={{ color: "red", fontSize: "13px" }}>{error.email}</p>}
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
            {error.password && <p style={{ color: "red", fontSize: "13px" }}>{error.password}</p>}
            {error.cpassword && <p style={{ color: "red", fontSize: "13px" }}>{error.cpassword}</p>}

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
      <div>
        {copy.map((ele) => {
          return (
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
        })}
      </div>
    </>
  )
}

export default Inputfields;
