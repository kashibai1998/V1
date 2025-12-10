import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react'
class Filters extends Component{
  constructor(props) {
    super(props);
    console.log(props.data)
    this.state = {
      products: []
    };
  }

  

  handleChange = ( value) => {
    console.log(value)
    if(value!=null)
    {
      fetch(`http://localhost:8082/api/v1/catalog/category?searchParameter=${value}&productLimit=20&productOffset=1&subcategoryLimit=20&subcategoryOffset=1`)
      .then(res => res.json())
      .then((result) => {
     console.log(result)
        this.setState({
          products: result
        })
        this.props.handlerFromParant(this.state.products);
      }
      )
    }
    
    
      
    
}


    render(){
     
    
        return(
          <div>
            <Checkbox label='Home' value="Home" onClick={(e, data) => this.handleChange( data.value)}/>
            <Checkbox label='Hot Sauces'  value="Hot Sauces" onClick={(e, data) => this.handleChange( data.value)} />
            <Checkbox label='Merchandise' value="Merchandise" onClick={(e, data) => this.handleChange( data.value)} />
            <Checkbox label='Clearance'  value="Clearance" onClick={(e, data) => this.handleChange( data.value)}/>
            <Checkbox label='Mens' value="Mens" onClick={(e, data) => this.handleChange( data.value)} />
            <Checkbox label='Womens' value="Womens" onClick={(e, data) => this.handleChange( data.value)}/>
          </div>
        );
    }

}

export default Filters