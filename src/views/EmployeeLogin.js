import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BASE_URL, setToken } from '@src/utils'
import axios from 'axios'
import ApiLoader from '../components/ApiLoader'

const EmployeeLogin = () => {

  const [data, setData] = useState({
    username: "test@test.com",
    password: "123"
  })

  const [isApiLoader, setIsApiLoader] = useState(false)

  const navigate = useNavigate()

  const updateData = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const handleSubmit = () => {
    setIsApiLoader(true)
    const form_data = new FormData()
    Object.entries(data).map(([key, value]) => form_data.append(key, value))
    // post("/api/token/", form_data)
    axios.post(`${BASE_URL}/auth_merchant/api/v1/login/`, form_data)
    .then((resp) => {
      console.log(resp.status)
      if (resp.status !== 200) {
        toast.error("Something went wrong!")
        return
      }

      setToken(JSON.stringify(resp?.data))
      toast.success("Logged In Successfully")
      navigate("/dashboard/")
    })
    .catch((error) => {
      console.log(error)
      toast.error("Something went wrong!")
    })
    .finally(() => {
      setIsApiLoader(false)
    })
  }

  return (
    <div className='container-fluid'>
      {
        isApiLoader ? <ApiLoader /> : ''
      }
      <div className="row py-5">
        <div className="d-flex justify-content-center align-items-center">
          <form className='bg-white' style={{width: '400px', maxWidth: '90%', border: '1px solid #ccc', borderRadius: '5px', padding: '30px 20px'}}>
            <h4 className='text-center'>Employee Login</h4>
            <hr />
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='username' value={data?.username} onChange={(e) => updateData(e)} />
            </div>
            <div>
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"  name='password' value={data?.password} onChange={(e) => updateData(e)} />
            </div>
            <div className="mt-4 text-center">
              <Link className="btn btn-primary" onClick={() => handleSubmit()}>Login</Link>
            </div>
            <p className='mt-3'>Don't have an account? <Link to="/sign-up/">Create</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EmployeeLogin