import React from 'react'
import './DivInlineBlockComponent.css';

function DivInlineBlockComponent() {
  return (
    <div className='divContainer'>
      <div className='div1'>
        <h2>London</h2>
        <p>London is the capital city of England.</p>
        <p>London has over 13 million inhabitants.</p>
      </div>

      <div className='div2'>
        <h2>Oslo</h2>
        <p>Oslo is the capital city of Norway.</p>
        <p>Oslo has over 600.000 inhabitants.</p>
      </div>

      <div className='div3'>
        <h2>Rome</h2>
        <p>Rome is the capital city of Italy.</p>
        <p>Rome has almost 3 million inhabitants.</p>
      </div>
    </div>
  )
}
export default DivInlineBlockComponent
