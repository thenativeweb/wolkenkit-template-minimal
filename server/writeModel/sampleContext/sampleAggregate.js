'use strict';

const initialState = {
  sampleState: undefined,
  isAuthorized: {
    commands: {
      sampleCommand: { forPublic: true }
    },
    events: {
      sampleEvent: { forPublic: true }
    }
  }
};

const commands = {
  sampleCommand (sampleAggregate, command, mark) {
    sampleAggregate.events.publish('sampleEvent', {
      // ...
    });

    mark.asDone();
  }
};

const events = {
  sampleEvent (sampleAggregate, event) {
    sampleAggregate.setState({
      // ...
    });
  }
};

module.exports = { initialState, commands, events };
