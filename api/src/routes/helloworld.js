const helloworld = (req, res) => {
    console.log('hello world')
    return res.send('Hello world!')
}

module.exports = helloworld
