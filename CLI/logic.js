const fetch = require('node-fetch')


const getAll = (id) => { 
   return fetch(`site I shouldn't share`)
    .then((res)=> res.json())
    .then((res)=>{
        let promisesArr = res.map((cur)=>{
            return fetch(`site I shouldn't share`)
                .then((res1) => res1.json())
                .catch((err)=>{console.log('INNER FETCH FAILED', err)});
        })
        return Promise.all(promisesArr)
        .then((res)=>{
            res = res.sort((a,b)=>{
                let AEngRate = (a.performance.comments+a.performance.likes)/a.snapshot.followers
                let BEngRate = (b.performance.comments+b.performance.likes)/b.snapshot.followers
                return AEngRate - BEngRate;
            }).filter((cur)=> {
                return ((cur.performance.comments+cur.performance.likes)/cur.snapshot.followers) >= 0.03
            }).map((cur)=>{
                if(cur.performance.comments === 0 && cur.likes >= 1000){
                    return "!" + cur.id.toString()
                } else {
                    return cur.id.toString()
                }
            })
            res = res.join(' , ')
            return res
        })
        .catch((err)=>{console.log('PROMISE CHAIN FAILED', err)});

    })
    .catch((err)=>{console.log('OUTTER FETCH FAILED', err)});
}


module.exports = { getAll }