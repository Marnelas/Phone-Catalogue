import React, {Component} from "react"
import Axios from "axios"
import Card from 'react-bootstrap/Card'

class PhoneDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            thePhone: {}
        }
    }
    
    componentDidMount() {
        Axios.get("http://localhost:3000/api/phones")
        .then(res => res.data)
        .then(phones => phones.filter(phone => phone.id === parseInt(this.props.match.params.id)))
        .then(filtered => this.setState({thePhone:filtered[0]}))
        .catch(err => console.log(err))
    }

    render(){
        const phone = this.state.thePhone
        return (
            <main>
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
            </main>
        )
    }
} 

export default PhoneDetails