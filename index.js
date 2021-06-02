import express from 'express'

const app = express()

app.use(express.static('public'))

app.get('/soma', (req, res) => {
    res.sendFile('soma.html', { root: './html' })
})

app.get('/about', (_, res) => {
    res.sendFile('about.html', { root: './html' })
})

app.get('/css', (_, res) => {
    res.sendFile('style.css', { root: './css' })
})

app.get('/albin', (req, res) => {
    res.sendFile('albin.html', { root: './html' })
})

app.get('/albin-css', (req, res) => {
    res.sendFile('albin.css', {root: './css'})
})

app.get('/image-albin', (req, res) => {
    res.sendFile('image_2.png', { root: './assets' })
})

app.get('/soma-css', (req, res) => {
    res.sendFile('soma.css', { root: './css' })
})
app.get('/elvin', (req, res) => {
    res.sendFile('yeah.html', { root: './html' })
})

app.get('/image-elvin', (req, res) => {
    res.sendFile('gabi_baby.jpg', { root: './assets'})
})


app.listen(5000, () => console.log('started'))