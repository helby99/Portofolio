const { MongoClient } = require('mongodb');
const express = require('express');
const app = express()
const port = process.env.PORT || 5000;

//connection url
const url = 'mongodb+srv://nightmoon:Polopo999@nightmare.lz7lo.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

//database name
const dbName = 'backend';

app.get('/', async(req,res) => {
    await client.connect();
    console.log('Connected success');
    const db = client.db(dbName);
    const collection = db.collection('portofolio');
    const findResult = await collection.find({}).toArray();
    res.status(200).json({Datajson : findResult})
})

app.listen(port, () => {
    console.log(`Example listen on port ${port}`)
})