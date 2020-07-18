import React from 'react';
import ArticleSmall from './ArticleSmall'

export default function Category(props) {
    return (
        <div className='section'>
            <div className='category'>{props.category}</div>
            <ArticleSmall post={props.posts[0]}/>
            <ArticleSmall post={props.posts[1]}/>
            <ArticleSmall post={props.posts[2]}/>
        </div>
    );
}


