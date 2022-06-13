let images = {
  codehance: [
    "images/codehance1.png",
    "images/codehance2.png",
    "images/codehance3.png",
    "images/codehance4.png",
  ],
  londonFitness: [
    "images/ldn-fitness1.png",
    "images/ldn-fitness2.png",
    "images/ldn-fitness3.png",
    "images/ldn-fitness4.png",
    "images/ldn-fitness5.png",
    "images/ldn-fitness6.png",
    "images/ldn-fitness7.png",
  ],
  jobPlusVol1: [
    "images/jobplus-v1-1.png",
    "images/jobplus-v1-2.png",
    "images/jobplus-v1-3.png",
    "images/jobplus-v1-4.png",
  ],
  jobPlusVol2: [
    "images/jobplus-v2-1.png",
    "images/jobplus-v2-2.png",
    "images/jobplus-v2-3.png",
    "images/jobplus-v2-4.png",
  ],
  restaurant: [
    "images/restuarant-booking1.png",
    "images/restuarant-booking2.png",
    "images/restuarant-booking3.png",
    "images/restuarant-booking4.png",
    "images/restuarant-booking5.png",
    "images/restuarant-booking6.png",
    "images/restuarant-booking7.png",
  ],
  bankAnalytics: [
    "images/bank-data-analytics1.png",
    "images/bank-data-analytics2.png",
    "images/bank-data-analytics3.png",
    "images/bank-data-analytics4.png",
  ],
  spacestagram: [
    "images/spacestagram1.png",
    "images/spacestagram2.png",
    "images/spacestagram3.png",
  ],
};

let slider = (project) => {
  var start = 0;

  setInterval(() => {
    document.querySelector(`[js-tag=${project}]`).src = images[project][start];

    if (start < images[project].length - 1) {
      start++;
    } else {
      start = 0;
    }
  }, 2000);
};

slider("codehance");
slider("londonFitness");
slider("jobPlusVol1");
slider("jobPlusVol2");
slider("restaurant");
slider("bankAnalytics");
slider("spacestagram");
