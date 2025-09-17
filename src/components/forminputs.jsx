import React from "react";
import './inputsstyle.css'
// import '../index.css'





const Forms = ({ label, value, change }) => {


    return (
        <div className="mb-3">
            <label className="text-[#344277] uppercase" htmlFor="label">{label}</label>
            <br />
            <input type={label} onChange={change} required value={value} name={label} placeholder={label} className="bg-gradient-to-r w-full from-gray-100 to-gray-200 rounded-2xl p-2 " htmlFor="id" />

        </div>


    );




};
export default Forms;
