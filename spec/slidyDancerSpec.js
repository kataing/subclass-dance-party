describe('slidyDancer', function() {
  var slidyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidyDancer = new makeslidyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slidyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a slideDown function that makes its node slide down', function() {
    sinon.spy(slidyDancer.$node, 'slideDown');
    slidyDancer.step();
    expect(slidyDancer.$node.slideDown.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slidyDancer, 'step');
      expect(slidyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slidyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slidyDancer.step.callCount).to.be.equal(2);
    });
  });
});