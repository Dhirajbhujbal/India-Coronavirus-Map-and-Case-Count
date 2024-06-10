import React, { Component } from 'react';
import { SummaryDetailsIcon } from '../common/summary-details-icon';
import { HttpApiService } from '../../api/http-api';

export class Home extends Component {
    
    httpApiServObj = new HttpApiService();
    myRef= []
    constructor() {
        super();
        this.state = {
            stateWiseData: [],
            countryData: []
        }
    }

    // componentDidMount() {
    //     this.httpApiServObj.getCovidCountStateWise().then( (d) => 
    //         this.setState({
    //             countryData: d.statewise.slice(0,1),
    //             stateWiseData: d.statewise.slice(1)
    //         }, () => {
    //             this.myRef.map((e) => {
    //                 e.addEventListener('touchstart', () => {
    //                     e.classList.add('touchClass')
    //                 })
    //                 e.addEventListener('touchend', () => {
    //                     e.classList.remove('touchClass')
    //                 })
    //             })
    //         })
    //     )
    // }

    navigateUrl = (stateData) => {
        this.props.history.push({ pathname: `/state/${stateData.state}`, state: stateData})
    }

    render() {
        const { countryData } = this.state

        return (<React.Fragment>
                <center><h1>India Coronavirus Map and Case Count</h1></center>
                <div className='total-section'>
                    {
                        (countryData.length)  ?
                        
                        <SummaryDetailsIcon confirmed={countryData[0].confirmed }
                        deltaconfirmed={countryData[0].deltaconfirmed}
                        active={countryData[0].active}
                        recovered={countryData[0].recovered}
                        deltarecovered={countryData[0].deltarecovered}
                        deaths={countryData[0].deaths}
                        deltadeaths={countryData[0].deltadeaths} /> : null
                    }
                </div>
                <center>
                <div className='last-upadted'>
                    <p>Last Updated {countryData.length && countryData[0].lastupdatedtime}</p>
                </div>
                </center>
                <div className='state-list'>
                {
                    this.state.stateWiseData && this.state.stateWiseData.map( (state) => {
                    return <div ref={(e) => this.myRef.push(e) } className={'tiled-state'} onClick={ () => this.navigateUrl(state)}>
                       <center><h1>{state.state}</h1></center> 
                       <center> <table>
                            <tbody>
                            <tr className='confirmed'>
                                <th><p>{'Confirmed'}</p></th>
                                <td>{'-'}</td>
                                <td>{state.confirmed}</td>
                                <td>{ (state.deltaconfirmed !== 0) ? `+ ${state.deltaconfirmed}`: ''}</td>
                            </tr>
                            <tr className='active'>
                                <th><p>Active</p></th>
                                <td>{'-'}</td>
                                <td>{state.active}</td>
                            </tr>
                            <tr className='recovered'>
                                <th><p>Recovered</p></th>
                                <td>{'-'}</td>
                                <td>{state.recovered}</td>
                                <td>{`+ ${state.deltarecovered}`}</td>

                            </tr>
                            <tr className='deaths'>    
                                <th><p>Deaths</p></th>
                                <td>{'-'}</td>
                                <td>{state.deaths}</td>
                                <td>{`+ ${state.deltadeaths}`}</td>

                            </tr>
                            </tbody>
                        </table>
                        <div className='last-upadted'>
                            <p>Last Updated {' '+state.lastupdatedtime}</p>
                        </div>
                        </center>
                        
                    </div>
                    })
                }
            </div>
            </React.Fragment>
            )
    }  
}