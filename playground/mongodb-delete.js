// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApps',(err,db)=>
{
  if(err){
    return console.log('unable to connect because of :'+err);
  }
  else {
    console.log('Connection is successful  : '+typeof(db));
    //  db.close();
  }

  db.collection('Todos').findOneAndDelete({text : 'Something is insert insides'}).then((doc)=>{
    console.log(JSON.stringify(doc,undefined,2));
    //console.log(doc);
    })
});
