import React from 'react';
import FoaasCard from 'react-foaas-card'
// import CardTwo from './CardTwo.jsx'
// import CardContent from '@material-ui/core/CardContent'

function Result ({content}) { 

    let path = content.url

    path = path.replace("/:from", ``)
    path = path.replace("/:name", `/${content.toName}`)

    return (
        <div className="resultCard">
            <FoaasCard
                type={path}
                from={content.from}
                middleFinger={false}
                darkMode={false}>
            </FoaasCard>
            {/* <CardTwo 
                from={content.from}
                type={path}/> */}
        </div>
    );
}

export default Result;