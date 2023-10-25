import styles from './checkBoxRadioStyles.module.css'
import React, { useState } from "react";
var typeOfFor;

export default function CheckBoxRadio() {
    const [typeOfForecast, setTypeOfForecast] = useState("current");
    function changeValue(event) {
        setTypeOfForecast(event.target.value);
        typeOfFor = typeOfForecast;
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.inner}>Выберете прогноз</h3>
            <div className={styles.current}>
                <p>погода сегодня:</p>
                <input
                    type="radio"
                    name="radio"
                    value="fiveDays"
                    checked={typeOfForecast === "fiveDays" ? true : false}
                    onChange={changeValue}
                />
            </div>
            <div className={styles.current}>
                <p>прогноз на 5 дней:</p>
                <input
                    type="radio"
                    name="radio"
                    value="current"
                    checked={typeOfForecast === "current" ? true : false}
                    onChange={changeValue}
                />
            </div>
        </div>
    );
}

export { typeOfFor };