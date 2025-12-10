import React, { Component } from 'react';
import './Footer.scss'
import { Grid, Image, Divider, Responsive } from 'semantic-ui-react';
import twitter from '../../assets/footer/twitter.svg';
import linkedIn from '../../assets/footer/linkedin.svg';
import facebook from '../../assets/footer/facebook.svg';
import youtube from '../../assets/footer/youtube.svg'
import virtusaLogo from '../../assets/footer/icomms-virtusa-gray.svg';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Grid stackable padded>
                    <Grid.Row style={{ paddingBottom: '0px' }}>
                        <Responsive as={Grid.Column} width={2} minWidth={768} textAlign={'left'}>
                            <p style={{ fontSize: '22px' }}>Follow Us:</p>
                        </Responsive>
                        <Responsive as={Grid.Column} width={2} maxWidth={768} textAlign={'center'}>
                            <p style={{ fontSize: '22px' }}>Follow Us:</p>
                        </Responsive>
                        <Responsive as={Grid.Column} width={3} minWidth={768} textAlign={'left'}>
                            <Image.Group size='mini'>
                                <a target="_blank" href="https://twitter.com/VirtusaCorp"><Image src={twitter} /></a>
                                <a target="_blank" href="https://www.linkedin.com/company/virtusa/"><Image src={linkedIn} /></a>
                                <a target="_blank" href="https://www.facebook.com/VirtusaCorp"><Image src={facebook} /></a>
                                <a target="_blank" href="https://www.youtube.com/user/VirtusaCorporation"><Image src={youtube} /></a>
                            </Image.Group>
                        </Responsive>
                        <Responsive as={Grid.Column} width={3} maxWidth={768} textAlign={'center'}>
                            <Image.Group size='mini'>
                                <a target="_blank" href="https://twitter.com/VirtusaCorp"><Image src={twitter} /></a>
                                <a target="_blank" href="https://www.linkedin.com/company/virtusa/"><Image src={linkedIn} /></a>
                                <a target="_blank" href="https://www.facebook.com/VirtusaCorp"><Image src={facebook} /></a>
                                <a target="_blank" href="https://www.youtube.com/user/VirtusaCorporation"><Image src={youtube} /></a>
                            </Image.Group>
                        </Responsive>
                        <Grid.Column width={9} />
                        <Responsive as={Grid.Column} width={2} minWidth={768} textAlign={'right'}>
                            <Image src={virtusaLogo} />
                        </Responsive>
                        <Responsive as={Grid.Column} width={2} maxWidth={768}>
                            <Image src={virtusaLogo} centered />
                        </Responsive>
                    </Grid.Row>

                    <Divider />

                    <Grid.Row style={{ paddingTop: '0px' }} columns={2}>
                        <Responsive as={Grid.Column} minWidth={768} textAlign={'left'}>
                        <p >Copyright ©{new Date().getFullYear()} Virtusa Corp. All rights reserved</p>
                        </Responsive>
                        <Responsive as={Grid.Column} maxWidth={768} textAlign={'center'}>
                        <p >Copyright ©{new Date().getFullYear()} Virtusa Corp. All rights reserved</p>
                        </Responsive>
                        <Responsive as={Grid.Column} minWidth={768} textAlign={'right'}>
                            <p style={{paddingRight:"4%"}}><a href="https://www.virtusa.com/privacy-statement/">Privacy Policy </a></p>
                        </Responsive>
                        <Responsive as={Grid.Column} maxWidth={768} textAlign={'center'}>
                            <p><a href="#">Privacy Policy </a>| <a href="#">Terms of Use</a> | <a href="#">Legal</a></p>
                        </Responsive>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}
export default Footer;


