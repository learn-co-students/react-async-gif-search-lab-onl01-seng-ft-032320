import React from 'react';

const GifSearch = props => {
    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <div>
                    <label>
                        Enter a Search Term
                        <input id="search" type="text" />
                    </label>
                </div>
                <div>
                    <button type="submit">Find Gifs</button>
                </div>
            </form>
        </div>
    )
}


export default GifSearch