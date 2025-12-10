import React, { useState, useContext, useEffect, useLayoutEffect, PureComponent } from 'react'
import { Grid, Header, Segment, Dropdown } from 'semantic-ui-react'
import WordCloud from '../../widgetComponents/UnifiedExperienceCenter/WordCloud/WordCloud'
import LineChartComponent from '../../widgetComponents/UnifiedExperienceCenter/CallMonitor/LineChartComponent'
import FactorsAffecting from '../../widgetComponents/UnifiedExperienceCenter/FactorsAffecting/FactorsAffecting'
import FilterTable from '../../widgetComponents/UnifiedExperienceCenter/FilterTable/FilterTable'
import BarGraph from '../../widgetComponents/UnifiedExperienceCenter/BarGraph/BarGraph'
import HeaderComp from '../../widgetComponents/UnifiedExperienceCenter/HeaderComp/HeaderComp'
import factorAffecting from '../../mock/ArpuDashboard/FactorAffectingArpu.json'
import userRelated from '../../widgetComponents/UnifiedExperienceCenter/WordCloud/word';
import callRelated from '../../widgetComponents/UnifiedExperienceCenter/WordCloud/word2';
import UnifiedFilter from '../../widgetComponents/UnifiedExperienceCenter/ModalFilter/UnifiedFilter';
import { DataContext } from '../../widgetComponents/UnifiedExperienceCenter/FilterTable/FilterTable';

function Unified() {

  const options = [
    { key: 1, text: 'ALL', value: "ALL" },
    { key: 2, text: 'ONLINE', value: "ONLINE" },
    { key: 3, text: 'MOBILE', value: "MOBILE" },
    { key: 4, text: 'CHATBOT', value: "CHATBOT" },
    { key: 5, text: 'IVR', value: "IVR" },
    { key: 6, text: 'STORE', value: "STORE" },
    { key: 7, text: 'CALL CENTER', value: "CALL CENTER" },


  ]

  const filldata = useContext(DataContext);

  // state = {
  //   factorData: factorAffecting,
  //   arpuFactorData: ["Upgrade your data package to 15GB at just £ 14 per month", "Connect to wifi at home to conserve mobile data", "Subscribe yearly data plan with £ 699 and save £ 6 per month ", "Add-on data pack with just £ 14 with unlimited text",

  //     "Roaming pack recommendation - 25GB per month"],

  //   value: 'ALL',
  //   words: userRelated,
  //   dataList: useContext(DataContext),
  // }
  const [factorData, setFactorData] = useState(factorAffecting);
  const [arpuFactorData, setArpuFactorData] = useState(["Upgrade your data package to 15GB at just £ 14 per month", "Connect to wifi at home to conserve mobile data", "Subscribe yearly data plan with £ 699 and save £ 6 per month ", "Add-on data pack with just £ 14 with unlimited text", "Roaming pack recommendation - 25GB per month"]);
  const [value, setValue] = useState('ALL');
  const [words, setWords] = useState(userRelated);
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState(filldata);
  const [id, setId] = useState(1);
  const [wordId, setWordId] = useState(1);
  const wordSelection = (value) => {
    if (value == 'User related') {
      // this.setState({
      //   words: userRelated
      // })
      setWords(userRelated);
    }
    else {
      // this.setState({
      //   words: callRelated
      // })
      setWords(callRelated);
    }
  }
  const dataList = (data) => {
    setTableData(data);
    console.log(tableData);
  }
  // useEffect(()=> {
  //   setFilterData(filldata);
  //   console.log("abcd")
  // });
  const dataCallBack = (data) => {
    setFilterData(data);
    console.log(filterData);
  }

  const onChangeDropdown = (e, value) => {
    setValue(value.value);
    setId(value.options.find(i => i.value === value.value).key);
  }
  console.log(id)
  return (
    <div className="home-page">

      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column textAlign={'center'}>
            <h1 >Unified Expirence Centre</h1>
          </Grid.Column>

        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column textAlign={'left'}>
            <h2 >Top Reasons for Connect</h2>
          </Grid.Column>

        </Grid.Row>

        <Grid.Row>
          <Grid.Column stretched>
            <HeaderComp />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <LineChartComponent />
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              <FactorsAffecting arpuFactorData={arpuFactorData} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column textAlign={'right'}>
            <Dropdown selection
              placeholder='Select Channel'
              options={options}
              value={value}
              onChange={onChangeDropdown}

            />

          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
            <WordCloud wordSelection={wordSelection} 
              id ={id}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <BarGraph id={id} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <Grid.Column textAlign={'right'}>
            <UnifiedFilter
              tableData={tableData}
              datacallback={dataCallBack}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column stretched>
            <FilterTable
              sendDataList={dataList}
              filterdata={filterData}
            />
          </Grid.Column>
        </Grid.Row>

      </Grid>
    </div>
  )

}

export default Unified;
