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
    test('2. Get all user data in a list', ()=>{
        //Por Codificar...
        const user = UserService.create(1,'EdgarVRP','Edgar')
        const userInfoInList=UserService.getInfo(user)
        //Resultados Esperados
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe('EdgarVRP')
        expect(userInfoInList[2]).toBe('Edgar')
        expect(userInfoInList[3]).toBe('Sin bio')
    });
 })