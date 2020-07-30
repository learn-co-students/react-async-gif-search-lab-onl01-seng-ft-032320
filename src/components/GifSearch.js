import React from 'react'

function GifSearch(props) {

    return (
        <form>
            <label>
                Query
                <input type="text" name="query" />
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}

export default GifSearch