var should = require('should');
var sinon = require('sinon');
require('should-sinon');
var message = require('../../functions/events/message/__main__');

describe('team_join', () => {
  it('should respond to something stupid', (done) => {
    var callback = sinon.spy();
    var user = {
      name: 'username'
    }
    var event = {}

    team_join('username', 'hacknight', 'something stupid', event, null, callback);
    callback.should.be.calledOnce();
    callback.getArgs().args.should.deepEqual([
      null, {
        text: `:facepalm:`
      }
    ]);

    done();
  });
});
