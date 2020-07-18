import React, { useState, useEffect } from 'react';
import logo from './images/logo.min.svg';
import './App.css';
import ArticleBig from './Section/ArticleBig';
import ArticleBriefing from './Section/ArticleBriefing';

import Category from './Category/Category';
import NavFooter from './NavFooter';
import Subscribe from './Subscribe';
import Social from './Social';
import Footer from './Footer';

import PrrS from './images/Image-118.png'

import db from './db/posts'

import recents from './db/recents'
import briefing from './db/briefing.json'
import economy from './db/economy'
import life from './db/life'
import politics from './db/politics'

import categories from './db/categories'

// get the first most recents minus the briefing
// get the lastest briefing
// get the first three posts in politics, minus the ones on the main category
// the same for economy and life
function App() {

  const initialState = { recents: [], briefings: [], politics: [], economy: [], life: [] } //this stores the index of the pages in the order that it will be shown

  const [State, setState] = useState(initialState);

  useEffect(() => {
    //set the indexes correpsonding to the elements in the database
    const data = db;
    setState({ recents: getIndexes(data, 741, true), briefings: getIndexes(data, 741), politics: getIndexes(data, 1005), economy: getIndexes(data, 1006), life: getIndexes(data, 1007) })

    console.log(State.briefings[0] == null)
  }, [])
    

  const getIndexes = (data, category, inverse = false) => {

    let found = []

    if (inverse) {
      data.map((element, index) => {
        if (element.categories != category) found.push(index)
      })
    } else {
      data.map((element, index) => {
        if (element.categories == category) found.push(index)
      })
    }
 //   console.log(found)
    return found
  }


  if (State.briefings[0] == null) {
    return <div>Loading...</div>
  } else {
    console.log(State)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div><p>
            Donate
        </p></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 15">
            <g transform="translate(-418.596 -302.08)">
              <rect width="10" height="2" transform="translate(418.595 306.309)"></rect>
              <rect width="13" height="2" transform="translate(418.595 310.559)"></rect>
              <rect width="16" height="2" transform="translate(418.595 314.809)"></rect>
              <path d="M442.582,311.587a6,6,0,1,0-1.3,1.3l3.92,3.92,1.3-1.3-3.921-3.92Zm-4.825.619a4.143,4.143,0,1,1,4.143-4.142,4.147,4.147,0,0,1-4.143,4.142Z"></path>
            </g>
          </svg>
        </header>

        <ArticleBig post={recents[0]} categories={categories} />
        <ArticleBig post={recents[1]} categories={categories} />
        <ArticleBig post={recents[2]} categories={categories} />
        <ArticleBig post={recents[3]} categories={categories} />
        <ArticleBig post={recents[4]} categories={categories} />

        <ArticleBriefing post={briefing[0]} categories={categories} />

        <figure className='PRR'>
          <img src={PrrS} alt="article" srcset="" />
        </figure>

        <Category posts={politics} category={'Politics'} />
        <Category posts={economy} category={'Economy'} />
        <Category posts={life} category={'Life'} />

        <NavFooter />
        <Subscribe />
        <Social />
        <Footer />
      </div>
    );
  }
}

export default App;
