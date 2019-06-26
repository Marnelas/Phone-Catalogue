import React, {Component} from "react"
import {Redirect} from "react-router-dom"
import Card from 'react-bootstrap/Card'

class PhoneDetails extends Component {
    
    componentDidMount() {
        this.props.getOnePhone(this.props.match.params.id)
    }

    render(){
        const phone = this.props.thePhone
        return (
            <main>
                {phone ?
                    <section>
                        <Card>
                            <Card.Img variant="top" src={"images/" + phone.imageFileName}/>
                            <Card.Body>
                            <Card.Title>{phone.name}</Card.Title>
                            <Card.Subtitle>{phone.manufacturer}</Card.Subtitle>
                            <Card.Text>{phone.description}</Card.Text>
                                <Card.Text>Color: {phone.color}</Card.Text>
                                <Card.Text>Price: {phone.price}</Card.Text>
                                <Card.Text>Screen: {phone.screen}</Card.Text>
                                <Card.Text>Processor: {phone.processor}</Card.Text>
                                <Card.Text>Ram: {phone.ram}</Card.Text>
                            </Card.Body>
                        </Card>
                    </section>
                :
                    <Redirect to="/" />
                }
            </main>
        )
    }
} 

export default PhoneDetails