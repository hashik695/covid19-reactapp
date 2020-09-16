import Axios from 'axios'
import React, { Component } from 'react'
import {Accordion,Button,Card} from 'react-bootstrap'

export default class StateData extends Component {

    constructor(){
        super()
        this.state={
            stateData:{},
        }

       

    }
    componentDidMount(){
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(response=>{
           this.setState({stateData:response.data}) 
        })
    }
    render() {
        let keys=Object.keys(this.state.stateData)
        return (
            <div className="row">
                <div className="col-md-12">
                <Accordion >
                {
                    keys.map((itm,key)=>{
                      let districts=this.state.stateData[itm].districtData
                      
                       
                      let total_active=0 ;
                      let total_confiremed= 0;
                      let total_deaths= 0;
                      let total_recovery= 0;
                      

                      let district_list=[]
                      for(let x in districts)
                      {
                        total_active +=districts[x].active;
                        total_confiremed +=districts[x].confirmed;
                        total_deaths +=districts[x].deceased;
                        total_recovery +=districts[x].recovered;
                        let ob=districts[x];
                        ob["District_name"]=x;
                        district_list.push(ob);
                       }
                       console.log(district_list);



                 return(
                  <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="outline-secondary"  eventKey={key}>
                      {itm}-<span className="btn-dark p-1 mr-2">Total Cases:{total_confiremed}</span> <span className="btn-dark p-1 mr-2"> Active :{total_active}</span><span className="btn-dark p-1 mr-2"> Deaths:{total_deaths}</span> <span className="btn-dark p-1 mr-2">recovered:{total_recovery}</span>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={key}>
                    <Card.Body>
                      <table className="table table-bordered table-striped">
                        <thead>
                          <tr>
                            <td>District</td>
                            <td>Confirmed</td>
                            <td>Active</td>
                            <td>Deaths</td>

                          </tr>
                        </thead>
                        <tbody>
                          {
                            district_list.map((itm,key)=>{
                              return(
                                <tr>
                                  <td>{itm.District_name}</td>
                                  <td>{itm.active}</td>
                                  <td>{itm.confirmed}</td>
                                  <td>{itm.deceased}</td>
                                  <td>{itm.recovered}</td>
                                </tr>
                              )
                            })
                          }

                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              
                 )
               })
                }
              </Accordion>    


                </div>
            
            </div>
        )
    }
}
