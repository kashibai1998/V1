import React from 'react';
import { Header, Modal, Button } from 'semantic-ui-react';
import CardView from '../../components/CardView/CardView/CardView';
import TranscriptView from '../../components/TranscriptView/TranscriptView';
class ModalView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            showTranscript: false
        }
    }
    handelClick = () => {
        this.setState({
            showTranscript: !this.state.showTranscript
        })
    }
    render() {
        let data = this.props.data[0]
        console.log(data)
        let transcript= this.props.transcript
        // console.log(transcript)
        return (
            <Modal
                // closeIcon
                open={this.state.open}
                onClose={() => this.setState({ open: false })}
                onOpen={() => this.setState({ open: true })}
                size="mini"
            >
                <Modal.Content>
                    <CardView data={data} 
                    jsonPost = {this.props.jsonPost}/>
                </Modal.Content>
                <Modal.Actions>
                    {transcript.length!=0 && <Button positive onClick={() => this.handelClick()} >{this.state.showTranscript ? "Close" : "Open"} transcript</Button>}
                    <Button negative onClick={() => this.setState({ open: false })}>Close</Button>
                </Modal.Actions>
                    {this.state.showTranscript ? <TranscriptView transcriptData={transcript} /> : null}
            </Modal>

        )
    }

}

export default ModalView