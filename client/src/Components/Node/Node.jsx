import React from "react";
import ReactFlow from "react-flow-renderer";

const initialNodes = [
    //Parent Node
    {
        id: "horizontal-1",
        sourcePosition: "right",
        type: "input",
        data: { label: "1" },
        position: { x: 0, y: 80 },
    },
    //Child Node
    {
        id: "horizontal-2",
        sourcePosition: "right",
        targetPosition: "left",
        data: { label: "2" },
        position: { x: 250, y: -30 },
    },
    {
        id: "horizontal-3",
        sourcePosition: "right",
        targetPosition: "left",
        data: { label: "3" },
        position: { x: 250, y: 190 },
    },
    //Grand Child Node
    {
        id: "horizontal-4",
        targetPosition: "left",
        data: { label: "4" },
        position: { x: 500, y: -100 },
    },
    {
        id: "horizontal-5",
        targetPosition: "left",
        data: { label: "5" },
        position: { x: 500, y: -30 },
    },
    {
        id: "horizontal-6",
        targetPosition: "left",
        data: { label: "6" },
        position: { x: 500, y: 40 },
    },
    {
        id: "horizontal-7",
        targetPosition: "left",
        data: { label: "7" },
        position: { x: 500, y: 120 },
    },
    {
        id: "horizontal-8",
        targetPosition: "left",
        data: { label: "8" },
        position: { x: 500, y: 190 },
    },
    {
        id: "horizontal-9",
        targetPosition: "left",
        data: { label: "9" },
        position: { x: 500, y: 260 },
    },
];

const initialEdges = [
    {
        id: "horizontal-e1-2",
        source: "horizontal-1",
        target: "horizontal-2",
        animated: true,
    },
    {
        id: "horizontal-e1-3",
        source: "horizontal-1",
        target: "horizontal-3",
        animated: true,
    },
    {
        id: "horizontal-e2-4",
        source: "horizontal-2",
        target: "horizontal-4",
        animated: true,
    },
    {
        id: "horizontal-e2-5",
        source: "horizontal-2",
        target: "horizontal-5",
        animated: true,
    },
    {
        id: "horizontal-e2-6",
        source: "horizontal-2",
        target: "horizontal-6",
        animated: true,
    },
    {
        id: "horizontal-e3-7",
        source: "horizontal-3",
        target: "horizontal-7",
        animated: true,
    },
    {
        id: "horizontal-e3-8",
        source: "horizontal-3",
        target: "horizontal-8",
        animated: true,
    },
    {
        id: "horizontal-e3-9",
        source: "horizontal-3",
        target: "horizontal-9",
        animated: true,
    },
];

const HorizontalFlow = () => {
    return (
        <div style={{ height: 800 }}>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                fitView
            ></ReactFlow>
        </div>
    );
};

export default HorizontalFlow;
