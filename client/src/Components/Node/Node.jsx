import React from "react";
import ReactFlow from "react-flow-renderer";
import ParentNode from "./ParentNode";
import ChildNode from "./ChildNode";
import "./Node.scss";

const childrenData = ["child-1", "child-2", "child-3"];

const nodeTypes = { parentNode: ParentNode, childNode: ChildNode };

const initialNodes = [
    //Parent Node
    {
        id: "parent",
        sourcePosition: "right",
        type: "parentNode",
        position: { x: 0, y: 0 },
    },
    // Child Node
    {
        id: childrenData[0],
        sourcePosition: "right",
        targetPosition: "left",
        type: "childNode",
        position: { x: 250, y: -200 },
    },
    {
        id: childrenData[1],
        sourcePosition: "right",
        targetPosition: "left",
        type: "childNode",
        position: { x: 250, y: 0 },
    },
    {
        id: childrenData[2],
        sourcePosition: "right",
        targetPosition: "left",
        type: "childNode",
        position: { x: 250, y: 200 },
    },
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
];

const Node = () => {
    return (
        <div className="node">
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
