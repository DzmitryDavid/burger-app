import React from 'react'
import './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'}
]

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p className="Price">Current Price: {(props.price).toFixed(2)} $</p>
      {controls.map(ctrl => {
        return <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
          />
      })}
      <button
        className="OrderButton"
        disabled={!props.purchasable}>
          Order Now
        </button>
    </div>
  )
}

export default BuildControls
