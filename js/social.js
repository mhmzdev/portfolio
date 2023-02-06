var data = require('../data/data.json');
const social = data['social'];

for (var i = 0; i < social.length; i++) {
    console.log(social[i]["value"]);
}