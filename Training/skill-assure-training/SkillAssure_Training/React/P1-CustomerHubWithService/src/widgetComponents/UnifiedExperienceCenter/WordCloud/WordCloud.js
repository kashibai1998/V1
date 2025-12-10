import React from 'react'
import { Segment, Grid, Dropdown, Card } from 'semantic-ui-react'
import words from './word2';
import ReactWordcloud from "react-wordcloud";

const options = [
    { key: 1, text: 'User related', value: "User related" },
    { key: 2, text: 'Call related', value: "Call related" }

]
class WordCloud extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 'User related',
        }
    }

    handleChange = (e, { value }) => {

        console.log(value)
        this.props.wordSelection(value);
        this.setState({
            value: value
        })

    }



    render() {
        let id = this.props.id;
        return (
            <div>
                <Segment>
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <h4>Word Cloud Tag</h4>
                            </Grid.Column>

                        </Grid.Row>
                        <Grid.Row>
                            {/* <ReactWordcloud words={words} /> */}
                            <ReactWordcloud words={words[id - 1].wordCloudData} />
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        )
    }
}
export default WordCloud