import React, { useState } from 'react';
import Image from '../images/IMG-8012-scaled.jpg'


export default function ImageLoader(props) {
    const initialState = {className: "Loading"}

    const [State, setState] = useState(initialState)

    const setLoaded = () => {
        setState({className: 'Loaded'})
    }

    return ( 
        <img className={State.className} src={props.media == props.media ? Image : props.media} alt="article" srcSet="" onLoad={setLoaded}/>
    );
}


