import { calculator } from "../css/Calculator.module.css"
import Display from "./Display"

export default function Calculator () {
    return (
        <div className={calculator}>
            <Display />
            <h1>This is the button component</h1>
        </div>
    )
}