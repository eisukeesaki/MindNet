import { useCallback, useState } from "react";
import ReactFlow, {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
} from "react-flow-renderer";

import TextUpdaterNode from "./TextUpdaterNode";

import "./TextUpdaterNode.scss";

const rfStyle = {
    backgroundColor: "#B8CEFF",
};

const initialNodes = [
    {
        id: "node-1",
        type: "textUpdater",
        position: { x: 0, y: 0 },
        data: { value: 123 },
    },
    {
        id: "node-2",
        type: "textUpdater",
        position: { x: 300, y: -30 },
        data: { value: 1234 },
    },
];
// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: TextUpdaterNode };

function Node() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState([]);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );
    const onConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges]
    );

    return (
        <div style={{ height: 800 }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
                style={rfStyle}
            />
        </div>
    );
}

export default Node;
