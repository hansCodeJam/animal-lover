import React, {Component} from 'react';

let animals = [
    {
      image: '/images/dog1.jpg',
      type: 'Dog',
      name: 'Mars',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      animalId: '1'
    },
    {
      image: '/images/dog2.jpg',
      type: 'Dog',
      name: 'Brody',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      animalId: '2'
    },
    {
      image: '/images/dog3.jpg',
      type: 'Dog',
      name: 'Pistachio',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      animalId: '3'
    },
    {
      image: '/images/tiger1.jpg',
      type: 'Tiger',
      name: 'Kicker',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      animalId: '4'
    },
    {
      image: '/images/tiger2.jpg',
      type: 'Tiger',
      name: 'Storm',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
      animalId: '5'
    },
    {
    image: '/images/tiger3.jpg',
    type: 'Tiger',
    name: 'Itchy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '6'
    },
    {
    image: '/images/dolphin1.jpg',
    type: 'Dolphin',
    name: 'Omelette',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '7'
  },
  {
    image: '/images/dolphin2.jpg',
    type: 'Dolphin',
    name: 'Pistol',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '8'
  },
  {
    image: '/images/dolphin3.jpg',
    type: 'Dolphin',
    name: 'Chief',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '9'
  },
  {
    image: '/images/horse1.jpg',
    type: 'Horse',
    name: 'Zuni',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '10'
  },
  {
    image: '/images/horse2.jpg',
    type: 'Horse',
    name: 'Squirt',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
    animalId: '11'
  },
  {
    image: '/images/horse3.jpg',
    type: 'Horse',
    name: 'Tinkerbell',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
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
                    return (
                        <div key={animal.animalId} className="ui card">
                            <div className="image" >
                                <img src={animal.image} style={{width:'100px'}}/>
                            </div>
                            <div className="content">
                                <div className="header"></div>
                                <div className="meta"><span className="date">Joined in 2015</span></div>
                                <div className="description">Matthew is a musician living in Nashville.</div>
                            </div>
                            <div className="extra content">
                                <a>
                                <i aria-hidden="true" className="user icon"></i>
                                22 Friends
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>

        )
    }
}

export default Animals;
