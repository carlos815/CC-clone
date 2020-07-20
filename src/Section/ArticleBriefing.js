import React, {Suspense} from 'react';
import figure from '../images/rock_contra_la_dictadura_2_3-990x524.jpg';
import ImageLoader from '../common/ImageLoader'
import LazyLoad from 'react-lazy-load';


const htmlTags = /<(.|\n)*?>/g


export default function ArticleBriefing(props) {
    const figRef = React.createRef()

    return (
        <div className='article-big briefing'>
                    <div className='category'><p>
                Daily Briefing
            </p></div>


            <LazyLoad
                placeholder={<div className='img-container'></div>}
                debounce={false}
                offsetVertical={100}
                overflow={true}
                >
                <figure className='img-container'>


                 <ImageLoader media={props.post.jetpack_featured_media_url}/>

                </figure>
                </LazyLoad>


        
        
    
            <div className='info'>
                <h2>{props.post.title.rendered}</h2>
                <p className='summary'>{props.post.excerpt.rendered.replace(htmlTags, '')}</p>
                <p className='article-meta'>
                    <a href="https://www.caracaschronicles.com/author/tamarakathleen/">Tamara Taraciuk and Kathleen Page</a>
            <time dateTime={props.date}>July 15, 2020</time></p>
            </div>
        </div>
    );
}


