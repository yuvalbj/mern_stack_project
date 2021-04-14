const Movie = require('./movieModel');

exports.getMovies = function()
{
    return new Promise((resolve,reject) =>
    {
        Movie.find({},function(err, moviesData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(moviesData)
            }
        })
    })
}

exports.getMovie = function(id)
{
    return new Promise((resolve,reject) =>
    {
        Movie.findById(id,function(err, movieData)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(movieData)
            }
        })
    })
}

exports.addNewMovie = function(mov) 
{   
    return new Promise((resolve, reject)=> 
    {
        let newMov = new Movie(
            {
                name : mov.name,
                genres : mov.genres,
                premiered: mov.premiered,
                image: mov.image

            });
            
            newMov.save(function(err) {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("Movie Created Successfully")
            }
            
        })
    }) 
}

exports.updateMovie = function(id, movData)
{
    return new Promise((resolve,reject)=>
    {
        Movie.findByIdAndUpdate(id,
            {
                name : movData.name,
                genres : movData.genres,
                premiered: movData.premiered,
                image: movData.image
            }, function (err) {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve("Movie Upated Successfully")
                }
                
            })
    })
}

exports.deleteMovie = function(id) 
{
    return new Promise((resolve,reject)=>
    {
        Movie.findByIdAndDelete(id, function(err) 
        {
            if(err)
            {
                reject(err); 
            }
            else
            {
                resolve ("Movie Deleted Successfully")
            }
        })
    })
    
}


