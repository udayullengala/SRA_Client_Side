import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { GoProjectSymlink } from "react-icons/go";

const Dashboard = () => {
  return (
    <>
      <Card>
        <CardBody>
          <h4 className='m-0'>Dashboard</h4>
        </CardBody>
      </Card>
      <Row>
        <Col md="4">
          <Card>
            <CardBody>
                <GoProjectSymlink size={28} />
                <div className='d-flex justify-content-between align-items-center mt-1'>
                  <h5 className='m-0'>Projects</h5>
                  <h4 className='m-0'>5</h4>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Dashboard