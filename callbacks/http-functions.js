var https = require('https')

function getHTML(options, callback) {
  https.get(options, function (response) {

    var dataString = "";

    response.on('data', function (data) {
      // adding data to empty string variable and convert to string
      dataString += data.toString();
    });

    response.on('end', function () {
      console.log("end")
      callback(dataString);
    });

  });
}

function printHTML(html) {
  console.log(html);
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
// getHTML(requestOptions, printHTML);

module.exports = {
  getHTML: getHTML
};