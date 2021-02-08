
const app = require ('express')()
const consign = require('consign')
const db = require('./config/db')


app.db = db
const a=3001

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .then('./config/db.js')
    .into(app)

app.listen(a
    ,()=>{
    console.log('executando porta ' + a)
})

