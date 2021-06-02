import express from 'express'

const app = express()

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: './html' })
})

app.get('/about', (req, res) => {
    res.sendFile('about.html', { root: './html' })
})

app.get('/css', (req, res) => {
    res.sendFile('style.css', { root: './css' })
})

app.listen(5000, () => console.log('started'))