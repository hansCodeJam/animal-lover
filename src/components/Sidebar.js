import React from 'react';
import {Image , Label} from 'semantic-ui-react';
import './App.css'

const Sidebar = () => (
    <div className="sidebar">
        <Label as='a'>
        <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
        Elliot
        </Label>
        <Label as='a'>
        <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
        Stevie
        </Label>
    </div>
  )
  
  export default Sidebar