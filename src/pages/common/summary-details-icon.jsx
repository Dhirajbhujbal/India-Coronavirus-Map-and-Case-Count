import React from 'react';
import { HeartSvgIcon } from './heart';

export const SummaryDetailsIcon  = (props) => {

    const {  confirmed,  deltaconfirmed,  active , recovered , deltarecovered, deaths, deltadeaths} = props;

    return (
        <React.Fragment>
            <div className='confirmed'>
                <p>Confirmed</p>
                <HeartSvgIcon  color='red'/>
                <p>{confirmed}</p>
                {
                    deltaconfirmed && <p>(+ {deltaconfirmed})</p>
                }
            </div>
            <div className='active'>
            <p>Active</p> 
            <HeartSvgIcon  color='blue'/>
            <p>{active}</p>
            </div>
            <div className='recovered'>
            <p>Recovered</p> 
            <HeartSvgIcon  color='green'/>
            <p>{recovered}</p>
            {
                deltarecovered && <p>(+ {deltarecovered})</p>
            }
            
            </div>
            {
                deaths && <div className='deaths'>
                <p>Deaths</p>
                <HeartSvgIcon  color='gray'/>
                <p>{deaths}</p>
                {
                    deltadeaths && <p>(+ {deltadeaths})</p>
                }
            </div>
            }

        </React.Fragment>
    )
}