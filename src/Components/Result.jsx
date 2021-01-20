import React from 'react';
import FoaasCard from 'react-foaas-card'

function Result({content}) {
    let path = content.url
    path = path.replace("/:from", "")
    path = path.replace("/:name", `/${content.toName}`)

    return (
        <div>
            <h4>Your Result:</h4>
            <FoaasCard 
                type={path}
                from={content.from}
                middleFinger={false}
                darkMode={false}
                url={path}
            />
        </div>
    );
}

export default Result;