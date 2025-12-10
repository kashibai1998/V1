import React, { PureComponent } from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Grid, Dropdown } from 'semantic-ui-react'


const options = [
    { key: 1, text: 'past month', value: 1 },
    { key: 3, text: 'past year', value: 3 },
]
class DropDownComponent extends PureComponent {
    


    render() {
        return (
            <div>
                 <Dropdown options={options} size={'mini'} selection defaultValue={options[0].value} style={{ borderRadius: '30px', minWidth: '130px',marginTop :'10px' }} />
            </div>
        )
    }
}
export default DropDownComponent


