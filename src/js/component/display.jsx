import React, { useEffect, useState } from "react";


const Display = ({text}) => {
    
	return (
        <div className="border rounded bg-white p-5">
            <h1 className="display-1 fw-bolder">{text}</h1>
        </div>
    );
};

export default Display;