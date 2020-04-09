import React, {Component} from 'react';

let animal = [
    {
      image: '/images/dog1.jpg',
      type: 'John Peters',
      name: 'news',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      animalId: '1'
    },
    {
      image: 'What to do in isolation',
      type: 'Wanda Simon',
      name: 'news',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      animalId: '2'
    },
    {
      image: 'My Plants are Dying',
      type: 'Lucy Grand',
      name: 'outdoors',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      animalId: '3'
    },
    {
      image: 'Stuck in A Room',
      type: 'Burke Ginsen',
      name: 'news',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      animalId: '4'
    },
    {
      image: 'Outside My Window',
      type: 'Laura Nivers',
      name: 'outdoors',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      animalId: '5'
    },
    {
      image: 'Outside My Window',
      type: 'Laura Nivers',
    name: 'outdoors',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '6'
    },
    {
    image: 'Outside My Window',
    type: 'Laura Nivers',
    name: 'outdoors',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '7'
  },
  {
    image: 'Outside My Window',
    type: 'Laura Nivers',
    name: 'outdoors',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '8'
  },
  {
    image: 'Outside My Window',
    type: 'Laura Nivers',
    name: 'outdoors',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '9'
  },
  {
    image: 'Outside My Window',
    type: 'Laura Nivers',
    name: 'outdoors',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '10'
  },
  {
    image: 'Outside My Window',
    type: 'Laura Nivers',
    name: 'outdoors',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '11'
  },
  {
    image: 'Outside My Window',
    type: 'Laura Nivers',
    name: 'outdoors',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '12'
  }
    ];

class Images extends Component {
    constructor(){
        super()
        this.state = {
            image: '/images/dog1.jpg'
        }
    }

  

    render(){
        return (
            <div>
                <img src={this.state.image} style={{ height: '100px', width: '100px'}} />

            </div>
        )
    }
}

export default Images;
