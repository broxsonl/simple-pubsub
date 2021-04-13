'use strict';

module.exports = class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(action, callback) {
    if (!this.subscribers[action]) this.subscribers[action] = [];

    this.subscribers[action].push(callback);
  };

  publish(action, data) {
    if (!this.subscribers[action]) return console.log(`There are no subscribers for the action, ${action}`);

    this.subscribers[action].forEach((subscriberCallback) => {
      subscriberCallback(data);
    });
  }
}