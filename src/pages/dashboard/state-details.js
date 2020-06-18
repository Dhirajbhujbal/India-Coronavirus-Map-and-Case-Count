import React, { Component } from 'react';
import { SummaryDetailsIcon } from '../common/summary-details-icon';
import { HttpApiService } from '../../api/http-api';

export class StateComponent extends Component {
    
    httpApiServObj = new HttpApiService();
    constructor() {
        super();
        this.state = {
            stateData: {},
            districtData: []
        }
    }

    componentDidMount() {
        this.httpApiServObj.getCovidCountDistricWise().then( (response) => { 
            this.setState({
                stateData: this.props.location.state,
                districtData: response[this.props.match.params.state].districtData
            })
        });
    }
    
    getSortedState = () => {
        return Object.keys(this.state.districtData).sort( (obj1, obj2) => {
            if(this.state.districtData[obj2].confirmed > this.state.districtData[obj1].confirmed) {
                return 1
            } else {
                return -1
            }
        })
    }

    render() {

        const { stateData } = this.state
        console.log(stateData)
        return(
            <React.Fragment>
            {
                stateData && <React.Fragment> <div className='state-details-1'>
                <div>
                    <h1>{stateData.state}</h1>
                </div>
            </div>
            <div>
            </div>
            <div className='state-details-2'>
                <SummaryDetailsIcon confirmed={stateData.confirmed }
                        active={stateData.active}
                        recovered={stateData.recovered}
                        deaths={stateData.deaths} />
            </div>  
            </React.Fragment>
            }
            <div className='state-details-container'>        {

                        this.state.districtData && this.getSortedState().map( (districtName) => {
                            const distData = this.state.districtData[districtName];
                            return (
                                <div className='news-block district'>
                                    {/* <div className='news-block-1'>
                                        <div>
                                            {new Date().toDateString()} 
                                        </div>                        
                                    </div> */}
                                    <div className='state-details-2'>
                                        <div>
                                            <h2>{districtName}</h2>
                                        </div>
                                        <div style={{ display:'flex'}}>
                                        <SummaryDetailsIcon 
                                            confirmed={distData.confirmed}
                                            active={distData.active}
                                            recovered={distData.recovered}
                                        />
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }
            </div>
            </React.Fragment>
        )
    }
}