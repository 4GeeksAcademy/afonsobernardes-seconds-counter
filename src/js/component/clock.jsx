import React, { useEffect, useState } from "react";
import Display from "./display";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'



const Clock = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => setTime(currentTime => currentTime + 1), 1000);
    }, []);

    let timeArray = ("0".repeat(6 - time.toString().length) + time.toString()).split("");

	return (     
        <div className="d-flex justify-content-center border rounded bg-dark justify-content-between p-5">
            <div className="border rounded bg-white p-5">
                <FontAwesomeIcon icon={faClock} size="6x" />
            </div>  
            {timeArray.map((unit) => {
                return (
                    <Display text={unit} />
                )
            })}
        </div>
        
    );
};

export default Clock;