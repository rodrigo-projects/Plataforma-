const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
   // console.log('foi')
    app.use(bodyParser.json())
    app.use(cors())
}