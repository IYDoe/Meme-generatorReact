import React from 'react'

const MemeGenerator = (props) => {
    return (
        <div>
            <form className="meme-form" onSubmit={props.generate}>
                <input
                    type="text"
                    name="topText"
                    placeholder="Top text"
                    onChange={props.handleChange}
                    value={props.topText}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom text"
                    onChange={props.handleChange}
                    value={props.topText}
                />
                <button>Gen</button>
            </form>
            <div className="meme">
                <img align="center" src={props.state.randomImage} alt="" />
                <h2 className="top">{props.state.topText}</h2>
                <h2 className="bottom">{props.state.bottomText}</h2>
            </div>
        </div>
    )
}

export default MemeGenerator