// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApps',(err,db)=>
{
  if(err){
    return console.log('unable to connect because of :'+err);
  }
  else {
    console.log('Connection is successful  : '+typeof(db));

    // db.collection('Todos').insertOne({
    //   text:'Something is insert inside',
    //   completed:false
    // }, (err, result)=>{
    //   if(err){
    //     console.log('Unable to insert data');
    //   }
    //   else {
    //     console.log(JSON.stringify(result.ops,undefined,2));
    //   }
    // })
    db.collection('Users').insertOne({
      name:'ankit dwivedi',
      age:25,
      location: 'Bangalore India'
    }, (err, result)=>{
      if(err){
        console.log('Unable to insert data');
      }
      else {
        console.log(JSON.stringify(result.ops,undefined,2));
      }
    })

    db.close();
  }
})
