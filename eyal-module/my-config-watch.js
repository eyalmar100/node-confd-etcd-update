const Config = require("config-watch");
const fs = require('fs');
const filePath = "config/my-config.json";
 


config = new Config("config/my-config.json");




var json;
file = fs.readFileSync(filePath);
json = JSON.parse(file);


exports.get = function(name) {
 // console.log("inside module (config):"+config.get(name));
  console.log("inside module (json) :"+json[name]); 
}
fs.watchFile(filePath, { persistent: true, interval: 100 }, function() {
    console.log('File Changed ...');
//    console.log("Config changed. The new config is:", config.get());
    file = fs.readFileSync(filePath);
 //   config.get();
    json = JSON.parse(file);
 //   console.log("k4  (using config) is now :"+config.get('k4'));
  //  console.log("k4  (using json) is now :"+json.k4);
    console.log('File content at : ' + new Date() + ' is \n' + file);
});


