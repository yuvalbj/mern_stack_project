const User = require('./userModel');

exports.getUsers = function()
{
    return new Promise((resolve,reject) =>
    {
        User.find({},function(err, usersData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(usersData)
            }
        })
    })
}

exports.getUser = function(id)
{
    return new Promise((resolve,reject) =>
    {
        User.findById(id,function(err, userData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(userData)
            }
        })
    })
}

exports.addNewUser = function(usr) 
{   
    return new Promise((resolve, reject)=> 
    {
        let newUSer = new User(
            {
                fullname : usr.fullname,
                username : usr.username,
                password: usr.password

            });
            
        newUSer.save(function(err) {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("User Created Successfully")
            }
            
        })
    }) 
}

exports.updateUser = function(id, userData)
{
    return new Promise((resolve,reject)=>
    {
        User.findByIdAndUpdate(id,
            {
                fullname : userData.fullname,
                username : userData.username,
                password: userData.password
            }, function (err) {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve("User Upated Successfully")
                }
                
            })
    })
}

exports.deleteUser = function(id) 
{
    return new Promise((resolve,reject)=>
    {
        User.findByIdAndDelete(id, function(err) 
        {
            if(err)
            {
                reject(err); 
            }
            else
            {
                resolve ("User Deleted Successfully")
            }
        })
    })
    
}


