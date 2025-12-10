import React, { useEffect, useState } from 'react'
import './FormComponent.css';
function FormComponent() {
  const [userInfo, setUserInfo] = useState([])
  const [divBox, setDivBox] = useState([])

  const submitHandler = () => {
    const fname = document.getElementById('fname').value
    const lname = document.getElementById('lname').value
    const password = document.getElementById('password').value
    var mobile
    const mob1 = document.getElementById('mob1').value
    const mob2 = document.getElementById('mob2').value
    const mob3 = document.getElementById('mob3').value

    const car = document.getElementById('cars').value

    const file = document.getElementById('myfile').value

    console.log(file, 'file');

    console.log(mob1, mob2, mob3)
    if (mob1 !== undefined) {
      mobile = mob1
    } else if (mob2 !== undefined) {
      mobile = mob2
    } else {
      mobile = mob3
    }
    // const male = document.getElementById('male').value
    // const female = document.getElementById('female').value

    setUserInfo((userInfo) => [
      ...userInfo,
      {
        fname: fname,
        lname: lname,
        password: password,
        mobile: [mob1, mob2, mob3],
      },
    ])
  }

  // const createDiv = () => {
  //   const no = document.getElementById('no').value
  //   const char = document.getElementById('char').value
  //   setDivBox((divBox) => [...divBox, no, char])
  // }

  // var divBoxDesign
  // var divChar
  // var newArr = []
  // for (let i = 0; i < divBox.length; i++) {
  //   divBoxDesign = divBox[0]
  //   divChar = divBox[1]
  // }

  // for (let j = 0; j < divBoxDesign; j++) {
  //   newArr.push(divBoxDesign + divChar)
  // }

  // console.log(newArr);

  //  const clearDiv = () => {
  //   newArr.pop(divBoxDesign + divChar);
  // }

  console.log(userInfo)
  return (
    <div>
      <h1 style={{color:'red'}}>Form Component</h1>
      <form>
        <label>FirstName:</label>
        <input type="text" id="fname" name="firstname" />
        <br />
        <label>LastName</label>
        <input type="text" id="lname" />
        <br />
        <label>Select Gender</label>
        <br />
        <label>Male</label>
        <input type="radio" id="male" name="gender" />
        <br />
        <label>Female</label>
        <input type="radio" id="female" name="gender" />
        <br />
        <label>Password</label>
        <input type="password" id="password" />
        <div>
          <label>Select checkbox</label>
          <input type="checkbox" id="mob1" />
          <label>iPhone</label>
          <br />
          <input type="checkbox" id="mob2" />
          <label>One Plus</label>
          <br />
          <input type="checkbox" id="mob3" />
          <label>Real Me</label>
          <br />
        </div>

        <select id="cars" name="cars" size="3">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>

        <label>Select a file </label>
        <input type="file" id="myfile" name="myfile" />
      </form>
      <button onClick={submitHandler}>submit</button>

      <table style={{ border: '1px solid black' }}>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black' }}>FirstName</th>
          <th style={{ border: '1px solid black' }}>LastName</th>
          <th style={{ border: '1px solid black' }}>Password</th>
        </tr>
        {userInfo.map((item) => {
          return (
            <tr style={{ border: '1px solid black' }}>
              <td style={{ border: '1px solid black' }}>{item.fname}</td>
              <td style={{ border: '1px solid black' }}>{item.lname}</td>
              <td style={{ border: '1px solid black' }}>{item.password}</td>
            </tr>
          )
        })}
      </table>

      {/* <div>
        <form>
          <label>enter no</label>
          <input type="text" id="no" />
          <br />
          <label>enter character</label>
          <input type="text" id="char" />
          <br />
        </form>
        <br />
        <button onClick={createDiv}>submit</button>
         <button onClick={clearDiv}>Clear</button>
      </div>
      <span style={{ display: 'grid', gridTemplateColumns: '33% 33% 33%' }}>
        {divBox.length > 0 &&
          newArr.map((item) => {
            return (
              <div
                style={{
                  border: '2px solid red',
                  width: '33%',
                  height: '100px',
                  marginBottom:'20px'
                }}
              >
                {item}
              </div>
            )
          })}
      </span> */}
    </div>
  )
}
export default FormComponent
