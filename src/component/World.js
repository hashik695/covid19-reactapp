import Axios from 'axios'
import React, { Component } from 'react'

export default class World extends Component {

    constructor(){
        super()
        this.state={
            allcountry:[]
        }
    }
    componentDidMount(){
        Axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            this.setState({
                allcountry:response.data
            })
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered table-striped table-danger">
                       <thead>
                        <tr>
                            <td>Country</td>
                            <td>Total Cases</td>
                            <td>Recovered</td>
                            <td>Deaths</td>
                        
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.allcountry.map((itm,key)=>{
                                    return(
                                        <tr>
                                            <td>{itm.country}<img style={{width:"50px",margin:"20px",}} src={itm.countryInfo.flag}/></td>
                                    <td>{itm.cases}</td>
                                    <td>{itm.recovered}</td>
                                    <td>{itm.deaths}</td>
                                        </tr>
                                     
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}
