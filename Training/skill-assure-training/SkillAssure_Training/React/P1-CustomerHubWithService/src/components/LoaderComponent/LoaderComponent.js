import React, { PureComponent } from 'react'
import { Grid, Image, Icon, Segment, Checkbox ,Loader} from 'semantic-ui-react'

class LoaderComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        let text=this.props.text
        return (
            <div>
                 <Loader inverted>lll</Loader>
            </div>
        )
    }
}

export default LoaderComponent