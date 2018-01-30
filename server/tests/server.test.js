const {app} = require('./../server');
const {Todo} =require('./../model/todo');

const expect = require('expect');
const supertest = require('supertest');

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
    done();
  })
});

describe('POST /todo', ()=> {
  it('should create a new todo', (done)=> {
    var text = 'Test todo test';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
        return done(err);
      }

      Todo.find().then((todos)=>{
        expect(todos.lenght).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch(e)=>done(e);
    });
  });
});
