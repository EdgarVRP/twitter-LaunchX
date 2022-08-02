const User = require('../../app/models/user')

 describe("Unit Test for User class",()=>{
    test('create an User object', ()=>{
        const user=new User(1,'EdgarVRP','Edgar','Bio')
        
        //Resultados Esperados
        expect(user.id).toBe(1)
        expect(user.username).toBe('EdgarVRP')
        expect(user.name).toBe('Edgar')
        expect(user.bio).toBe('Bio')
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('Add getters',()=>{
        const user=new User(1,'EdgarVRP','Edgar','Bio')
        expect(user.getUsername).toBe('EdgarVRP')
        expect(user.getBio).toBe('Bio')
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
 })