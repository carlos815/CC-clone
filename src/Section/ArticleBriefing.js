import React from 'react';
import figure from '../images/rock_contra_la_dictadura_2_3-990x524.jpg';
import Img from '@lxsmnsyc/react-image';

const htmlTags = /<(.|\n)*?>/g


export default function ArticleBriefing(props) {
    const figRef = React.createRef()

    return (
        <div className='article-big briefing'>
                    <div className='category'><p>
                Daily Briefing
            </p></div>
            <figure ref={figRef}>
                <Img
                    src={props.post.jetpack_featured_media_url}
                    fallback={<div>THIS IS STILL LOADINGS asd asdNGANasaSGNUIAS asd asd NGIASHN</div>}
                    containerRef={figRef}
                   /* sources={[
                        {
                            source: 'portrait.jpg',
                            media: '(orientation: portrait)',
                        },
                        {
                            source: 'landscape.jpg',
                            media: '(orientation: landscape)',
                        },
                    ]}*/
                />
            </figure>
    
            <div className='info'>
                <h2>{props.post.title.rendered}</h2>
                <p className='summary'>{props.post.excerpt.rendered.replace(htmlTags, '')}</p>
                <p className='article-meta'>
                    <a href="https://www.caracaschronicles.com/author/tamarakathleen/">Tamara Taraciuk and Kathleen Page</a>
            <time datetime={props.date}>July 15, 2020</time></p>
            </div>
        </div>
    );
}


