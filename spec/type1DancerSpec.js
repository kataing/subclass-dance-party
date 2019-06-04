describe('type1Dancer', function() {
  var type1Dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    type1Dancer = new makeType1Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(type1Dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a slideDown function that makes its node slide down', function() {
    sinon.spy(type1Dancer.$node, 'slideDown');
    type1Dancer.step();
    expect(type1Dancer.$node.slideDown.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(type1Dancer, 'step');
      expect(type1Dancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(type1Dancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(type1Dancer.step.callCount).to.be.equal(2);
    });
  });
});