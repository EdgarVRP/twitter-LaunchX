const UserService = require('../../app/services/UserService')

describe("Test for UserService",()=>{
    test('1. Create a new user using the UserService', ()=>{
        //Por Codificar...
        const user = UserService.create(1,'EdgarVRP','Edgar')
        //Resultados Esperados
        expect(user.id).toBe(1)
        expect(user.username).toBe('EdgarVRP')
        expect(user.name).toBe('Edgar')
        expect(user.bio).not.toBeUndefined()
    });
 })