var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {

    var dataString = "";

    response.on('data', function (data) {
      // adding data to empty string variable and convert to string
      dataString += data.toString();
    });

    response.on('end', function () {
      console.log("end")
      console.log(dataString);
    });

  });

}

getAndPrintHTML();