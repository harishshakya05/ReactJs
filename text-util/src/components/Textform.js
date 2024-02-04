import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("");
    const handleUppercase = () => {
        const newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowercase = () => {
        const newTxt = text.toLowerCase();
        setText(newTxt)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }
    const handleClearText = () => {
        const newTxt = '';
        setText(newTxt)
    }
    const handleExtraSpaces = () => {
        const newTxt = text.replace(/\s{2,}/g, ' ').trim();
        setText(newTxt)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <div className='container my-3'>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea value={text} onChange={handleChange} className="form-control" id="formtxt" rows="7"></textarea>
                </div>
                <button type="button me-3" onClick={handleUppercase} className="btn btn-primary">To Uppercase</button>
                &nbsp;<button type="button me-3" onClick={handleLowercase} className="btn btn-primary">To Lowercase</button>
                &nbsp;<button type="button me-3" onClick={handleCopy} className="btn btn-primary">Copy Text</button>
                &nbsp;<button type="button me-3" onClick={handleExtraSpaces} className="btn btn-primary">Remove extra Spaces</button>
                &nbsp;<button type="button me-3" onClick={handleClearText} className="btn btn-primary">Clear Text</button>

            </div>
            <div className='container my-3'>
                <h4>Your Text Summery</h4>
                <p>{text.split(" ").length} words and {text.length} charcters</p>
                <p>{0.008 * text.split(" ").length} minitus read</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>

    )
}
