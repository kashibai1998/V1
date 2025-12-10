import React, { Component } from 'react';
import { Card, Icon, Button, Image, Grid } from 'semantic-ui-react'
class ProductDetails extends Component {

 



  render() {
    console.log(this.props.data);

    return (
      <div>
                    <Card fluid={1} className="productDetails">
                      <Card.Content>
                        <Grid>
                          <Grid.Row>
                            <Grid.Column width={8}>
                              <Card.Content>
                                <Card.Header>{this.props.data.name} {this.props.data.id}</Card.Header>
                                <Card.Meta>{this.props.data.manufacturer}</Card.Meta>
                                <Card.Description>
                                  {this.props.data.longDescription}
                                </Card.Description>
                                {this.props.data.retailPrice.amount}
                                {this.props.data.retailPrice.currency}
                                <Card.Description>
                                  {this.props.data.activeStartDate}
                                </Card.Description>
                              </Card.Content>
                            </Grid.Column>
                            <Grid.Column width={8}>
                              <Image
                                floated='right'
                                size='medium'
                                src={this.props.data.primaryMedia.url}
                              />
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Card.Content>
                    </Card>
              
            </div>
          
      

      
    );
  }

}

export default ProductDetails