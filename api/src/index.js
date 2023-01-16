const app = require('./app')
const connection = require('./database/connection')

connection.then(conn => {
    console.log('database connected')
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`)
    })

    app.on('error', (e) => {
        console.log(`Error is ${e}`)
    })
})

const PORT = process.env.PORT || 3001
