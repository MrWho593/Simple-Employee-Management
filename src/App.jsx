import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from './component/header.jsx'
import Footer from './component/footer.jsx'

function App() {

  return (
    <>

      <Header />

      <h1 className='simplee'>Simple Employee Management</h1>
      <div className='input_f'>
        <label>Index Number </label>
        <input type="number" placeholder='Enter your Index Number' />
        <br />

        <label>Full Name </label>
        <input type="text" placeholder='Enter your Full Name' />
        <br />

        <label>NIC Number </label>
        <input type="text" placeholder='Enter your NIC Number' />
        <br />

        <label>City </label>
        <input type="text" placeholder='Enter your Home City' />
        <br />

        <label>Telephone No </label>
        <input type="text" placeholder='Enter your Mobile Number' />
        <br />

        <label>Email </label>
        <input type="email" placeholder='Enter your Email Address' />
        <br />

        <button>Submit</button>

      </div>

      <h1 className='simplee'>Employee Details List</h1>
      <div className='table'>
        <table class='table table-sm'>
          <thead>
            <tr>
              <th>ID Number</th>
              <th>Name</th>
              <th>NIC Numer</th>
              <th>Home City</th>
              <th>Telephone No:</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>001</td>
              <td>Shashitha</td>
              <td>200204301593</td>
              <td>Kegalle</td>
              <td>0703547951</td>
              <td>shashithachamod593@gmail.com</td>
              </tr>
          </tbody>

        </table>
      </div>
      <Footer/>
    </>
  )
}

export default App
