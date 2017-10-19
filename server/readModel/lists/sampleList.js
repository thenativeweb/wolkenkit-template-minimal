'use strict';

const fields = {
  sampleField: { initialState: '', fastLookup: true }
};

const when = {
  'sampleContext.sampleAggregate.sampleEvent' (sampleList, event, mark) {
    sampleList.add({
      // ...
    });

    mark.asDone();
  }
};

module.exports = { fields, when };
