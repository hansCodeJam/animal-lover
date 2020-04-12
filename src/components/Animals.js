import React, {Component} from 'react';
import { Card, Image } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Buttons from './Buttons';


let animals = [
    {
      image: '/images/dog1.jpg',
      type: 'Dog',
      name: 'Mars',
      description:
        'Mars chiln by the lake',
      animalId: '1'
    },
    {
      image: '/images/dog2.jpg',
      type: 'Dog',
      name: 'Brody',
      description:
        'Brody inside a box',
      animalId: '2'
    },
    {
      image: '/images/dog3.jpg',
      type: 'Dog',
      name: 'Pistachio',
      description:
        'Pistachio taking a breaking at the beach',
      animalId: '3'
    },
    {
      image: '/images/tiger1.jpg',
      type: 'Tiger',
      name: 'Kicker',
      description:
        'Kicker showing off his sharp teeth ',
      animalId: '4'
    },
    {
      image: '/images/tiger2.jpg',
      type: 'Tiger',
      name: 'Storm',
      description:
        'Storm swimming after long hot day',
      animalId: '5'
    },
    {
    image: '/images/tiger3.jpg',
    type: 'Tiger',
    name: 'Itchy',
    description:
      'Itchy looking for a pray to snack on',
    animalId: '6'
    },
    {
    image: '/images/dolphin1.jpg',
    type: 'Dolphin',
    name: 'Omelette',
    description:
      'Omelette and his friend casually swimming',
    animalId: '7'
  },
  {
    image: '/images/dolphin2.jpg',
    type: 'Dolphin',
    name: 'Pistol',
    description:
      'Pistol the surfer hitting the waves again',
    animalId: '8'
  },
  {
    image: '/images/dolphin3.jpg',
    type: 'Dolphin',
    name: 'Chief',
    description:
      'Chief is always showing off',
    animalId: '9'
  },
  {
    image: '/images/horse1.jpg',
    type: 'Horse',
    name: 'Zuni',
    description:
      'Zuni looking terrified at the camera',
    animalId: '10'
  },
  {
    image: '/images/horse2.jpg',
    type: 'Horse',
    name: 'Squirt',
    description:
      'Squirt is one big horse',
    animalId: '11'
  },
  {
    image: '/images/horse3.jpg',
    type: 'Horse',
    name: 'Tinkerbell',
    description:
      'Tinkerbell just being Tinkerbell',
    animalId: '12'
  }
    ];

class Animals extends Component {
    constructor(){
        super()
        this.state = {
            animals,
        }
    }

    

    render(){
        return (
            <div>
                {this.state.animals.map((animal, idx) => {
                    return(   
                        <div className='card'>
                            <Card key={animal.animalId} >
                                <Image src={animal.image} wrapped ui={false} />
                                <Card.Content>
                                <Card.Header>{animal.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{animal.type}</span>
                                </Card.Meta>
                                <Card.Description>
                                    {animal.description}
                                </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                <a>
                                    <Buttons />
                                </a>
                                </Card.Content>
                            </Card> 
                        </div>                         
                    )
                })}
            </div>
                

        )
    }
}

export default Animals;
