import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import { Segment, Grid, Dropdown, Card } from 'semantic-ui-react';
import { population as data } from '../../../mock/UnifiedPage/BarMock';

const Root = props => (
  <Legend.Root
    {...props}
    style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      margin: 'auto',
      // flexDirection: 'row',
      // display: 'flex',
      // margin: 'auto',
    }}
  />
);

const options = [
  { key: 1, text: 'User related', value: "User related" },
  { key: 2, text: 'Call related', value: "Call related" }

]

export default class BarGraph extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
      value: 'User related',
      id: this.props.id
    };
  }

  render() {
    const { data: chartData } = this.state;
    const { id } = this.state;
    this.setState({ id: this.props.id });
    console.log(this.props)
    console.log(chartData[id - 1].barData)
    return (
      <Segment >
        <Chart
          data={chartData[id - 1].barData}
          height={354}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Male: 0-14"
            valueField="maleyoung"
            argumentField="state"
          />
          <BarSeries
            name="Male: 15-64"
            valueField="malemiddle"
            argumentField="state"
          />
          <BarSeries
            name="Male: 65 and older"
            valueField="maleolder"
            argumentField="state"
          />
          <BarSeries
            name="Female: 0-14"
            valueField="femaleyoung"
            argumentField="state"
          />
          <BarSeries
            name="Female: 15-64"
            valueField="femalemiddle"
            argumentField="state"
          />
          <BarSeries
            name="Female: 65 and older"
            valueField="femaleolder"
            argumentField="state"
          />
          <BarSeries
            name="young: 0-5"
            valueField="young"
            argumentField="state"
          />
          <BarSeries
            name="middle: 5-25"
            valueField="middle"
            argumentField="state"
          />
          <BarSeries
            name="older: 25-55"
            valueField="older"
            argumentField="state"
          />


          <Animation />
          <Legend position="bottom" rootComponent={Root} />
          <Title text="Demographic View of Type of call" />
          <Stack
            stacks={[
              { series: ['Male: 0-14', 'Male: 15-64', 'Male: 65 and older'] },
              { series: ['Female: 0-14', 'Female: 15-64', 'Female: 65 and older'] },
              { series: ['young: 0-5', 'middle: 5-25', 'older: 25-55'] },
            ]}
          />
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign={'right'} style={{ marginRight: "2%" }}>

              </Grid.Column>
            </Grid.Row>
          </Grid>

        </Chart>

      </Segment>
    );
  }
}






