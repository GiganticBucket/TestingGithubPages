let api = window["emoteWallAPI"];

console.log("Hi from imported js 1");

api.registerPlugin({name: "TestPlugin1"});

console.log("Hi from imported js 2");

window["emoteWallAPI"].registerPlugin({name: "TestPlugin2"});

console.log("Hi from imported js 3");

emoteWallAPI.registerPlugin({name: "TestPlugin3"});

console.log("Hi from imported js 4");
