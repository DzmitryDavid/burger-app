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
      {controls.map(ctrl => {
        return <BuildControl 
          key={ctrl.label} 
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}/>
      })}
    </div>
  )
}

export default BuildControls
