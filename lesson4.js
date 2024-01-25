function t(){
    alert("Touched!");
}


/*Geolocation API*/
const successCallback = (position) => {
    console.log(position);
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  /*Geolocation API*/