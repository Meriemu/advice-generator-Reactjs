import React from 'react'

const Box = ( { handleClick, advice, AdviecId }) => {

  return (
    <div className='ag-box'>
      <p className='ag-advice__nb'> Advice #{ AdviecId }</p>
      <h1 className='ag-advice__text'> 
      “ {advice} ”
      </h1>

      <button className='ag-advice__btn' onClick={handleClick}></button>
    </div>
  )
}

export default Box