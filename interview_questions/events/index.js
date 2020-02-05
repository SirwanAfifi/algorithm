class Events {
  // Register an event handler
  on(eventName, callback) {}

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {}

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {}
}

module.exports = Events;
