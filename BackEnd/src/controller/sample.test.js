const userRepo = require('../repo/user-repo.js');

describe('Sample Test', () => {
    it('should test that true=true', async ()=> {
        const cUser = await userRepo.createUser({ username: 'huy', password: 'test1234', email: 'phanqhuy@gmail.com' });
        expect(cUser.username).toBe('huy');
    })
})