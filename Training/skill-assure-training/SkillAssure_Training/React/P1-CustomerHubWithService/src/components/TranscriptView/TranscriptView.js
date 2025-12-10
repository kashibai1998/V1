import React from 'react'
import { Card } from 'semantic-ui-react'

class TranscriptView extends React.Component {
    render() {
        let transcriptData = this.props.transcriptData
        console.log(transcriptData)
        return (
            <Card fluid style={{boxShadow:"none"}}>
                {
                    transcriptData[0].map((item) => {
                        return (
                            <Card.Content>
                                <p>User: {item.user}</p>
                                <p>Agent: {item.agent}</p>
                            </Card.Content>
                        )
                    })
                }
            </Card>
        )
    }
}
export default TranscriptView