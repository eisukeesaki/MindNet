import React, { createRef, useEffect } from "react";
import renderMindMap from "../../Components/DrawMap/renderMindMap";

const DrawMindMap = () => {
    const divRef = createRef();
    useEffect(() => {
        renderMindMap(divRef.current);
    }, [divRef]);
    return <div ref={divRef} />;
};

export default DrawMindMap;
