const rootReducer = (state, action) => {
    let activeGuess = state.guesses[state.guessNum];
    let newGuesses = state.guesses;

    switch (action.type) {
        case 'Delete':
            let nd;
            if (!state.end) {
                let wn = false;
                let item;
                let stop = false;

                for (let i = activeGuess.length - 1; 0 <= i; i--) {
                    if (!stop) {
                        if (activeGuess[i] !== '') {
                            item = activeGuess[i];
                            stop = true;
                        }
                    }
                }

                if (activeGuess.indexOf('') === 0) {
                    wn = true;
                }

                const index = activeGuess.lastIndexOf(item);
                activeGuess[index] = '';

                newGuesses[state.guessNum] = activeGuess;

                nd = {
                    ...state,
                    guesses: newGuesses,
                    change: !state.change
                }

                return nd;
            }
            break;

        case 'InputLetter':
            let nl;
            if (!state.end) {
                const index = activeGuess.indexOf('');
                let wn = false;
                if (activeGuess.includes('') && index < state.answer.length) {
                    activeGuess[index] = action.value;
                } else {
                    wn = true;
                }
            }

            newGuesses[state.guessNum] = activeGuess;
            nl = {
                ...state,
                guesses: newGuesses,
                change: !state.change
            }
            return nl;

        case 'SubmitGuess':
            let newTry = state.guessNum + 1;
            let win = state.win;
            let end = state.end;
            let ng;

            if (activeGuess.indexOf('') === -1 && !state.end) {
                newGuesses[state.guessNum] = activeGuess;
                if (newGuesses[state.guessNum].join('') === state.answer.join('')) {
                    win = true;
                    end = true;
                }

                if (newTry === 6) {
                    end = true;
                    if (!win) {
                    //    input lose code
                    }
                }

                ng = {
                    ...state,
                    guesses: newGuesses,
                    guessNum: newTry,
                    change: !state.change,
                    win: win,
                    end: end
                }

                return ng;
            } else {
                ng = {
                    ...state
                }

                return ng;
            }

        default:
            return state;
    }
}

export default rootReducer;