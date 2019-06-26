import React, {Component} from 'react'
import {Link} from "react-router-dom"
import Axios from "axios"
import Card from 'react-bootstrap/Card'
import CardColumns from "react-bootstrap/CardColumns"

class Phones extends Component {

  componentDidMount () {
    Axios.get("http://localhost:3000/api/phones")
    .then(res => res.data)
    .then(phones => this.props.saveAllPhones(phones))
    .catch(err => console.log(err))
  }
  
  render () {
    return (
      <main>
        <section>
          <CardColumns>
          {this.props.allPhones.map((phone, idx) =>
            <article key={idx}>
              <Card>
                <Card.Img variant="top" src={"images/" + phone.imageFileName}/>
                <Card.Body>
                  <Link to={"/" + phone.id}><Card.Title>{phone.name}</Card.Title></Link>
                  <Card.Subtitle>{phone.manufacturer}</Card.Subtitle>
                  <Card.Text>{phone.description}</Card.Text>
                    <Card.Text>Color: {phone.color}</Card.Text>
                    <Card.Text>Price: {phone.price}</Card.Text>
                    <Card.Text>Screen: {phone.screen}</Card.Text>
                    <Card.Text>Processor: {phone.processor}</Card.Text>
                    <Card.Text>Ram: {phone.ram}</Card.Text>
                </Card.Body>
              </Card>
            </article>
          )}
        </CardColumns>
        </section>
      </main>
    )
  }
 
}

export default Phones
