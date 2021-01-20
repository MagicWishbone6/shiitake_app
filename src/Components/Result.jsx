import React from 'react';
import FoaasCard from 'react-foaas-card'

function Result({content}) {
    
    const path = `${content.url}`


    return (
        <div>
            <h4>Your Result:</h4>
            <FoaasCard 
                type={path}
                from={content.from}
                middleFinger={false}
                darkMode={false}
                url={content.url}
            />
        </div>
    );
}

export default Result;