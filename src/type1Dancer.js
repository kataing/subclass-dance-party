var makeType1Dancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

};


makeType1Dancer.prototype = Object.create(makeDancer.prototype);
makeType1Dancer.prototype.constructor = makeType1Dancer;

var oldStep = makeDancer.prototype.step;

makeType1Dancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // console.log(this.step);

  // console.log(oldStep);
  oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.slideDown(); //change this for different functionality
};