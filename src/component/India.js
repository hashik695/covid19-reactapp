import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import StateData from "./StateData"

export default class India extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <img src="https://www.countryflags.io/in/shiny/64.png"></img>
                    <h2>INDIA</h2>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-3">
                        <Card className="badge badge-danger" style={{ width: '18rem' }}>

                    <Card.Body className="text-center">
                        <Card.Title>TOTAL CASES</Card.Title>
                        <h3>19877</h3>
                        <Card.Text>
                        [Today-25]
                        </Card.Text>
                        
                    </Card.Body>
                    </Card> 
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-success" style={{ width: '18rem' }}>

  <Card.Body className="text-center">
    <Card.Title>ACTIVE CAESES</Card.Title>
    <h3>19877</h3>
    <Card.Text>
     [Today-25]
    </Card.Text>
    
  </Card.Body>
</Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-secondary" style={{ width: '18rem' }}>

  <Card.Body className="text-center">
    <Card.Title>RECOVERED</Card.Title>
    <h3>19877</h3>
    <Card.Text>
     [Today-25]
    </Card.Text>
    
  </Card.Body>
</Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-primary" style={{ width: '18rem' }}>

  <Card.Body className="text-center">
    <Card.Title>DEATHS</Card.Title>
    <h3>19877</h3>
    <Card.Text>
     [Today-25]
    </Card.Text>
    
  </Card.Body>
</Card>
                        </div>
                        <div className="col-md-12">
                            <StateData/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
