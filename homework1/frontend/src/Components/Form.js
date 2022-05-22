import React, { useEffect, useState } from 'react'

export default function Form() {

  const [data, setData] = useState(null)



  useEffect()
  const sendData = () => {
    setData(
      {

        data: {
          Firstname: document.querySelectorAll("input")[0].value
        }
      }

    )
  }





  return (
    <>
      <table>
        <tbody>
          <tr>
            <td><p >Firstname : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >Lastname : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >Phone : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >Email : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >Address : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >Subdistrict : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >District : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >Province : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >Postal code : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >ID card number : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >Company Name : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >Company Address : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >Period : </p></td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td><p >Job title : </p></td>
            <td><input type="text" /></td>
          </tr>

        </tbody>
      </table>
      <button onClick={sendData}>Submit!</button>


    </>
  )
}
