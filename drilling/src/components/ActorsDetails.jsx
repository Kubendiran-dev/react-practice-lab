import React from 'react'
import ActorsCard from './ActorsCard'

const ActorsDetails = ({ propsname }) => {
  return (
    <>
      {propsname.map((e) => (
        <ActorsCard key={e.id}
          name={e.name}
          age={e.age}
        />
      ))}
    </>
  )
}

export default ActorsDetails
