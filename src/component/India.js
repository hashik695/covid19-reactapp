import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import StateData from "./StateData"
import axios from 'axios';

export default class India extends Component {

    constructor(){
        super()
        this.state={
            allDistrict:[]
        }
    }

    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            this.setState({
                allDistrict:response.data
            })
        })
    }

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
        <h3>{this.state.allDistrict.cases}</h3>
                       
                        
                    </Card.Body>
                    </Card> 
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-success" style={{ width: '18rem' }}>

  <Card.Body className="text-center">
    <Card.Title>ACTIVE CAESES</Card.Title>
        <h3>{this.state.allDistrict.active}</h3>
    
    
  </Card.Body>
</Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-secondary" style={{ width: '18rem' }}>

  <Card.Body className="text-center">
    <Card.Title>RECOVERED</Card.Title>
        <h3>{this.state.allDistrict.recovered}</h3>
   
    
  </Card.Body>
</Card>
                        </div>
                        <div className="col-md-3">
                        <Card className="badge badge-primary" style={{ width: '18rem' }}>

  <Card.Body className="text-center">
    <Card.Title>DEATHS</Card.Title>
        <h3>{this.state.allDistrict.deaths}</h3>
    
    
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
