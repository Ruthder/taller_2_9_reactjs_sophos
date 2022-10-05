import '../styles/Card.css'
import Button from './Button'
import {CgProfile, CgNotes} from 'react-icons/cg'
import {MdOutlineEmail} from 'react-icons/md'
import {TbMap2} from 'react-icons/tb'
import {BsTelephone, BsLock} from 'react-icons/bs'
import { useState } from 'react'

interface CardProps{
  userData: any
}

function Card(props: CardProps) {

  const [pressed, setPressed] = useState([true, false, false, false, false, false, false])
  const text = {
    'title': ['My name is','My email address is', 'My birthday is', 
      'My address is', 'My phone is', 'My password is'],
    'values': [
      Object.values(props.userData.name).join(" "), 
      props.userData.email, 
      props.userData.dob.date.split("T")[0], 
      Object.values(props.userData.location.street).join(" ") + ' street',
      props.userData.cell, 
      props.userData.login.password
    ]
  }

  return (
    <div className="Card">
      <div className='header'>
        <img src={props.userData.picture.large} alt="" />
      </div>
      <div className='card-body'>
        <label className='title'>
          {text.title[pressed.indexOf(true)]}
        </label>
        <div className='title-value'>
          {text.values[pressed.indexOf(true)]}
        </div>
      </div>
      <div className='card-buttons'>
        <Button pressedArr={[pressed, setPressed, 0]} icon={<CgProfile/>}/>
        <Button pressedArr={[pressed, setPressed, 1]} icon={<MdOutlineEmail/>}/>
        <Button pressedArr={[pressed, setPressed, 2]} icon={<CgNotes/>}/>
        <Button pressedArr={[pressed, setPressed, 3]} icon={<TbMap2/>}/>
        <Button pressedArr={[pressed, setPressed, 4]} icon={<BsTelephone/>}/>
        <Button pressedArr={[pressed, setPressed, 5]} icon={<BsLock/>}/>
      </div>
    </div>
  )
}

export default Card