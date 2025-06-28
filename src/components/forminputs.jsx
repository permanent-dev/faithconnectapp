import React from "react";
import './inputsstyle.css'
// import '../index.css'





const Forms = ({ label, button }) => {


    return (
        <div>
            <label className="text-[#344277] uppercase" htmlFor="label">{label}</label>
            <br />
            <input type="text " className="bg-gradient-to-r from-gray-300 to-gray-300 rounded-2xl p-2 w-[20rem]" htmlFor="id" />

        </div>


    );




};
export default Forms;
