import { Component, Prop, State, h, Watch } from '@stencil/core';

@Component({
  tag: 'my-card',
  styleUrl: 'my-card.css',
  scoped: true,
})
export class MyCard {
  
  @Prop({mutable:true}) tutorialName: string;
  @State() name: string = 'lucky';
  @State() isReact: boolean = false;
  @State() reactData: object = {};
  @State() stencilData: object = {};
  
  @Watch('name')
  aa(newVal:boolean, oldVal:boolean) {
    console.log('The new and old value are:' +newVal + 'Old value' +oldVal);
  }  

  changeValueReact = () => {
    this.tutorialName = 'Started new React Course';
    this.name = 'lucky pujari';
    this.isReact = true;
  }

  changeValueStencil = () => {
    this.tutorialName = 'Started new Stencil Course';
    this.name = 'appu pujari'
    this.isReact = false
  }

  onInputChange(event:Event) {
    this.tutorialName = (event.target as HTMLInputElement).value;
  }

  async reactAPIData() {
   const res = await fetch('https://api.nationalize.io/?name=nathaniel');
   const finalRes = await res.json();
    this.reactData = finalRes;
  }

  async stencilAPIData() {
    const res = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');
    const finalRes = await res.json();
    this.stencilData = finalRes;
  }

  getReactData(data) {
    console.log('hello react', data);
    if (data === 'react') {
      this.reactAPIData();
    }
    else {
      this.stencilAPIData();
    }
  }

  // getStencilData(data) {
  //   console.log('hello stencil', data);
  // }

  render() {
    console.log('react API data', this.reactData['country']);
    console.log('stencil API data', this.stencilData);

    // let res = this.reactData;
;
    // res.map((item) => {
      
    // })
      

    let reactContent = (
      <div class="content-data">
        Hello, from React,<br/>
        Live User<br/><br/>
        <button onClick={this.getReactData.bind(this, 'react')}>Get React Users</button><br />
        <br /><br />
        <table class="table-style">
        {
         (this.reactData['country']!=undefined && this.reactData['country'].length>0) && this.reactData['country'].map((item) => {
            return (
              <tr>
              <td>{item.country_id}</td>
              <td>{item.probability}</td>
            </tr>
            )
          })
        }
     </table>
    </div>
    );

    let stencilContent = (
      <div class="content-data">
        Hello, from Stencil<br/>
        Live User<br/><br/>
        <button onClick={this.getReactData.bind(this,'stencil')}>Get Stencil Users</button>
      </div>
    );

    let checkReactOrNot = '';
    if (this.isReact) {
      checkReactOrNot = reactContent;
    }
    else {
       checkReactOrNot = stencilContent;
    }

    let mainConetnt = (
      <div class="main-content-center">
      <div class="buttons-center">
        <button onClick={this.changeValueStencil.bind(this)}>Stencil</button>
        <button onClick={this.changeValueReact.bind(this)}>React</button>
        </div>
        <h1>Props value is : {this.tutorialName}</h1>
        <h2>My name is : { this.name}</h2>
        <br/><br/><br/>
        {
          checkReactOrNot
        }
        <div>
          <h1>2 way Data Binding</h1>
          <input type='text' onInput={this.onInputChange.bind(this)} value={this.tutorialName}/>
        </div>
      </div>  
    );

    return mainConetnt;
  }
}
