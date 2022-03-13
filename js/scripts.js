var start = 0;

var time = 3000;

let images = [
  ['images/codehance1.png', 'images/codehance2.png', 'images/codehance3.png', 'images/codehance4.png'],
  ['images/csv-film-reader1.png', 'images/csv-film-reader2.png']
  ['images/ldn-fitness1.png', 'images/ldn-fitness2.png', 'images/ldn-fitness3.png', 'images/ldn-fitness4.png', 'images/ldn-fitness5.png', 'images/ldn-fitness6.png'],
  ['images/jobplus-v1-1.png', 'images/jobplus-v1-2.png', 'images/jobplus-v1-3.png', 'images/jobplus-v1-4.png'],
  ['images/jobplus-v2-1.png', 'images/jobplus-v2-2.png', 'images/jobplus-v2-3.png', 'images/jobplus-v2-4.png'],
  ['images/restuarant-booking1.png', 'images/restuarant-booking2.png', 'images/restuarant-booking3.png', 'images/restuarant-booking4.png', 'images/restuarant-booking5.png'],];

function changeImg() {
  let codehance = () => {
    document.slide1.src = images[0][start];

    if (start < images[0].length - 1) {
      start++;
    } else {
      start = 0;
    }
    
    setTimeout(codehance,2000);
  }

  let filmReader = () => {
    document.slide2.src = images[1][start];

    if (start < images[1].length - 1) {
      start++;
    } else {
      start = 0;
    }

    // setTimeout(filmReader, 3000);
  }

  let ldnFitness = () => {
    document.slide3.src = images[2][start];

    if (start < images[2].length - 1) {
      start++;
    } else {
      start = 0;
    }

    setTimeout(ldnFitness, 2000);
  }

  let jobPlusVol1 = () => {
    document.slide4.src = images[3][start];

    if (start < images[3].length - 1) {
      start++;
    } else {
      start = 0;
    }

    setTimeout(jobPlusVol1, 3000);
  }

  let jobPlusVol2 = () => {
    document.slide5.src = images[4][start];

    if (start < images[4].length - 1) {
      start++;
    } else {
      start = 0;
    }

    setTimeout(jobPlusVol2, 3000);
  }

  let restaurant = () => {
    document.slide6.src = images[5][start];

    if (start < images[5].length - 1) {
      start++;
    } else {
      start = 0;
    }

    setTimeout(restaurant, 3000);
  }

  function slideShow1() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(codehance())
        });
      });
    }

  function slideShow3() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(ldnFitness())
        }, 16000);
      });
    }

  (async () => {
    try {
      await slideShow1();
      // await slideShow3();
    } catch (err) {
      console.log(err);
    }
  })();
 

  // codehance();
  // filmReader();
  // ldnFitness();
  // jobPlusVol1();
  // jobPlusVol2();
  // restaurant();
}





// $slider1.on("mouseover", changeImg () {
//   codehance();
// });

$(function() {
  changeImg();
});
  