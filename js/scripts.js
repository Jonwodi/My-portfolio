var start = 0;
var time = 3000;

let codehanceImages = ['images/codehance1.png', 'images/codehance2.png', 'images/codehance3.png', 'images/codehance4.png'];
let jobPlus1_Images = ['images/jobplus-v1-1.png', 'images/jobplus-v1-2.png', 'images/jobplus-v1-3.png', 'images/jobplus-v1-4.png'];
let ldnFitnessImages = ['images/ldn-fitness1.png', 'images/ldn-fitness2.png', 'images/ldn-fitness3.png', 'images/ldn-fitness4.png', 'images/ldn-fitness5.png', 'images/ldn-fitness6.png'];
let restaurantImages = ['images/restuarant-booking1.png', 'images/restuarant-booking2.png', 'images/restuarant-booking3.png', 'images/restuarant-booking4.png', 'images/restuarant-booking5.png'];



// function changeCodehanceImg() {
//   document.slide.src = codehanceImages[start];

//   if (start < codehanceImages.length - 1) {
//     start++;
//   } else {
//     start = 0;
//   }

//   setTimeout("changeCodehanceImg()", time);

// }

// window.onload = changeCodehanceImg;

// function changejobPlusVol1Img() {
//   document.jobplus1.src = jobPlus1_Images[start];

//   if (start < jobPlus1_Images.length - 1) {
//     start++;
//   } else {
//     start = 0;
//   }

//   setTimeout("changejobPlusVol1Img()", time);

// }

// window.onload = changejobPlusVol1Img;

// function changeLdnFitnessImg() {
//   document.ldn_slideshow.src = ldnFitnessImages[start];

//   if (start < ldnFitnessImages.length - 1) {
//     start++;
//   } else {
//     start = 0;
//   }

//   setTimeout("changeLdnFitnessImg()", time);

// }

// window.onload = changeLdnFitnessImg();

function changeRestaurantImg() {
  document.restaurant_slideshow.src = restaurantImages[start];

  if (start < restaurantImages.length - 1) {
    start++;
  } else {
    start = 0;
  }

  setTimeout("changeRestaurantImg()", time);

}

window.onload = changeRestaurantImg();