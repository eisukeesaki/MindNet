import { Handle, Position } from "react-flow-renderer";
import "./ChildNode.scss";

function ChildNode() {
    return (
        <div className="childNode">
            <input id="text" name="text" className="childNode__input" />
            <button className="childNode__button">+</button>
            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    );
}

export default ChildNode;
