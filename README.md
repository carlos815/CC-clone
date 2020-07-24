[Whoa! this actually got a view? hello reader-person!]

## Caracas Chronicles in React

This is a remake of Caracas Chronicles' front page build from scratch in React. You can find it [here](https://carlos815.github.io/CC-clone/)

### Copytight stuff: this is not the best site in the world, this is just a tribute

This page stays updated with the real site, remember that the design belongs to Caracas Chronicles, plus the content of the articles and the images.

### They left the door open 🤭

Caracas Chronicles, or CC, as I will refer to from now on, is a news website made in WordPress. By default, WordPress sites allow you to access their Rest API without authentication just by adding "/wp-json/wp/v2/" to the end of the link.

It turns out, CC is one of those sites, they let the door open, which is not a big deal, because really all you can do is get jsons and read them, but I took that oportunity to rebuild their page using React.

Because of the whole, "unauthenticated-access" dealio, this clone can stop working at any second (and it does stop working from time to time), but that's ok, the objective of this project is to flex my web development abilities (and to practice, of course).

### Features

-The CSS is strong with this one. This page doesn't share **any** of the code of Caracas Chronicles but it looks eerily similar (Put em side by side to see what I mean). I wanted to make a pixel perfect recreation without peeking at their code (which was honestly the hardest thing to pull off).

-It has the desktop version, the mobile version and the whatever is in between. You can rezise your window to your heart's content and it'll still look like the original site. 

-I rely on a bunch of parallel async requests to CC to get the recent posts by category, with the author, date, exerpt, and the image. All of those are things that can be found in the Json using the right parameters.

-I'm using hooks instead of classes for the whole thing.

-The images have lazy loading, they load only when they are near the viewport, and their resolution varies based on the screen size. They also have a nice loading spinner and they fade in when they have loaded.

-I'm not using any state management solution, as the app is super small, as well as no router.

### About some of the components

#### The App component

This guy does most of the heavy lifting

1. At the beginning it creates the empty variables where the json responses are going to live plus the empty variables where the array of jsx components of the actual posts.

2. It shows the nice spinner while it makes the GET requests.

3. Once the responses are done, it uses a function called buildArticles, which receives the databases and a type of component to generate the jsx of the articles. It stores those in its current state and uses it to build the whole thing

#### The buildArticles function

This function receives a Json object with the information of one or more posts, and creates three types of components, the ArticleBig one, the Briefing, and the ArticleSmall. These components are very similar, but come with different classes so the CSS can distinguish them and format them accordinly.

buildArticles also makes some extra GET requests to provide the article with extra information via props. For example, the json of each article doesn't include the name of the author, instead it has a link to another json where that information is. The same thing happens with the links of the images with different resolutions for the srcSet.

#### Things missing (I wanted to add those later, but honestly this project has already taken longer than I expected so IDK...)

-The header and the sidebar of the original site

-A visual error handling for when the server refuses to answer, right now it stays loading and it doesn't show any feedback indicating that the server got angry for all the unauthenticated requests again.

Check out my [My Flutter App](https://play.google.com/store/apps/details?id=com.carlos.laslucas)
