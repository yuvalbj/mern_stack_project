const mongoose = require('mongoose');

let subscriptionSchema = mongoose.Schema;

let SubscriptionSchema = new subscriptionSchema({
    member_id : String,
    movie_id :String,
    date: String
    
});

module.exports = mongoose.model('subscriptions',SubscriptionSchema);