import React from "react";
import "./headerstyle.css"


const Formheader = ({ headers }) => {
    return (
        <p className="text-[1.5rem] text-center mb-4 font-extrabold uppercase">
            {headers}
        </p>
    );
};
export default Formheader
