import React from 'react'
import ComponentC from './ComponentC'

export default function ComponentB(props) {
  return (
    <div>
      <h1>Hello ComponentB : {props.name}</h1>
      <ComponentC name={props.name} />
    </div>
  )
}
