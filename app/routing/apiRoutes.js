var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){
	app.get("/api/friends",function(request,response){
		response.json(friends);
	});

	app.post("/api/friends",function(request,response){
		var userMatch ={
			name :"",
			photo :"",
			scoreDifference : Infinity
		};
		var currentUser=request.body;
		var userScore =currentUser.scores;
		console.log("currentUser: "+ currentUser.name + "  "+ Math.abs(parseInt(userScore))+"\n");

		for(var i = 0; i < friends.length;i++){
			var currentFriend = friends[i];
			var difference = 0;
			for (var j = 0; j<currentFriend.scores.length; j++){
			var currentFriendScore= currentFriend.scores[j];
			var currentUserScore= userScore[j];

			difference += Math.abs(parseInt(currentUserScore)-parseInt(currentFriendScore));
			console.log("Current Friend: "+ currentFriend.name);
			console.log("Friend Score: "+ currentFriendScore);
			console.log("Current User score:"+ currentUserScore);
			console.log("Total difference: "+difference);
			console.log("\n");
		}
		
		
		if(difference <= userMatch.scoreDifference){
			userMatch.name = currentFriend.name;
			userMatch.photo=currentFriend.photo;
			userMatch.scoreDifference=difference;
			}
		}
		friends.push(request.body);
		response.json(userMatch);
		console.log(userMatch);
		console.log(difference);
	})
};