import ReactDOM from "react-dom";
import React from "react";

const WarningModal = (Component) => (props) =>{
    return ReactDOM.createPortal(
        <Component {...props} />,
        document.getElementById('warning-portal')
    )
}

export default WarningModal;