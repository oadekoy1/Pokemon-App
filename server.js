const express = require('express')
const pokemon = require('./models/pokemon')

// App init
const app = express()
const PORT = 3000

// App settings
app.set('view engine', 'jsx') 
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon})
})

app.post('/pokemon', (req, res) => {
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

app.get('/pokemon/:id', (req, res) => {
    const {id} = req.params

    res.render('Show', {poke: pokemon[id]})
})

// app.get('/pokemon/:id', (req, res) => {
//     const{indexOfPokemonArray} = req.params
//     console.log(indexOfPokemonArray);
//     res.render('Show', {
//         poke: pokemon[indexOfPokemonArray] ,
//     })
// })




app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})