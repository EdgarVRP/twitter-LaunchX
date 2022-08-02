const UserView = require('../../app/views/UserView')

describe("Test for UserView",()=>{
    test('1. Return an error object when try to create a new user with an null payload', ()=>{
        //Por Codificar...
        const payload=null
        const result=UserView.createUser(payload)
        //Resultados Esperados
        expect(result.error).toMatch(/payload no existe/)
    });

    test('2. Return an error object when try to create a new user with invalid properties', ()=>{
        //Por Codificar...
        const payload={username:null,name:12,id:'id'}
        const result=UserView.createUser(payload)
        //Resultados Esperados
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    });

    test('3. Return an error object when try to create a new user with missing properties', ()=>{
        //Por Codificar...
        const payload={username:'Username'}
        const result=UserView.createUser(payload)
        //Resultados Esperados
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    });
 })