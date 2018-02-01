/* GET 'home' page */
const homelist = function (req, res, next) {
  res.render('locations-list', { title: 'Home' });
}

/* GET 'Location info' page */
const locationInfo = function (req, res, next) {
    res.render('index', { title: 'Location info' });
}

/* GET 'Add review' page */
const addReview = function (req, res, next) {
    res.render('index', { title: 'Add review' });
}

module.exports = {
    homelist,
    locationInfo,
    addReview
};