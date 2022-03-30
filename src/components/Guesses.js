import Guess from "./Guess";
import {useSelector} from "react-redux";

function Guesses() {
    const guesses = useSelector(state=>state.guesses);
    let guessEles = guesses.map((item, index) =>
        <Guess key={index} vl={item} />
    )

    return (
        <div className="guesses">
            {guessEles}
        </div>
    )
}

export default Guesses;