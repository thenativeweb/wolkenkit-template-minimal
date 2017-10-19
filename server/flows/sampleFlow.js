'use strict';

const when = {
  'sampleContext.sampleAggregate.sampleEvent' (event, mark) {
    // ...

    mark.asDone();
  }
};

module.exports = { when };
