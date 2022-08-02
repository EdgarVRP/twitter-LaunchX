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
    test('3. Update username', ()=>{
        //Por Codificar...
        const user = UserService.create(1,'EdgarVRP','Edgar')
        UserService.updateUSerUSername(user,"EVRP")
        //Resultados Esperados
        expect(user.username).toBe('EVRP')
    });
    test('4. Given a list of users give me the list of usernames', ()=>{
        //Por Codificar...
        const user1 = UserService.create(1,'EdgarVRP','Edgar')
        const user2 = UserService.create(2,'Pako','Francisco')
        const user3 = UserService.create(3,'Vika','Veronica')
        const usernames=UserService.getAllUsernames([user1,user2,user3])
        //Resultados Esperados
        expect(usernames).toContain('EdgarVRP')
        expect(usernames).toContain('Pako')
        expect(usernames).toContain('Vika')
    });
 })