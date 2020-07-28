import React from 'react';

export default class GifList extends React.Component {



    render() {
        const photos = this.props.photos.map(photo => {
            return <li>
                <img src={photo.images.original.url} />
            </li >
        })
        return (
            <div>
                <ul>
                    {photos}
                </ul >
            </div>
        )
    }
}