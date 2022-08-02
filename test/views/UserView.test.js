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
    
    test('4. Create a user by a given valid payload', ()=>{
        //Por Codificar...
        const payload={username:'username',id:1, name:'name'}
        const result=UserView.createUser(payload)
        //Resultados Esperados
        expect(result.name).toBe('name')
        expect(result.username).toBe('username')
        expect(result.id).toBe(1)
    });
 })