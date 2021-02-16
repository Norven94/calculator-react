import Calculator from "../components/Calculator"
import style from "../css/Home.module.css"

export default function Home () {
    return (
        <div className={style.home}>
            <div className={style.wrapper}>
                <Calculator />
            </div>
        </div>
    )
}