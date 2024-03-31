import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import Select from 'react-select'
import { get, post } from '../utils'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddAnnexure = () => {
    const [projectList, setProjectList] = useState([])
    const params = new URLSearchParams(window.location.search)
    const userTypeOpt = [
        {label: "Commercial", value: "Commercial"},
        {label: "Residential", value: "Residential"},
        {label: "Residential/Commercial", value: "Residential/Commercial"},
    ]

    const typeOpt = [
        {label: "Add", value: "Add"},
        {label: "Loft", value: "Loft"},
        {label: "Ground", value: "Ground"}
    ]

    const statusOpt = [
        {label: "Eligible", value: "Eligible"},
        {label: "NE", value: "NE"},
        {label: "UD", value: "UD"},
    ]

    console.log(params.get('project_id'))
    const defaultData = {
        project_id: params.get('project_id'),
        annexure_number: "",
        name: "",
        user_type: "",
        type: "",
        status: "",
        aadhar_number: "",
        pan_number: "",
        new_voter_id: "",
        old_voter_id: "",
        new_electricity_bill: "",
        old_electricity_bill: "",
        new_gumasta: "",
        old_gumasta: "",
        created_by: "",
        created_at: "",
    }
    const [data, setData] = useState(defaultData)

    const updateData = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleChange = (options, actionMeta, check = false) => {
        if (check) {
            const option_list = options.map((cur) => {
                return cur.value
            })
            setData({ ...data, [actionMeta.name]: option_list })
        } else {
            setData({ ...data, [actionMeta.name]: options.value })
        }

    }

    const getData = () => {
        get("/core_admin/api/v1/project/")
        .then((resp) => {
            console.log(resp);
            setProjectList(resp.data?.data?.map((curElem) => {
                return {label: curElem?.project_name, value: curElem?.id}
            }));
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleSumbit = () => {
        const form_data = new FormData()
        Object.entries(data).map(([key, value]) => form_data.append(key, value))
        post("/core_admin/api/v1/annexure/", form_data)
        .then((data) => {
            console.log(data)
            toast.success("Annexure added successfully")
            setData(defaultData)
        })
        .catch((error) => {
            console.log(error)
            toast.error("Something went wrong")
        })
    }

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <>
            <Card>
                <CardBody>
                    <h4 className='m-0'>Annexure</h4>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Row>
                        <Col md="4" className="mb-3">
                            <label>Project</label>
                            <Select 
                                options={projectList}
                                value={projectList?.filter(option => Number(option.value) === Number(data?.project_id))}
                                name="project_id"
                                onChange={(value, actionMeta) => handleChange(value, actionMeta)}
                                isDisabled={params.get('project_id')}
                            />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Annexure Number</label>
                            <input className='form-control' name='annexure_number' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Name</label>
                            <input className='form-control' name='name' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>User Type</label>
                            <Select 
                                options={userTypeOpt}
                                closeMenuOnSelect={true}
                                value={userTypeOpt?.filter(option => String(option.value) === String(data?.user_type))}
                                name="user_type"
                                onChange={(value, actionMeta) => handleChange(value, actionMeta)}
                            />
                            {/* <input className='form-control' name='user_type' onChange={(e) => updateData(e)} /> */}
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Type</label>
                            <Select 
                                options={typeOpt}
                                value={typeOpt?.filter(option => String(option.value) === String(data?.type))}
                                name='type'
                                onChange={(value, actionMeta) => handleChange(value, actionMeta)}
                            />
                            {/* <input className='form-control' name='type' onChange={(e) => updateData(e)} /> */}
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Status</label>
                            <Select 
                                options={statusOpt}
                                value={statusOpt?.filter(option => String(option.value) === String(data?.status))}
                                name='status'
                                onChange={(value, actionMeta) => handleChange(value, actionMeta)}
                            />
                            {/* <input className='form-control' name='status' onChange={(e) => updateData(e)} /> */}
                        </Col>
                        {/* <Col md="4" className="mb-3">
                            <label>Aadhar No.</label>
                            <input className='form-control' name='aadhar_number' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>PanCard No.</label>
                            <input className='form-control' name='pan_number' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>New Voter ID</label>
                            <input className='form-control' name='new_voter_id' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Old Voter ID</label>
                            <input className='form-control' name='old_voter_id' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>New Electricity Bill</label>
                            <input className='form-control' name='new_electricity_bill' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Old Electricity Bill</label>
                            <input className='form-control' name='old_electricity_bill' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>New Gumasta</label>
                            <input className='form-control' name='new_gumasta' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Old Gumasta</label>
                            <input className='form-control' name='old_gumasta' onChange={(e) => updateData(e)} />
                        </Col> */}

                        <Col md="12">
                            <div className='d-flex justify-content-end align-items-center'>
                                <a className='btn btn-primary' onClick={() => handleSumbit()}>Add Record</a>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}

export default AddAnnexure