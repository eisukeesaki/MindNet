import { Handle, Position } from "react-flow-renderer";
import "./ParentNode.scss";

function ParentNode() {
    return (
        <div className="parentNode">
            <input id="text" name="text" className="parentNode__input" />
            <button className="parentNode__button">+</button>
            <Handle type="source" position={Position.Right} />
        </div>
    );
}

export default ParentNode;
