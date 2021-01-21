import React from 'react';
import FoaasCard from 'react-foaas-card'

function Result({content}) { 

    let path = content.url

    path = path.replace("/:from", ``)
    path = path.replace("/:name", `/${content.toName}`)
    
    console.log(path)

    // const modMessage = () => {
    //     if (importedData.indexOf('Fuck') > -1 ) {
    //       importedData.replace('Fuck', 'Duck')
    //       modMessage()
    //     } else if (importedData.indexOf('fuck') > -1 ) {
    //       importedData.replace('fuck', 'duck')
    //       modMessage()
    //     } else {
    
    //     }
    //   }
    
    //   modMessage()

    return (
        <div className="resultCard">
            <h4>Create a Custom Message:</h4>
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