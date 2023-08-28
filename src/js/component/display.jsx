import React, { useEffect, useState } from "react";
import { time } from "./clock.jsx";


const Display = ({text}) => {
    
	return (
        <div className="border text-white">
             <h1 className="fw-bolder fs-1">{text}</h1>
        </div>
    );
};

export default Display;