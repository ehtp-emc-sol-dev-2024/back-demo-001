const express = require('express');
const app = express();

const consultants = [
    { "id" : 1, "firstName" : "John", "lastName" : "Doe", "CIN" : "A123456", "skills" : [ "Java", "Python", "Azure" ] },
    { "id" : 2, "firstName" : "Jane", "lastName" : "Smith", "CIN" : "B654321", "skills" : [ "JavaScript", "React", "Node.js" ] },
    { "id" : 3, "firstName" : "Sam", "lastName" : "Green", "CIN" : "C987654", "skills" : [ "SQL", "MongoDB", "Docker" ] }
  ];

app.get('/consultants', (req, res) => {

  res.json(consultants);
});


app.get('/consultants/:id', async (req, res) => {
    consultant =    { "id" : 3, "firstName" : "Sam", "lastName" : "Green", "CIN" : "C987654", "skills" : [ "AWS", "SQL", "MongoDB", "Docker" ] } ;
   res.json(consultant);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running');
});
