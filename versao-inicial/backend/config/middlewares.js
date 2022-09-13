const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.use(bodypPaser.json())
    app.use(cors())
}