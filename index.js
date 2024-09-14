const express = require('express'); 

const app = express(); 

 

app.get('/consultants', (req, res) => { 

  const consultants = [ 

    { id: 1, firstName: 'Ahmed', lastName: 'El Haddad', CIN: 'A123456' }, 

    { id: 2, firstName: 'Fatima', lastName: 'Ben Ali', CIN: 'B654321' } 

  ]; 

  res.json(consultants); 

}); 

app.get('/consultants/:id', async (req, res) => {
   consultant =    { "id" : 3, "firstName" : "Sam", "lastName" : "Green", "CIN" : "C987654", "skills" : [ "AWS", "SQL", "MongoDB", "Docker" ] } ;
   res.json(consultant);
});

 

app.listen(process.env.PORT || 3000, () => { 

  console.log('Server running'); 

}); 
