const UserView = require('../../app/views/UserView')

describe("Test for UserView",()=>{
    test('1. Return an error object when try to create a new user with an null payload', ()=>{
        //Por Codificar...
        const payload=null
        const result=UserView.createUser(payload)
        //Resultados Esperados
        expect(result.error).toMatch(/payload no existe/)
    });
 })