import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'

function CardTwo ({from, type}) {   
    const [cardText, setCardText] = useState({})

    useEffect(() => {
        fetchFoaasCardTwo(from,type)
    }, [])

    const fetchFoaasCardTwo = async (from, type) => {
        const response = await fetch(`https://foaas.com/${type}/${from}`)
        const jsonData = await response.json()
        setCardText(jsonData)
    }

    const handleLoad = (event) => {
        fetchFoaasCardTwo(from,type)
        event.preventDefault()
        return (
        <div>
            {cardText}
        </div>
            )
    }

    console.log(cardText)

    // const handleLoad = (event) => {
    //     setCardText({cardText})
    //     event.preventDefault()
    // }

    return (
        <div className="resultCardTwo">
            <Card>
                <Card.Header>
                    Your Result:
                </Card.Header>
                <Card.Body>
                    <Card.Title onLoad={handleLoad}>
                    </Card.Title>
                    <Card.Text>
                        {from}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardTwo