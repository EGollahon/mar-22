function initState() {
    return {
        guesses: [
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', ''],
            ['', '', '', '', '']
        ],
        guessNum: 0,
        answer: ['t', 'e', 'a', 'c', 'h'],
        change: false,
        end: false,
        win: false
    }
}

export default initState;