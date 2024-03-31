import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { setToken } from '@src/utils'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../utils'
import ApiLoader from '../components/ApiLoader'

const SignUpPage = () => {

    const [userData, setuserData] = useState({
        first_name: "",
        last_name: "",
        password: "",
        username: ""
    })

    const [isApiLoader, setIsApiLoader] = useState(false)

    // const navigate = useNavigate()

    const updateUserData = (e) => {
        setuserData({...userData, [e.target.name]: e.target.value})
        
    }

    console.log(userData, "userData")

    const createUser = () => {
        const form_data = new FormData()
        setIsApiLoader(true)
        Object.entries(userData).map(([key, value]) => form_data.append(key, value))
        // post("", form_data)
        fetch(`${BASE_URL}/auth_merchant/api/v1/sign-up/`, {
            method: "POST",
            body: form_data
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            const tokens = {
                access: data.access,
                refresh: data.refresh
            }
            setToken(JSON.stringify(tokens))
            // navigate('/')
            toast.success("Account created successfully")
            // toast.success("Logged In")
        })
        .catch((error) => {
            console.log(error)
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
                    <h4 className='text-center'>Sign-Up</h4>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="first_name" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="first_name" name='first_name' onChange={(e) => updateUserData(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="last_name" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="last_name" name='last_name' onChange={(e) => updateUserData(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="username" name='username' aria-describedby="emailHelp" onChange={(e) => updateUserData(e)} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' onChange={(e) => updateUserData(e)} />
                    </div>
                    <div className="text-center mt-4">
                        <Link className="btn btn-primary" onClick={() => createUser()}>Create</Link>
                    </div>
                </form>
                </div>  
            </div>        
        </div>
    )
}

export default SignUpPage