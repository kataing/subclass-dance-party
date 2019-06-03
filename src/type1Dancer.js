var type1Dancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps)

};


type1Dancer.prototype = Object.create(makeDancer.prototype);
type1Dancer.prototype.constructor = type1Dancer;

var oldStep = makeDancer.prototype.step;

type1Dancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log(this.step);

  // console.log(oldStep);
  oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.slideDown(); //change this for different functionality
};