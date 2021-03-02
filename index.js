const express = require('express')
const app = express()
const db = require('./models')

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
	res.send('hello nick')
})

app.get('/bobby', (req, res)=>{
	//make a user named bobby
	db.User.create({
		name: "bobby",
		email: "bobby@gmail.com",
		meta: {
			age: 29,
			website: 'bobby.com'
		}
	}, (err, newUser)=>{
		if (err){
			console.log(err)
		}
		else {
			console.log(newUser)
		}
		res.send(newUser)
	})
})

const PORT = 3000

app.listen(PORT, ()=>{
	console.log(`app is listening on port ${PORT}`)
})