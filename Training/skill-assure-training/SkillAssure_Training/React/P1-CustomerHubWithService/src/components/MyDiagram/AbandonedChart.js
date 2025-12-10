import React from 'react';
import * as go from 'gojs';
import { Diagram, ToolManager } from 'gojs';
import { GojsDiagram } from 'react-gojs';
import data from '../../mock/Channel.json';
import './AbandonedChart.scss'
class AbandonedChart extends React.Component {
    constructor(props) {
        super(props);
        this.createDiagram = this.createDiagram.bind(this);
        this.nodeSelectionHandler = this.nodeSelectionHandler.bind(this);
        this.state = {
            chartData: {
                "nodeDataArray": [
                    { key: 0, head: "", foot: "Online 5000", img: 'online.png', color: "white" },
                    { key: 1, head: "", foot: "1000 Abandoned", img: "abandon.png", color: "white" },
                    { key: 2, head: "", foot: "4000 Ordered", img: 'ordered.png', color: "white" },
                    { key: 3, head: "", foot: "2000 Online", img: "online.png", color: "white" },
                    { key: 4, head: "", foot: "500 Contact Center", img: "contactcenter.png", color: "white" },
                    { key: 5, head: "", foot: "1000 Retail Store", img: "retailstore.png", color: "white" },
                    { key: 6, head: "", foot: "500 Mobile", img: "mobile.png", color: "white" }
                ],
                "linkDataArray": [
                    { from: 0, to: 1 },
                    { from: 0, to: 2 },
                    { from: 2, to: 3 },
                    { from: 2, to: 4 },
                    { from: 2, to: 5 },
                    { from: 2, to: 6 },
                ]
            }
        };
    }
    createDiagram(diagramId) {
        const $ = go.GraphObject.make;

        const abandonedDiagram = $(go.Diagram, diagramId, {
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


        abandonedDiagram.toolManager.panningTool.isEnabled = false;
        abandonedDiagram.toolManager.mouseWheelBehavior = ToolManager.WheelScroll;

        function makeImagePath(img) {
            return require("../../../src/assets/Images/" + img);
        }

        abandonedDiagram.nodeTemplate =
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
        abandonedDiagram.linkTemplate =
            $(go.Link,
                {
                    curve: go.Link.Bezier,
                    toEndSegmentLength: 40, fromEndSegmentLength: 40
                },
                $(go.Shape,

                    { strokeWidth: 3, stroke: "#AEB0B2" }
                )
            );
        return abandonedDiagram;
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
    render() {
        console.log(data[0].chartData)
        return (
            <div>
                <GojsDiagram
                    key="gojsDiagram"
                    diagramId="myDiagramDivnew"
                    model={this.props.data}
                    createDiagram={this.createDiagram}
                    className="abandonedDiagram"
                />
            </div>
        )
    }
}
export default AbandonedChart