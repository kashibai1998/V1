import * as go from 'gojs';
import { Diagram, ToolManager } from 'gojs';
import React from 'react';
import { GojsDiagram } from 'react-gojs';
import model from '../../../mock/MicroInteractionTab/model.json';
import SelectionDetails from '../../SelectionDetails/SelectionDetails/SelectionDetails';
import './MicroInteractionDiagram.css';
class MicroInteractionDiagram extends React.Component {
    nodeId = 0;
    constructor(props) {
        super(props);
        this.createDiagram = this.createDiagram.bind(this);
        this.nodeSelectionHandler = this.nodeSelectionHandler.bind(this);

        this.initModelHandler = this.initModelHandler.bind(this);
        this.state = {
            selectedNodeKeys: [],
            model: model,
            data: [],
            nullData: [{
                nodeDataArray: [],
                linkDataArray: []
            }],
            run: false
        };
    }
    initModelHandler() {
        this.setState({
            ...this.state,
            model: model
        });
    }

    createDiagram(diagramId) {
        const $ = go.GraphObject.make;

        const myDiagram = $(go.Diagram, diagramId, {
            initialContentAlignment: go.Spot.LeftCenter,
            layout: $(go.TreeLayout, {
                angle: 0,
                arrangement: go.TreeLayout.ArrangementHorizontal,
                treeStyle: go.TreeLayout.StyleLayered
            }),
            isReadOnly: false,
            allowHorizontalScroll: true,
            allowVerticalScroll: true,
            allowZoom: true,
            allowSelect: true,
            autoScale: Diagram.Uniform,
            contentAlignment: go.Spot.LeftCenter,
            TextEdited: this.onTextEdited
        });


        myDiagram.toolManager.panningTool.isEnabled = false;
        myDiagram.toolManager.mouseWheelBehavior = ToolManager.WheelScroll;

        function makeImagePath(img) {
            return require('../../../assets/Images/' + img);
        }

        myDiagram.nodeTemplate =
            $(go.Node, 'Auto',
                {
                    selectionChanged: node => this.nodeSelectionHandler(node.key, node.isSelected)
                },
                $(go.TextBlock, { margin: new go.Margin(0, 0, 0, 0), maxSize: new go.Size(100, 100), editable: false, font: "12px Georgia, Serif" },
                    new go.Binding('text', 'head')),
                $(go.Shape, "Circle",
                    { fill: "white", strokeWidth: 0, width: 60, height: 60 },
                    new go.Binding("fill", "color")),
                $(go.Picture,
                    { width: 55, height: 55 },
                    new go.Binding("source", "img", makeImagePath)),
                $(go.TextBlock, { margin: new go.Margin(80, 0, 0, 10), maxSize: new go.Size(105, 100), editable: false, font: "12px Georgia, Serif" },
                    new go.Binding('text', 'foot')),

            );
        myDiagram.linkTemplate =
            $(go.Link,
                {
                    curve: go.Link.Bezier,
                    toEndSegmentLength: 40, fromEndSegmentLength: 40
                },
                $(go.Shape,

                    { strokeWidth: 3, stroke: "#AEB0B2" }
                )
            );
        return myDiagram;
    }
    nodeSelectionHandler(nodeKey, isSelected) {
        if (isSelected) {
            this.setState({
                ...this.state,
                selectedNodeKeys: [...this.state.selectedNodeKeys, nodeKey]
            });
        } else {
            const nodeIndexToRemove = this.state.selectedNodeKeys.findIndex(key => key === nodeKey);
            console.log("un select")
            if (nodeIndexToRemove === -1) {
                this.setState({
                    ...this.state,
                    selectedNodeKeys: []
                });
                return;
            }
            this.setState({
                ...this.state,
                selectedNodeKeys: [
                    ...this.state.selectedNodeKeys.slice(0, nodeIndexToRemove),
                    ...this.state.selectedNodeKeys.slice(nodeIndexToRemove + 1)
                ]
            });
        }
    }

    convertDate(time) {
        function pad(s) { return (s < 10) ? '0' + s : s; }
        var d = new Date(time)
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-')
    }
    componentDidUpdate() {
        if (this.state.data != this.props.data) {
            if (this.props.data.length != 0) {
                this.setState({
                    data: this.props.data,
                    run:true
                })
            }

        }
        if (this.state.data != this.props.data && this.props.data.length === 0 && this.state.run===true) {
            this.setState({ data: this.state.nullData, run: false })
        }
    }
    render() {
        let data = this.state.data
        console.log(data[0], "diagramdata")
        return [
            <SelectionDetails key="selectionDetails" userId={this.props.userId} date={this.props.date} selectedNodes={this.state.selectedNodeKeys} 
               jsonPost = {this.props.jsonPost}
            />,
            <GojsDiagram
                key="gojsDiagram"
                diagramId= "myDiagramDiv"              
                model={this.props.data[0]}
                createDiagram={this.createDiagram}
                className="myDiagram"

            />
        ];


    }
}

export default MicroInteractionDiagram;
