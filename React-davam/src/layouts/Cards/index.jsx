import React from 'react'

const Cards = ({ name, description, price, image }) => {
  return (
    <>
     <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '18px',
        width: '280px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <strong className='price'>{price}</strong>
    </div>
    </>
  )
}

export default Cards