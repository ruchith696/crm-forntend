import React from 'react'
import { Form,Button,Row,Col } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './AddTicketForm.style.css'

export const AddTicketForm = ({handleOnSubmit,handleOnChange,frmDt,errfrmData}) => {
    console.log(errfrmData)
    return ( 
    <div
    className='jumbotron mt-3 add-new-ticket bg-light'>
        <h1 className='text-info text-center'>Add New Ticket</h1>
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}> 
                        Subject
                        </Form.Label>
                        <Col>
                            <Form.Control 
                            name= "subject"
                            onChange={handleOnChange}
                            value={frmDt.subject}
                            required
                            placeholder='Subject'
                            />
                        <Form.Text className='text-danger' >
                            {errfrmData.subject && "subject is required"}
                        </Form.Text>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={3}> Issue Found At
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control
                            type= "date"
                            value={frmDt.issueDate}
                            name= "issueDate"
                            onChange={handleOnChange}
                            required
                        />
                        </Col>
                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Details</Form.Label>
                        <Form.Control
                            as="textarea"
                            name= "detail"
                            value={frmDt.detail}
                            rows={5}
                            onChange={handleOnChange}
                            required
                        />
                    </Form.Group>
                    <div className='d-grid gap-2'> 
                        <Button type='submit' variant='info' >Login</Button>
                    </div>
                    
                </Form>
    </div>
  )
}


AddTicketForm.protoTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmData: PropTypes.object.isRequired,
    errfrmData: PropTypes.object.isRequired
}