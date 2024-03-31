import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getToken, removeToken } from '../utils';
import { toast } from 'react-toastify';
import { CiLogout } from "react-icons/ci";
import { navbarList } from '../components/data';
import { FaRegBuilding } from "react-icons/fa";

const MainLayout = ({children}) => {
  const location = useLocation()
  const navigate = useNavigate()

  const checkLogin = async () => {
    const token = await getToken()
    if (token == null || !token) {
      console.log(typeof(token), "token")
      navigate('/emp-login/')
      toast.error("Session expired")
      // return <Navigate to={"/emp-login/"} replace={true} />
    }
  }

  useEffect(() => {
    checkLogin()
  }, [location.pathname])

  return (
    <>
      <div className="siderbar_layout" style={{position: 'relative'}}>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-dark bg-light shadow" style={{position: 'absolute', top: '0px', left: '0px', width: '280px', height: '100vh'}}>
          <a href="/" className="d-flex align-items-center gap-2 mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <FaRegBuilding size={25} />
            <span className="fs-5">SRA Project</span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            {
              navbarList?.map((curElem, key) => {
                return <>
                  <li className={`nav-item mb-2`} key={key}>
                    <Link to={curElem?.navLink} className={`nav-link d-flex justify-content-start align-items-center gap-2 ${location.pathname === curElem?.navLink ? "active" : 'text-dark'}`}>
                      {curElem?.icon}
                      {curElem?.name}
                    </Link>
                  </li>
                </>
              })
            }
          </ul>
          <hr />
          <div className='dropdown'>
            <Link onClick={(e) => {
              e.preventDefault()
              removeToken()
              navigate("/emp-login/")
            }} 
            className={`nav-link d-flex justify-content-start align-items-center gap-2 text-dark`}>
              <CiLogout size={20} />
              Logout
            </Link>
          </div>
        </div>
        <div className="dynamic-content" style={{paddingLeft: '280px'}}>
          <div className="content_here" style={{padding: '20px'}}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout