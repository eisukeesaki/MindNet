import { useCallback } from "react";
import { Handle, Position } from "react-flow-renderer";

// const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Right} />
            <div>
                <input
                    id="text"
                    name="text"
                    onChange={onChange}
                    className="input"
                />
            </div>
            <Handle type="source" position={Position.Left} id="a" />
            <Handle type="source" position={Position.Left} id="b" />
        </div>
    );
}

export default TextUpdaterNode;
