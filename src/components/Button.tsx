import React, { Children } from 'react'
import '../styles/Button.css'

export type MyProps = {
  icon: React.ReactNode
  pressedArr: [boolean[], any, number]
  children?: typeof Children | React.ReactNode | string
};

export class Button extends React.Component<MyProps> {

  change = (index: number, setPressed: any): void => {
    let array = new Array(6).fill(false)
    array[index] = true
    setPressed(array)
  }

  render() {

    let [pressed, setPressed, index] = this.props.pressedArr

    return (
      <button onClick={
        ():void => {
          this.change(index,setPressed)
        }
      } className='card-button' style={
        {
          'color': pressed[index] ? '#FFD24C' : 'gray',
          'borderTop': pressed[index] ? '2px solid #FFD24C' : '0px solid gray'
        }
      }>
        <div style={{
          'borderBottom': pressed[index] ? '4px solid #FFD24C' : '0px solid transparent'
        }}></div>
        {this.props.icon}
      </button>
    )
  }
}

export default Button