import styles from './formStyles.module.css'
import CheckBoxRadio from '../checkBoxRadio/checkBoxRadio'

export default function Form({ gettingWeather, getWeaByCoords }) {
    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={gettingWeather}>
                <input className={styles.input} type="text" name="city" placeholder="Город" />
                <button className={styles.form_btn}>Получить погоду по городу</button>
            </form>

            <button className={styles.form_btn} onClick={getWeaByCoords}>
                Получить погоду по текущим координатам
            </button>

            <CheckBoxRadio />
        </div>
    );
}