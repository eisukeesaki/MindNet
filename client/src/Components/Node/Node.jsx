import React from "react";
import ReactFlow from "react-flow-renderer";
import TextUpdaterNode from "./TextUpdaterNode";

const initialNodes = [
    //Parent Node
    {
        id: "parent",
        sourcePosition: "right",
        type: "textUpdater",
        data: { label: "parent" },
        position: { x: 0, y: 50 },
    },
    //Child Node
    {
        id: "child-1",
        sourcePosition: "right",
        targetPosition: "left",
        type: "textUpdater",
        data: { label: "child-1" },
        position: { x: 250, y: 0 },
    },
    // {
    //     id: "child-2",
    //     sourcePosition: "right",
    //     targetPosition: "left",
    //     type: "textUpdater",
    //     data: { label: "child-2" },
    //     position: { x: 250, y: 50 },
    // },
    // {
    //     id: "child-3",
    //     sourcePosition: "right",
    //     targetPosition: "left",
    //     type: "textUpdater",
    //     data: { label: "child-3" },
    //     position: { x: 250, y: 100 },
    // },
];

const initialEdges = [
    {
        id: "parent-child1",
        source: "parent",
        target: "child-1",
        animated: true,
    },
    {
        id: "parent-child2",
        source: "parent",
        target: "child-2",
        animated: true,
    },
    {
        id: "parent-child3",
        source: "parent",
        target: "child-3",
        animated: true,
    },
    // {
    //     id: "horizontal-e2-4",
    //     source: "horizontal-2",
    //     target: "horizontal-4",
    //     animated: true,
    // },
    // {
    //     id: "horizontal-e2-5",
    //     source: "horizontal-2",
    //     target: "horizontal-5",
    //     animated: true,
    // },
    // {
    //     id: "horizontal-e2-6",
    //     source: "horizontal-2",
    //     target: "horizontal-6",
    //     animated: true,
    // },
    // {
    //     id: "horizontal-e3-7",
    //     source: "horizontal-3",
    //     target: "horizontal-7",
    //     animated: true,
    // },
    // {
    //     id: "horizontal-e3-8",
    //     source: "horizontal-3",
    //     target: "horizontal-8",
    //     animated: true,
    // },
    // {
    //     id: "horizontal-e3-9",
    //     source: "horizontal-3",
    //     target: "horizontal-9",
    //     animated: true,
    // },
];

const nodeTypes = { textUpdater: TextUpdaterNode };

const Node = () => {
    return (
        <div style={{ height: 800 }}>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                nodeTypes={nodeTypes}
                fitView
            ></ReactFlow>
        </div>
    );
};

export default Node;
