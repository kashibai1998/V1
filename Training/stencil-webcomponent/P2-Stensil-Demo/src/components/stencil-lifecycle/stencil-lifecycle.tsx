import { Component, Prop, State, h, Watch } from '@stencil/core';

@Component({
  tag: 'stencil-lifecycle',
  styleUrl: 'stencil-lifecycle.css',
  shadow: true,
})
export class StencilLifecycle {
  
  @Prop({mutable:true}) tutorialName: string;
  @State() name: string = 'lucky';
  @State() isReact: boolean = false;
  @Watch('name')
  aa(newVal:boolean, oldVal:boolean) {
    console.log('The new and old value are:' +newVal + 'Old value' +oldVal);
  }  

  connectedCallback() {
    console.log('connectedCallback');
  }
  componentWillLoad() {
        console.log('componentWillLoad');
  }
  componentWillRender() {
        console.log('componentWillRender');
  }
  change() {
    this.name = 'appu';
    console.log('updated state variable');
  }
  disconnectedCallback() {
    console.log('disconnectedCallback');
  }
  componentDidLoad() {
        console.log('componentDidLoad');
  }
  componentDidRender() {
        console.log('componentDidRender');
  }
  render() {
    
    return (
      <div class="main-content-center">
        <div class="buttons-center">
          <h1>Hello Stencil Life Cycle Method</h1>
        </div>
        <button onClick={this.change.bind(this)}>Hello</button>
      </div>
    )
      
  }
}
