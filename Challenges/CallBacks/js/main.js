getRandomUser = (callback) => {
    // This function uses AJAX to hit the random user API.
    // More info: https://randomuser.me

    var request = new XMLHttpRequest();
    request.open('GET', 'https://randomuser.me/api/', true);
    request.onload = function () {
      /* You'll start here */
      //console.log(request);
      //console.log(JSON.parse(request.response));
      return callback(JSON.parse(request.response));
      //console.log(c);
    };
    request.send();
    //return callback();
  }
  
  function parseRandomUser(err, response){
    if(err) {
        console.log('Unknown Error');
        return;
    }
   console.log(response.results[0]);
  }

  getRandomUser(parseRandomUser); // Execute the function