import exporess from 'express'

const PORT = '80'

const app = exporess()

app.get('/', (req, res) => {
    res.status(200).json(`Hello ${req.query.name}! ${req.query.message}!`)
})

app.listen(PORT, () => {
    
})