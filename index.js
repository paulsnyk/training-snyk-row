const express = require('express')
const math = require('./math.js')
const app = express()
const port = 3000

const main = () => {
	app.get('/', (req, res) => res.send('Hello Snyk CX ROW!'))
	app.get('/dom', (req, res) => res.send('Hello Dom'))
	app.get('/paul', (req, res) => res.send('Hello Paul'))
	app.get('/antoine', (req,res) => {
						res.send(""+math.triplesum(1,2))
						console.log('somebody reached Antoine')
					})
	
	app.listen(port, () => console.log(`Paul - Example app listening on port ${port}!`))
}


main()

exports.modules = main;
