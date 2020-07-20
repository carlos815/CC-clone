import React from 'react';
import figure from '../images/rock_contra_la_dictadura_2_3-990x524.jpg';
import Img from '@lxsmnsyc/react-image';
import ImageLoader from '../common/ImageLoader'
import LazyLoad from 'react-lazy-load';


export default function Category(props) {
    const figRef = React.createRef()

    return (
        <div className='card'>

            <figure className='img-container'>


                <ImageLoader media={props.post.jetpack_featured_media_url} />

            </figure>
         
        <h2>{props.post.title.rendered}</h2>
        <p className='article-meta'>
            <a href="https://www.caracaschronicles.com/author/tamarakathleen/">Tamara Taraciuk and Kathleen Page</a>
            <time dateTime={props.date}>July 15, 2020</time></p>
        </div >

    );
}


