'use strict';

const fields = {
  sampleField: { initialState: '', fastLookup: true }
};

const when = {
  async 'sampleContext.sampleAggregate.sampleEvent' (sampleList, event) {
    sampleList.add({
      // ...
    });
  }
};

module.exports = { fields, when };
