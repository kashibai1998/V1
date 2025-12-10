import React from 'react'

class Homepage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: 'lucky',
      }
  }
  render() {
    const div1 = <div style={{padding:'20px'}}>Hiiiiii</div>
    const para1 = <p>Hiii, This is a paragraph</p>
    return div1
  }
}
export default Homepage
