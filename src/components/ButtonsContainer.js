import { useState } from "react";
import { buttons } from "../css/ButtonsContainer.module.css";

export default function ButtonsContainer () {
    const [buttonValues, setButtonValues] = useState([
        7, 8, 9, "/", 4, 5, 6, "X", 1, 2, 3, "-", "clear", 0, "+", "="
    ]);

    return (
        <div className={buttons}>
            {buttonValues.map((value) => (
                <p key={value}>{value}</p>
            ))}            
        </div>
    )
}