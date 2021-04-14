const Member = require('./memberModel');

exports.getMembers = function()
{
    return new Promise((resolve,reject) =>
    {
        Member.find({},function(err, membersData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(membersData)
            }
        })
    })
}

exports.getMember = function(id)
{
    return new Promise((resolve,reject) =>
    {
        Member.findById(id,function(err, memberData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(memberData)
            }
        })
    })
}

exports.addNewMember = function(mem) 
{   
    return new Promise((resolve, reject)=> 
    {
        let newMem = new Member(
            {
                name: mem.name,
                email : mem.email,
                city : mem.city

            });
            
            newMem.save(function(err) {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("Member Created Successfully")
            }
            
        })
    }) 
}

exports.updateMember = function(id, memData)
{
    return new Promise((resolve,reject)=>
    {
        Member.findByIdAndUpdate(id,
            {
                name: memData.name,
                email : memData.email,
                city : memData.city
                
            }, function (err) {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve("Member Updated Successfully")
                }
                
            })
    })
}

exports.deleteMember = function(id) 
{
    return new Promise((resolve,reject)=>
    {
        Member.findByIdAndDelete(id, function(err) 
        {
            if(err)
            {
                reject(err); 
            }
            else
            {
                resolve ("Member Deleted Successfully")
            }
        })
    })
    
}


