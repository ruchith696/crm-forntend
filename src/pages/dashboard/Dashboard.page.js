import React from 'react'
import { Container,Row,Col,Button} from 'react-bootstrap'
import { TicketTable } from '../../components/ticket-table/TicketTable.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import { Breadcrb } from '../../components/breadcrumb/Breadcrumb.comp'

export const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
                <Breadcrb page="Dashboard"/>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
                <Button 
                    variant='info' 
                    style={{'font-size':'2rem', 'padding':"10px 30px"}}
                    >
                    Add New Ticket
                </Button>
            </Col>
        </Row>
        <Row>
            <Col className='text-center  mb-2'>
                <div>
                    Total tickets: 500
                </div>
                <div>
                    Pending tickets: 5
                </div>
            </Col>
        </Row>
        <Row>
            <Col className='mt-2'>
               Recently Added tickets
            </Col>
        </Row>
        <hr/>
        <Row>
            <Col className='recent-tickets'>
              <TicketTable tickets={tickets} />
            </Col>
        </Row>

    </Container>
  )
}
