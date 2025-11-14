import React from "react";

const Container: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return <div style={{ 
        backgroundColor: "#EDECEE", 
        height: "600px", 
        width: "300px" 
    }}>{children}</div>;
};

export default Container;