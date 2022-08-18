import React, { Fragment } from "react";
import ReactFlow from "react-flow-renderer";

const initialNodes = [
    {
        id: "1",
        type: "input",
        data: { label: "Node" },
        position: { x: 0, y: 0 },
    },
];

const Node = () => {
    return (
        <Fragment>
            <ReactFlow
                nodes={initialNodes}
                style={{ width: "100%", height: "90vh" }}
            />
        </Fragment>
    );
};

export default Node;
