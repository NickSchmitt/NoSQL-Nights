const db = require('./models')

db.User.find({ name: 'bobby' }, (err, response) => {
  console.log(response)
})

db.User.deleteMany({ name: 'Bobby'}, (err, response)=>{
	console.log(response)
})
