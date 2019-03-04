var path = require('path');
var fs = require('fs');
var friendsData = require("../app/data/friends");

module.exports = function(app){
    app.get("/api/friends",function(req,res){
        res.json(friendsData);
    });

app.post('/api/friends',function(req,res){
    var userInput = req.body;
    var userResponses = userInput.scores;
    for(var i=0;i<userInput.scores.length; i++){
        userInput.scores[i] = parseInt(userResponses[i])
    }

    var matchName = '';
    var matchPhoto = '';
    var totalDifference = 10000;
    for(var j=0;j<friendsData.length;j++){
        var eachDifference = 0;
        for(var i=o;j<userResponses.length;i++){
            var score = userResponses[i];
            eachDifference += Math.abs(friendsData[i].score[i] -score);
        }
        if(eachDifference<totalDifference){
            totalDifference = eachDifference;
            matchName = friendsData[i].name;
            matchPhoto = friendsData[i].photo;
        }
    }
    friendsData.push(userInput);
    res.json({status:'OK',matchName:matchName, matchPhoto:matchPhoto});
});
};