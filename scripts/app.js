(function () {
    var Random = require('./utils/random-generator');
   var rng = new Random(0, 199);
   console.log(rng.generate());
} ());