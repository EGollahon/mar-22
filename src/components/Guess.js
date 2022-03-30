import GuessLetter from "./GuessLetter";

function Guess(props) {
    let guessLetterEles = props.vl.map((item, index) =>
        <GuessLetter key={index} vl={item}/>
    )

    return (
        <div className="guess">
            {guessLetterEles}
        </div>
    )
}

export default Guess;