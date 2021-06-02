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

app.get('/albin', (req, res) => {
    res.sendFile('albin.html', { root: './html' })
})
app.get('/albin-css', (req, res) => {
    res.sendFile('albin.css', {root: './css'})
})

app.get('/image', (req, res) => {
    res.sendFile('image_2.png', { root: './assets' })
})


app.listen(5000, () => console.log('started'))