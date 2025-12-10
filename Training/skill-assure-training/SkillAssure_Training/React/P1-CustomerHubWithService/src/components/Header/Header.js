import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Dropdown, Icon, Image, Menu, Search, Segment } from 'semantic-ui-react';
import { getUserIdAction } from '../../actions/UserIdAction';
import customer from '../../assets/customer/campbell.jpg';
import vLogo from '../../assets/Images/icomms-virtusa.svg';
import userdata from '../../mock/userData.json';
import './Header.scss';

const initialState = { isLoading: false, results: [], value: '' }

class Header extends Component {
    state = {
        activeItem: 'home',
        customerId: '1',
        ids: {
            customerId: 100001,
            accountId: 9101010103
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentWillMount() {
        this.props.getUserIdAction(this.state.ids);
    }


    handleResultSelect = (e, { result }) => {
        this.setState({ value: result.title })
        let ids = {
            customerId: result.customerId,
            accountId:result.accountId
        }
        this.props.getUserIdAction(ids);
    }

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(userdata, isMatch),
            })
        }, 300)
    }

    render() {
        console.log(this.state.value)
        const { activeItem } = this.state
        const { isLoading, value, results } = this.state
        return (
            <div className="header-comp">
                <Segment inverted className="header-segment">
                    <Menu size='huge' inverted secondary className="menu-item">
                        <Link to={{ pathname: '/admin/businessReport', state: { page: 'businessReport' } }}>
                            <Image src={vLogo} size='big' className="logo" />
                        </Link>


                        <Menu.Item position='right' >
                            <Search
                                aligned="left"
                                style={{ borderRadius: '0px' }}
                                input={{ icon: 'search', iconPosition: 'left', placeholder: 'Search for Customer' }}
                                loading={isLoading}
                                onResultSelect={this.handleResultSelect}
                                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                    leading: true,
                                })}
                                results={results}
                                value={value}
                            />
                        </Menu.Item>
                        <Menu.Menu position='right' className="alarm-icon">
                            <Menu.Item>
                                <Link to={{ pathname: '/admin/businessReport', state: { page: 'businessReport' } }}>
                                    Business Report
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={{ pathname: '/admin/dashboard' }}>
                                    Customer Insight
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Icon name='alarm' size='large' />
                            </Menu.Item>
                            {/* <Segment className="comment" >
                            <Menu.Item>
                                <Icon name='comment alternate outline' size='big' />
                            </Menu.Item>
                        </Segment> */}
                            <Menu.Item className="right-icons">
                                <Image src={customer} avatar />
                                <Dropdown item text={'Eliza Hart'} className="dropdown-items">
                                    <Dropdown.Menu className="drop-menu" style={{ borderRadius: '15px' }}>
                                        <Card style={{ width: '100%', borderRadius: '15px' }}>
                                            <Dropdown.Item icon='user' content='Profile' />
                                            <Dropdown.Item icon='certificate' content='My Recommendations' />
                                            <Dropdown.Item icon='power' content='Logout' style={{ color: 'red' }} />
                                            <Card.Content extra style={{ backgroundColor: '#F4F7FD' }}>
                                                Last login: 1 min before
                                        </Card.Content>
                                        </Card>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </div >
        )
    }
}


const mapStateToProps = (state) => {

};

function mapDispatchToProps(dispatch) {

    return {
        getUserIdAction: (ids) => { dispatch(getUserIdAction(ids)); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);



