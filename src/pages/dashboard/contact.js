import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Contact extends Component {
    
    constructor() {
        super();
        this.state = {
            employeeData : []
        }
    }

    componentDidMount() {
        fetch('http://dummy.restapiexample.com/api/v1/employees').then( d => d.json()).then((data) => {
            if(data && data.status === 'success') {
                this.setState({
                    employeeData: data.data
                })
            }
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <p>Contact Loaded</p>
                {
                    this.state.employeeData && this.state.employeeData.map((employeeRecord) => {
                        return <div>
                           <Link to={`/employee-details/${employeeRecord.employee_name}`}>{employeeRecord.employee_name} </Link>
                        </div>
                    }) 
                }
            </React.Fragment>
        )
    }
}