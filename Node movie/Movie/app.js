


const axios = require('axios')
const express = require('express')
const ejs = require('ejs');
const app = express();
 const PORT = 4500
 const path = require('path');
 const env = require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static('Movie/views'));
app.use(express.static(__dirname+'/Movies/public/style.css'));

// express.use(express.static(path.join(__dirname,'views')))

//https://api.themoviedb.org/3/search/movie?query=fast&similar&api_key=${key}&?language=en-US

const key = '6d122a695627b245abbf8fe1c0c383e3' ;
const url = "https://api.themoviedb.org/3"
const searchURL = `${url}/search/movie`;


//get request has preset movie
app.get('/', async (req, res) => {
    try {
       
        const response = await axios.get(`${searchURL}?query=&api_key=${key}&language=en-US`);
        const movies = response.data.results
        res.render('movies', { movies });
    } catch (error) {
        console.error("Error connecting to API", error)
    }
});
// this post request sends the user input
app.post('/search', async (req, res) => {
    // access the user input
    const {userInput} = req.body;
    try {
        //takes the user input and append it to the search url
        const response = await axios.get(`${searchURL}?query=${userInput}&api_key=${key}&language=en-US`);
        const movies = response.data.results
        res.render('movies', { movies })
    } catch (error) {
        console.error('Error getting movies', error);
       
    }
});


app.listen(PORT, () => {
    console.log('Listening on port:',PORT);
});
