describe('type2Dancer', function() {
  var type2Dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    type2Dancer = new makeType2Dancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(type2Dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a fadeToggle function that makes its node twinkle', function() {
    sinon.spy(type2Dancer.$node, 'fadeToggle');
    type2Dancer.step();
    expect(type2Dancer.$node.fadeToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(type2Dancer, 'step');
      expect(type2Dancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(type2Dancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(type2Dancer.step.callCount).to.be.equal(2);
    });
  });
});