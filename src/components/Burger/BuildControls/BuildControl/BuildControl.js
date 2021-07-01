import React from 'react'
import './BuildControl.scss';

const BuiltControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="Label">{props.label}</div>
      <button 
        disabled={props.disabled}
        onClick={props.removed}
        className="Less">Less
      </button>

      <button
        onClick={props.added}
        className="More">More
      </button>
    </div>
  )
}

export default BuiltControl
