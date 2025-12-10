import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB.jsx'

export const UserContext = createContext();

export default function ComponentA() {
    const [name, setName] = useState('lucky')
    
  return (
    <UserContext.Provider name={name}>
          <h1>Hello ComponentA : { name }</h1>
          <ComponentB />
    </UserContext.Provider>
  )
}
