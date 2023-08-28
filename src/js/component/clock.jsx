import React, { useEffect, useState } from "react";
import Display from "./display";


const Clock = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => setTime(currentTime => currentTime + 1), 1000);
    }, []);

    let timeArray = ("0".repeat(6 - time.toString().length) + time.toString()).split("");

	return (
        <div className="d-flex justify-content-center bg-dark justify-content-between p-5">
            {timeArray.map((unit) => {
                return (
                    <Display text={unit} />
                )
            })}
        </div>
        
    );
};

export default Clock;