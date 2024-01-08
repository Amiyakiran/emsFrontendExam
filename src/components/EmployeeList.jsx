import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteEmployee, getEmployee } from '../services/allApi'
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';


function EmployeeList() {
  const [empDetails, setEmpDetails] = useState([])


  const getallEmployee = async () => {

    const result = await getEmployee()
    setEmpDetails(result.data)
  }

  const handleDelete = async (id) => {
    const result = await deleteEmployee(id)
    if (result.status >= 200 && result.status < 300) {
      alert('employee deleted successfully')
      getallEmployee()
    }
    else {
      alert('deletion failed')
    }
  }
  useEffect(() => {
    getallEmployee()
  }, [])
  console.log(empDetails);
  return (
    <div div className='d-flex'>
      <div className='d-flex flex-column' style={{ width: '250px', height: '100vh', backgroundColor: 'green' }}>
        <Link className='mt-5 ms-3' style={{ textDecoration: 'none', color: 'white' }} to={'/'}><h5> <i class="fa-solid fa-bars me-2"></i>DashBoard</h5></Link>
        <Link className='mt-3 ms-3' style={{ textDecoration: 'none', color: 'white' }} to={'/allemployee'}><h5><i class="fa-solid fa-user me-2"></i>Employee List</h5></Link>
      </div>
      <div className='p-3 w-100'>
        <h3 className='text-success'>Employee List</h3>
        <div className='w-100 d-flex justify-content-center align-items-center mt-5'>
          <table className='table table-border shadow rounded'>
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Image</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {empDetails.length > 0 ?
                empDetails.map((item) => (<tr>
                  <td>{item.EmpId}</td>
                  <td>{item.empName}</td>
                  <td>{item.empEmail}</td>
                  <td>{item.empDesg}</td>
                  <td><img src={item.empImg} alt="no image" width={'150px'} height={'150px'} /></td>
                  <td>
                    <button onClick={(e) => handleDelete(item.id)} className='btn btn-outline-danger'><i class="fa-solid fa-trash"></i></button>
                  </td>

                </tr>
                
                ))
                : <p className='text-danger'>Nothing to display</p>
              }
            </tbody>
          </table>




        </div>
      </div>
    </div>
  )
}

export default EmployeeList