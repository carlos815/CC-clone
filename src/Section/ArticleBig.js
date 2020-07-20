import React, { useEffect, useState } from 'react';
import figure from '../images/rock_contra_la_dictadura_2_3-990x524.jpg';
import { _replaceRandom } from 'gsap/gsap-core';
import Img from '@lxsmnsyc/react-image';

import LazyLoad from 'react-lazyload';
import ImageLoader from '../common/ImageLoader'



const htmlTags = /<(.|\n)*?>/g


export default function ArticleBig(props) {


    const initialState = { image: null, loading: true }

    const [State, setState] = useState(initialState);
    // let img = null;
    /*
        useEffect(() => {
    
            //loading the image
            // const proxyurl = "https://cors-anywhere.herokuapp.com/"; <- use this in case the server refuses to answer
            
            const proxyurl = "";
            const url = props.post.jetpack_featured_media_url;
            console.log('fetching ' + url)
            fetch(proxyurl + url)
                .then((response) => response.blob())
                .then((blob) => URL.createObjectURL(blob))
                .then((im) => {
    
                    setState({image: im, loading: false });
                })
    
        }, [])*/

    const figRef = React.createRef()
    return (

        <div className='article-big'>
                            <LazyLoad
                placeholder={<div className='img-container'></div>}
                debounce={false}
                offsetVertical={100}
                overflow={false}

                >
                <figure className='img-container'>


                 <ImageLoader media={props.post.jetpack_featured_media_url}/>

                </figure>
                </LazyLoad>

            <div className='category'><p>
                {props.categories[props.post.categories]}
            </p></div>
            <h2>{props.post.title.rendered}</h2>
            <p className='summary'>{props.post.excerpt.rendered.replace(htmlTags, '')}</p>
            <p className='article-meta'>
                <a href="https://www.caracaschronicles.com/author/tamarakathleen/">Tamara Taraciuk and Kathleen Page</a>
                <time dateTime={props.date}>July 15, 2020</time></p>
        </div>
    );
}


