const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const uri = "mongodb://back-demo-001-server:u7I0FGnwNeP2VKwy6e5AMo5FKNWAfxXTyLwIAnM4j9LHqDQF125pK4PSnwLqi8ReQYrSDi5PS5rZACDb5G8QYA==@back-demo-001-server.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@back-demo-001-server@";
const client = new MongoClient(uri);
const DATABASE_NAME = 'consultants-db'; 


app.get('/health-check', async (req, res) => {
   res.status(202).send('OK')
});

app.get('/consultants', async (req, res) => {
  try {
    await client.connect();
    const database = client.db(DATABASE_NAME);
    const collection = database.collection('consultants');
    const consultants = await collection.find().toArray();
    res.json(consultants);
  } catch (error) {
    res.status(500).send('Error retrieving consultants');
  } finally {
    await client.close();
  }
});


app.get('/consultants/:id', async (req, res) => {
  try {
    await client.connect();
    const database = client.db(DATABASE_NAME);
    const collection = database.collection('consultants');
    const consultant = await collection.findOne({ _id: parseInt(req.params.id) });
    if (consultant) {
      res.json(consultant);
    } else {
      res.status(404).send('Consultant not found');
    }
  } catch (error) {
    res.status(500).send('Error retrieving consultant');
  } finally {
    await client.close();
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
