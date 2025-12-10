import React from 'react';
import { Grid } from 'semantic-ui-react';
import factData from '../../mock/CustomerKPIDashboard/FactorAffecting.json';
import sentimentScore from '../../mock/CustomerKPIDashboard/SentimentScore.json';
import staticData from '../../mock/CustomerKPIDashboard/Statistic.json';
import SocialSentimentData from '../../mock/SocialSentiment/SocialSentiment.json';
import LandingPage from '../../widgetComponents/Sentiment/GoogleMapComponent/LandingPage';
import SentimentModalWindowFilter from '../../widgetComponents/Sentiment/SentimentModalWindowFilter/SentimentModalWindowFilter';
import SentimentScore from '../../widgetComponents/Sentiment/SentimentScore/SentimentScore';
import SocialSentiment from '../../widgetComponents/Sentiment/SocialSentiment/SocialSentiment';
class Sentiment extends React.Component {

    // xData = ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'];
    state = {
        SocialSentimentData: SocialSentimentData[0].socialData[0].data,
        socioSentiment: SocialSentimentData,
        sentimentScore: sentimentScore,
        staticData: staticData[0].static[0].data,
        factorData: factData[0].factorData[0].data,
        Statistic: staticData,
        FactorAffecting: factData,
        filterData: null,
        customercareLabel: "Sentiment Score[customer care]",
        socialcareLabel: "[Sentiment Score[social care]",
        NetworkLabel: "[Sentiment Score[Network]",
        allLabel: "[Sentiment Score[all]",
        region: "United Kingdom"

    }


    getFormFilterData = (data) => {
        this.setState({
            filterData: data
        })
        //condition for FACTOR AFFECTING SENTIMENT COMPONENT
        let factdata = this.state.FactorAffecting
        for (let i = 0; i < factdata.length; i++) {
            if (factdata[i].country === this.state.region) {
                for (let j = 0; j < factdata[i].factorData.length; j++) {
                    let fac_data = factdata[i].factorData[j]
                    if (fac_data.age === data.ageBelow18 && fac_data.sex === data.male) {
                        this.setState({
                            factorData: fac_data.data
                        })
                    }
                    if (fac_data.age === data.ageBelow18 && fac_data.sex === data.female) {
                        this.setState({
                            factorData: fac_data.data
                        })
                    }
                    if (fac_data.age === data.age18To40 && fac_data.sex === data.male) {
                        this.setState({
                            factorData: fac_data.data
                        })
                    }
                    if (fac_data.age === data.age18To40 && fac_data.sex === data.female) {
                        this.setState({
                            factorData: fac_data.data
                        })
                    }
                    if (fac_data.age === data.ageAbove40 && fac_data.sex === data.male) {
                        this.setState({
                            factorData: fac_data.data
                        })
                    }
                    if (fac_data.age === data.ageAbove40 && fac_data.sex === data.female) {
                        this.setState({
                            factorData: fac_data.data
                        })
                    }
                }
            }
        }
       
    }
    getRegionData = (data) => {
        this.setState({ region: data })
        //condition for sentiment score component
        let sentimentScore = this.state.sentimentScore
        for (let i = 0; i < sentimentScore.length; i++) {
            let array = []
            if (sentimentScore[i].country == data) {
                console.log(sentimentScore[i], "sentimentScore")
                array.push(sentimentScore[i])
                this.setState({
                    sentimentScore: array
                })
            }
        }
        //condition for social sentiment  component
        let socioSentiment = this.state.socioSentiment;
        for (let j = 0; j < socioSentiment.length; j++) {
            if (socioSentiment[j].country === data) {
                console.log(socioSentiment[j], "socioSentiment")
                this.setState({
                    SocialSentimentData: socioSentiment[j].socialData[0].data
                })
            }
        }
        //condition for STATIC  component
        let staticData1 = this.state.Statistic
        let array = []
        for (let k = 0; k < staticData1.length; k++) {
            if (staticData1[k].country === data) {
                array.push(staticData1[k].static[0].data)
                this.setState({
                    staticData: array[0]
                })
            }
        }
        //condition for FACTOR AFFETING sentiment  component
        let factData = this.state.FactorAffecting
        for (let i = 0; i < factData.length; i++) {
            if (factData[i].country === data) {
                console.log(factData[i], "factorData")
                this.setState({
                    factorData: factData[i].factorData[0].data
                })
            }
        }
    }


    render() {
        const { filterData, region, sentimentScore, factorData } = this.state
        console.log(sentimentScore,"sentimentScore")
        return (
            <div>
                <Grid>
                    <Grid.Row stretched>
                        <Grid.Column >
                           
                            <Grid stackable>
                                <Grid.Row stretched style={{ paddingLeft: '20px' }}>
                                    <Grid.Column width={12} textAlign="center">
                                        <h2><b>Customer KPIs Dashboard</b></h2>
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <SentimentModalWindowFilter getFormFilterData={this.getFormFilterData} />
                                    </Grid.Column>
                                   
                                </Grid.Row>
                            </Grid>
                            <LandingPage factorData={factorData} staticData={this.state.staticData} filterData={filterData} getRegionData={this.getRegionData} />
                           
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row stretched>
                        <Grid.Column width={8}>
                            <SentimentScore
                                customercareLabel={this.state.customercareLabel}
                                socialcareLabel={this.state.socialcareLabel}
                                NetworkLabel={this.state.NetworkLabel}
                                allLabel={this.state.allLabel}
                                loggedIn={sentimentScore[0].sentimentData[0].data.loggedIn}
                                available={sentimentScore[0].sentimentData[0].data.available}
                                availableForExisting={sentimentScore[0].sentimentData[0].data.availableForExisting}
                                unavailable={sentimentScore[0].sentimentData[0].data.unavailable}
                                xData={sentimentScore[0].sentimentData[0].data.xData}
                            />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <SocialSentiment SocialSentimentData={this.state.SocialSentimentData} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}



export default Sentiment;