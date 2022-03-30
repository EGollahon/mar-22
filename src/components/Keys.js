import Key from "./Key";

function Keys() {
    const keys = 'qwertyuiopasdfghjklzxcvbnm'.split("");

    let keysEle = keys.map((item, index) =>
        <Key key={index} vl={item} />
    )

    return (
        <div className="keys">
            {keysEle}
            <div className="key enter">Enter</div>
            <div className="key delete">Delete</div>
        </div>
    )
}

export default Keys;