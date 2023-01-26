console.log("day-51 : API Express JS")
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { response } = require('express')

const app = express()
const PORT = 8080

app.use(cors())
app.use(bodyParser.json())

let data = [{
    'name': "khangaikhuu",
'major': "computer science",
'id': 1}]

app.get("/", (request, response) => {
    response.send("Here I'm a brutally powerful Express Server!")
})

app.get("/data", (request, response) => {
    response.json(data)
})

app.post("/data", (request, response) => {
    const length = data.length
    const newData = {
        id: length + 1,
        name: request.body.name,
        major: request.body.major
    }
    data.push(newData)
    response.json(data)
    console.log(request.body)
})  

app.delete("/data", (request, response) => {
    response.json(data)
    const newData = data.filter(d => d.id !== request.body.id);
    data = newData
   
    console.log(request.body)
})

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
 