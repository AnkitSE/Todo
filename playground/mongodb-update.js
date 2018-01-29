// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApps',(err,db)=>
{
  if(err){
    return console.log('unable to connect because of :'+err);
  }
  else {
    console.log('Connection is successful  : '+typeof(db));
    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a6aad018a56dc12a0cb4f46')
    },{
      $set:{
        completed:true,
        name: 'Ankit'
      },
      $inc:{
        age: 1
      }
    },
  {
    returnOriginal: false
  }).then((doc)=>{
      console.log(JSON.stringify(doc,undefined,2));
      //console.log(doc);
      })
    //  db.close();
  }



});
