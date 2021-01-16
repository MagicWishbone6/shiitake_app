import React from 'react';
import FoaasCard from 'react-foaas-card'

function Result({content}) {
    
    const path = `${content.value}/${content.toName}`

    // console.log(path)

    return (
        <div>
            <h4>Your Result:</h4>
            <FoaasCard 
                type={path}
                from={content.from}
                middleFinger={false}
                darkMode={false}
            />
            {/* <h5>{result.message}</h5>
            <h6>{result.subtitle}</h6> */}
        </div>
    );
}

export default Result;