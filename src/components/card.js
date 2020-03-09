import React from 'react';

// import {crdnmbr,crdhldr,expr} from './form';

 function Card({crdnmbr,crdhldr,expr}) {
    

    return (
        <div className='card'>
            
            <div>
                <h4>{crdnmbr}</h4>
                <h6>{crdhldr}</h6>
                <h3>{expr}</h3>
                <h2>Whatever Bank</h2>
            </div>
        </div>
    )
}
export default Card
