import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { post } from '../utils'

const TableHeader = ({title}) => {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState({
        project_name: "",
        location: ""
    })

    const updateData = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const addProject = () => {
        const form_data = new FormData()
        Object.entries(data).map(([key, value]) => form_data.append(key, value))
        post(`/core_admin/api/v1/project/`, form_data)
        .then((resp) => {
            console.log(resp)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='title'>
                <h5>{title}</h5>
            </div>
            <div className='search'>
                <Link onClick={() => setOpen(!open)} className='btn btn-sm btn-outline-secondary d-flex justify-content-center align-items-center gap-1'>Add Project <FaPlus size={14} /></Link>
            </div>
            <Modal isOpen={open} toggle={() => setOpen(false)}>
                <ModalHeader className='m-0' toggle={() => setOpen(!open)}>
                    Add Project
                </ModalHeader>
                <ModalBody>
                    <div className='row'>
                        <div className='form-group mb-3'>
                            <label>Project Name</label>
                            <input className='form-control' name="project_name" value={data?.project_name} onChange={(e) => updateData(e)} />
                        </div>
                        <div className='form-group mb-3'>
                            <label>Location</label>
                            <input className='form-control' name="location" value={data?.location} onChange={(e) => updateData(e)} />
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Link className='btn btn-primary' onClick={() => addProject()}>
                        Save & Close
                    </Link>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default TableHeader