const Subscription = require('./subscriptionsModel');

exports.getSubscriptions = function()
{
    return new Promise((resolve,reject) =>
    {
        Subscription.find({},function(err, subsData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(subsData)
            }
        })
    })
}

exports.getSubscription = function(id)
{
    return new Promise((resolve,reject) =>
    {
        Subscription.findById(id,function(err, subData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(subData)
            }
        })
    })
}

exports.addNewSubscription = function(sub) 
{   
    return new Promise((resolve, reject)=> 
    {
        let newSub = new Member(
            {
                member_id : sub.member_id,
                movie_id : sub.movie_id

            });
            
            newSub.save(function(err) {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("Subscription Created Successfully")
            }
            
        })
    }) 
}

exports.updateSubscription = function(id, subData)
{
    return new Promise((resolve,reject)=>
    {
        Subscription.findByIdAndUpdate(id,
            {
                member_id : sub.member_id,
                movie_id : sub.movie_id
                
            }, function (err) {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve("Subscription Upated Successfully")
                }
                
            })
    })
}

exports.deleteSubscription = function(id) 
{
    return new Promise((resolve,reject)=>
    {
        Subscription.findByIdAndDelete(id, function(err) 
        {
            if(err)
            {
                reject(err); 
            }
            else
            {
                resolve ("Subscription Deleted Successfully")
            }
        })
    })
    
}


