import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addEmployee } from '../services/allApi';

function Dashboard() {

    const [employee, setEmployee]=useState({
        EmpId:"",
        empName:"",
        empEmail:"",
        empDesg:"",
        empImg:""
    })

    console.log(employee);

    const handleClose = ()=>{
        setEmployee({
            EmpId:"",
        empName:"",
        empEmail:"",
        empDesg:"",
        empImg:"" 
        })
    }

    const handleAdd =async()=>{
        const {EmpId , empName , empEmail, empDesg,empImg} = employee

        if(!EmpId || !empName || !empEmail  || !empDesg || !empImg){
            alert('please fill the form completely')
        }
        else{
           const response = await addEmployee(employee)
           console.log(response);
           if(response.status>=200 && response.status<300){
            alert('project successfully added')
            setEmployee({
                EmpId:"",
            empName:"",
            empEmail:"",
            empDesg:"",
            empImg:"" 
            })
           }
           else{
            console.log(response);
            alert('Something went wrong')
           }
        }
    }

  return (
   <div div className='d-flex'>
        <div className='d-flex flex-column' style={{width:'250px',height:'88vh', backgroundColor:'green'}}>
            <Link className='mt-5 ms-3' style={{textDecoration:'none', color:'white'}} to={'/'}><h5> <i class="fa-solid fa-bars me-2"></i>DashBoard</h5></Link>
            <Link className='mt-3 ms-3' style={{textDecoration:'none', color:'white'}} to={'/allemployee'}><h5><i class="fa-solid fa-user me-2"></i>Employee List</h5></Link>
        </div>
        <div className='p-3 w-100'>
            <h3 className='text-success'>DashBoard</h3>
            <div className='w-100 d-flex justify-content-center align-items-center mt-5'>
                <form className='border rounded shadow p-5 w-75'>
                    <h4 className='mb-4'>Add Employee Details</h4>
                    <div className="mb-3">
                        <input type="text" placeholder='Employee Id' className='form-control' onChange={(e)=>setEmployee({...employee,EmpId:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Name' className='form-control' onChange={(e)=>setEmployee({...employee,empName:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Email' className='form-control' onChange={(e)=>setEmployee({...employee,empEmail:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Designation' className='form-control' onChange={(e)=>setEmployee({...employee,empDesg:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Image Url' className='form-control' onChange={(e)=>setEmployee({...employee,empImg:e.target.value})} />
                    </div>
                    <div className="mb-3">
                        <button className='btn btn-warning me-3' onClick={handleClose}>Cancel</button>
                       <button className='btn btn-success' onClick={handleAdd}>ADD</button>
                    </div>
                </form>
            </div>
        </div>
   </div>
  )
}

export default Dashboard