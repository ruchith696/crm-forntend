import React, { useState, useEffect } from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.comp'
import { Breadcrb } from '../../components/breadcrumb/Breadcrumb.comp'
import {shortText} from "../../utils/validation";


const initialFrmDt = {
        subject:'',
        issueDate: "",
        detail: "",
    };

const errorFrmDt ={
    subject: false,
    issuedate: false,
    detail: false,
}

export const AddTicket = () => {

    const [frmData, setFrmData] = useState(initialFrmDt)
    const [errfrmData, setErrFrmData] = useState(errorFrmDt)
    useEffect(() => {}, [frmData,errfrmData]);
    

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        
        setFrmData({
            ...frmData,
            [name]: value,

        })
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        setErrFrmData(errorFrmDt);

        const isSubjectValid = await shortText(frmData.subject);
        
        console.log(isSubjectValid)

        setErrFrmData({
            ...errorFrmDt,
            subject: !isSubjectValid })
        

        console.log('Form submit request received');
    }

  return (
    <Container>
        <Row>
            <Col>
                <Breadcrb page='New Ticket'/>
            </Col>
        </Row>
        <Row>
            <Col>
                <AddTicketForm 
                    handleOnChange={handleOnChange}
                    frmDt={frmData}
                    handleOnSubmit={handleOnSubmit}
                    errfrmData={errfrmData}
                />
            </Col>

        </Row>
    </Container>
  )
}
