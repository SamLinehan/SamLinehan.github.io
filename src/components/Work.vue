<template>
    <div id="work">
        <p class="title">My Work</p>
        <ul>
            <li v-for="project in projects">
                <div>
                    <h3>{{ project.name }}</h3>
                    <p>{{ project.tech }}</p>
                    <p>{{ project.description}}</p>
                    <a class="github" :href="project.githubLink">GITHUB</a>
                    <a class="web" :href="project.webLink">LIVE</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
      name: 'work',
      data () {
        return {
          projects: [
            {
              name: 'Twig of Life',
              tech: 'AngularJS, D3.js, Python, Flask, PostgreSQL',
              description: 'A representation of a portion of the tree of life. By creating an interactive, radial dendrogram users are able to see taxonomic relationships between species. The significance of this project is not just in the final product, but in the technological scope as well. We were faced with the challenge of incorporating at least one new significant technology that was not taught in the Galvanize curriculum. We decided to use D3.js to create the dendrogram and Python with the Flask web framework to serve our backend.',
              githubLink: 'https://github.com/TelegraphMoarInterstices',
              webLink: 'https://twig-of-life.firebaseapp.com/#/'
            },
            {
              name: 'Evently',
              tech: 'SASS, Socket.io, Node.js, Ionic, ngCordova, Python, Flask, MongoDB',
              description: 'A mobile event app that allows users to join the event they are attending and interact with other attendees in real time.  Users search for an event (or create one if it does not exist) and are then directed to that event’s live feed. While on the live feed, users can create a post, read other posts, and select favorite posts.',
              githubLink: 'https://github.com/SamLinehan/evently-front-end',
              webLink: 'https://linehan-capstone.firebaseapp.com/#/home'
            },
            {
              name: 'Stock Market Game',
              tech: 'SASS, Bootstrap, jQuery, Yahoo Finance API, Node.js, PostgreSQL, Gulp.js',
              description: 'The Stock Market Game is a web app that simulates the stock market in real time. The app is designed as a game where users create an account and are allowed to buy and sell stocks from the S&P 100. Each trading day, users begin with $10,000 and the value of their investments are updated every five minutes to reflect the market. Users are also able to view a portfolio of the stocks they own as well as how they are performing against other users. At the end of the trading day, all ending balances are tallied and stored in each individual user\'s balance history.',
              githubLink: 'https://github.com/SamLinehan/fe_stock_kings',
              webLink: 'https://youtu.be/JUOCFfqog7Q'
            },
            {
              name: 'The Dark Star Project',
              tech: 'SASS, jQuery, Star API',
              description: 'The Dark Star Project is a web app that gives users information about the stars in our galaxy. Some of this information includes the distance in light years from earth, the luminosity of that stars, and whether or not there are any exo-planets in a star’s system. The data used in this project comes from Star API, which compiled public data provided by the American Museum of Natural History. To access information about a star, the user types the name of that star into the search bar and presses submit. There is also a random generated list of stars to aide the user in their search because the majority of stars aren’t known.',
              githubLink: 'https://github.com/SamLinehan/front_end_project',
              webLink: 'https://dsproject.firebaseapp.com/'
            }
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>
    #work {
        width: 80%;
        display: flex;
        align-self: center;
        flex-direction: column;
        .title {
            font-size: 32px;
        }
        ul {
            margin-top: 0;
            list-style-type: none;
        }
        li {
            margin-bottom: 15px;
        }
        h3 {
            margin-top: 0;
        }
        a, a:visited, a:active {
            color: inherit;
            text-decoration: none;
        }

        .github {
            margin-right: 10px;
        }

        .github:hover {
            color: #039be5;
        }

        .web:hover {
            color: #d32f2f;
        }
    }
</style>