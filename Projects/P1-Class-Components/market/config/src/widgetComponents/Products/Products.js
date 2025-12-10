import React, { Component } from 'react';
import { Card, Icon, Segment, CardContent } from 'semantic-ui-react';
import { connect } from 'react-redux';
import productsData from '../../actions/HomePageActions/ProductsAction';
import ProductDetails from '../../widgetComponents/ProductDetails/ProductDetails'
import { grey } from 'ansi-colors';
class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: [],
            toggle: false,
            productclicked: null,
        };
    
    }

    changeToggle(product) {
        console.log(product)
        this.setState({
            toggle: !this.state.toggle,
            productclicked: product
        })


    }
    componentWillMount() {

        const PRODUCTS_ACTION = productsData();
        this.props.dispatch(PRODUCTS_ACTION);

        fetch(`http://localhost:8082/api/v1/catalog/category?searchParameter=Home&productLimit=20&productOffset=1&subcategoryLimit=20&subcategoryOffset=1`)
        .then(res => res.json())
        .then((result) => {
       console.log(result)
          this.setState({
            category: result
          })
          

        }
        )

        console.log("yoooyooo")
    }

    componentWillReceiveProps(Props) {
          this.setState({ toggle: Props.toggle });
         }



    render() {
       
        console.log(this.state.category)

        if (typeof this.props.data === "undefined" || this.props.data.length === 0) {
            return (
               <div>
                   {/* {
                       this.category.product.map((product)=>{
                           return(
                               <div>
                                   {product.id
                                   }
                               </div>
                           )
                       })
                    
                   } */}
                   loading

               </div>
            )
        }
        return (
            <div>

                {
                    
                            < div >
                            <Card.Group itemsPerRow={4}>
                                {
                                    this.props.data.product.map((product) => {
                                        return (
                                            <Card onClick={() => this.changeToggle(product)}  >
                                                <CardContent>
                                                    <Card.Header>{product.name}</Card.Header>
                                                </CardContent>


                                                <Card.Content content={product.retailPrice.amount} />
                                            </Card>
                                        )
                                    })
                                }
                            </Card.Group>
                    </div>

                }

                {
                    this.state.toggle && 

                    <Segment basic={1} >
                        <ProductDetails  data={this.state.productclicked}/>
                    </Segment>

                }

            </div >

        )
    }

}

export default connect()(Products)