import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { get, post } from '../utils'
import { toast } from 'react-toastify'
import Select from 'react-select'

const Addsupplimentary = () => {
    const defaultData = {
        annexure_id: "",
        appeal_received: "",
        aadhar_number: "",
        pan_number: "",
        new_voter_id: "",
        old_voter_id: "",
        new_electricity_bill: "",
        old_electricity_bill: "",
        new_gumasta: "",
        old_gumasta: "",
        sa_1: "",
        sa_2: "",
        first_party_er: "",
        current_party_er: "",
        appeal_submitted: ""
    }
    const [data, setData] = useState(defaultData)
    const [annexureList, setAnnexureList] = useState([])

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
        get("/core_admin/api/v1/annexure/")
        .then((resp) => {
            console.log(resp);
            setAnnexureList(resp.data?.data?.map((curElem) => {
                return {label: curElem.annexure_number, value: curElem?.id}
            }));
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getData()
    }, [])

    const handleSumbit = () => {
        const form_data = new FormData()
        Object.entries(data).map(([key, value]) => form_data.append(key, value))
        post("/core_admin/api/v1/supplimentary/", form_data)
        .then((data) => {
            console.log(data)
            toast.success("Supplimentary added successfully")
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
                    <h4 className='m-0'>Supplimentary</h4>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Row>
                        <Col md="4" className="mb-3">
                            <label>Annexure</label>
                            <Select 
                                options={annexureList}
                                value={annexureList?.filter(option => Number(option.value) === Number(data?.annexure_id))}
                                name="annexure_id"
                                onChange={(value, actionMeta) => handleChange(value, actionMeta)}
                            />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Appeal Received</label>
                            <input className='form-control' value={data?.appeal_received} name='appeal_received' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Aadhar No.</label>
                            <input className='form-control' value={data?.aadhar_number} name='aadhar_number' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>PanCard No.</label>
                            <input className='form-control' value={data?.pan_number} name='pan_number' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>New Voter ID</label>
                            <input className='form-control' value={data?.new_voter_id} name='new_voter_id' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Old Voter ID</label>
                            <input className='form-control' value={data?.old_voter_id} name='old_voter_id' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>New Electricity Bill</label>
                            <input className='form-control' value={data?.new_electricity_bill} name='new_electricity_bill' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Old Electricity Bill</label>
                            <input className='form-control' value={data?.old_electricity_bill} name='old_electricity_bill' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>New Gumasta</label>
                            <input className='form-control' value={data?.new_gumasta} name='new_gumasta' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Old Gumasta</label>
                            <input className='form-control' value={data?.old_gumasta} name='old_gumasta' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>SA 1</label>
                            <input className='form-control' value={data?.sa_1} name='sa_1' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>SA 2</label>
                            <input className='form-control' value={data?.sa_2} name='sa_2' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>First party ER</label>
                            <input className='form-control' value={data?.first_party_er} name='first_party_er' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Current party ER</label>
                            <input className='form-control' value={data?.current_party_er} name='current_party_er' onChange={(e) => updateData(e)} />
                        </Col>
                        <Col md="4" className="mb-3">
                            <label>Appeal Submitted</label>
                            <input className='form-control' value={data?.appeal_submitted} name='appeal_submitted' onChange={(e) => updateData(e)} />
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

export default Addsupplimentary