import React from 'react'

function ListComponent() {
  return (
    <div>
      <h1>CSS List Component</h1>
      {/* we have 3 lists 1.Order List 2.Unordered list and 3.Description list */}
      <ol type="A">
        <li>Tea</li>
        <li>
          Cofee
          <ol type="a">
            <li>Black Cofee</li>
            <li>Green Cofee</li>
          </ol>
        </li>
        <li>Milk</li>
      </ol>
      <ul>
        <li>Tea</li>
        <li>Cofee</li>
        <li>Milk</li>
      </ul>
      <dl>
        <dt>Mobile</dt>
        <dd>Mobile is powerful device now days</dd>
        <dt>TV</dt>
        <dd>Peoples are not using TV now days</dd>
      </dl>
    </div>
  )
}
export default ListComponent
