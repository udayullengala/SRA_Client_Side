import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { post } from '../utils'
import { toast } from 'react-toastify'

const AddSuplimentary = () => {
    const defaultData = {
        aadhar_number: "",
        pan_number: "",
        new_voter_id: "",
        old_voter_id: "",
        new_electricity_bill: "",
        old_electricity_bill: "",
        new_gumasta: "",
        old_gumasta: "",
    }
    const [data, setData] = useState(defaultData)

    const updateData = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSumbit = () => {
        return
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

    return (
        <>
            <Card>
                <CardBody>
                    <h4 className='m-0'>Suplimentary</h4>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Row>

                        <Col md="4" className="mb-3">
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
                        </Col>

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

export default AddSuplimentary