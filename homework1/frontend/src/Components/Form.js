import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Form() {

  const [dataEmploy, setDataEmploy] = useState(null)
  const [dataCompany, setDataCompany] = useState(null)

  useEffect(() => {

    if (!dataEmploy) {
      const asy = async ()=>{
        try {
          const sendData = await axios.post("http://localhost:3000/employee",dataEmploy)
        console.log(sendData)
        } catch (error) {
          console.log(error);
        }
        
      }
     asy()
     

    }
  }, [dataEmploy])

  useEffect(() => {

    if (dataCompany != null) {
      const asy = async ()=>{
        try {
          const sendData = await axios.post("http://localhost:3000/company",dataCompany)
          console.log(sendData)
        } catch (error) {
          console.log(error)
        }
       
      }
     asy()
     

    }
  }, [dataCompany])


  const sendDataEmployee = async () => {
    const employee = document.querySelectorAll("#employee input")
    setDataEmploy(
      {

        data: {
          Firstname: employee[0].value,
          Lastname: employee[1].value,
          Phone: employee[2].value,
          Email: employee[3].value,
          Address: employee[4].value,
          Subdistrict: employee[5].value,
          District: employee[6].value,
          Province: employee[7].value,
          PostalCode: employee[8].value,
          IdCardNumber: employee[9].value,
        }
      }

    )

  }
  const sendDataCompany = () => {
    const company = document.querySelectorAll("#company input")
    setDataCompany(
      {

        data: {
          CompanyName: company[0].value,
          CompanyAddress : company[1].value,
          Period: company[2].value,
          JobTitle : company[3].value,
          IdCardNumber : company[4].value
        }
      }

    )

  }





  return (
    <>
      <table id='employee'>
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
            <td><input type="number" lang='10' /></td>
          </tr>
          <tr>
            <td><p >Email : </p></td>
            <td><input type="email" /></td>
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

        </tbody>


      </table>
      <button  onClick={sendDataEmployee}>Submit!</button>
      <table id='company'>
        <tbody>
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
          <tr>
            <td><p >ID card number :  </p></td>
            <td><input type="text" /></td>
          </tr>

        </tbody>

      </table>
      <button onClick={sendDataCompany}>Submit!</button>



    </>
  )
}
