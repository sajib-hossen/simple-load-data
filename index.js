const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
const port = 5000;



app.get('/', (req, res) => {
    res.send('hello word ami kichu ma')
})

const users = [
    { id: 0, name: 'sajib', email: 'sajib@gmail.com', phone: '019242742674' },
    { id: 1, name: 'rajib', email: 'sajib@gmail.com', phone: '019242742674' },
    { id: 2, name: 'Hajib', email: 'sajib@gmail.com', phone: '019242742674' },
    { id: 3, name: 'hossn', email: 'sajib@gmail.com', phone: '019242742674' },
    { id: 4, name: 'nirob', email: 'sajib@gmail.com', phone: '019242742674' },
    { id: 5, name: 'bulbul', email: 'sajib@gmail.com', phone: '019242742674' },
    { id: 6, name: 'aminul', email: 'sajib@gmail.com', phone: '019242742674' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

})


app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    res.json(newUser)



})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/sajib/search:id', (req, res) => {
    res.send('sajib is web devoloper')
})

app.listen(port, () => {
    console.log('explore listening at ', port)
})