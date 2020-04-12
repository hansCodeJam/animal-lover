import React from 'react'
import { Button } from 'semantic-ui-react'
import './App.css'

const Buttons = () => (
  <div>
    <Button primary>Like</Button>
    <Button className="red">Dislike</Button>
    <Button>Discard</Button>
  </div>
)

export default Buttons