var request = require('request')

describe('get message',()=>{
    it('should return 200 ok',(done) =>{
        request.get('http://localhost:3000/messages',(err,res)=>{
            expect(res.statusCode).toEqual(200)
            done()
        })
    })
})