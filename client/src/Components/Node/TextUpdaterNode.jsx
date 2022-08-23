import { Handle, Position } from "react-flow-renderer";

function TextUpdaterNode() {
    const onAddNode = (e) => {
        console.log(e);
    };
    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Left} />
            <div>
                <input id="text" name="text" className="input" />
                <button onClick={(e) => onAddNode(e)}>+</button>
            </div>
            <Handle type="source" position={Position.Right} id="a" />
        </div>
    );
}

export default TextUpdaterNode;
