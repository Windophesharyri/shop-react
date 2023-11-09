import cl from "./FAQFirstAnswer.module.css"

function FirstAnswer( { textIn } ) {
    return (
        <div className = {cl.mainDiv}>
            <p className = {cl.text}>{textIn}</p>
        </div>
    )
}

export default FirstAnswer