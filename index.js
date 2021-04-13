'use strict';

const PubSub = require('./PubSub');

let PS = new PubSub;

PS.subscribe('click', (data) => console.log(`This is data: ${data}`));
PS.subscribe('click', (data) => console.log(`This is ALSO data: ${data}`));
PS.subscribe('button', (data) => console.log(`Big ol button dataz: ${data}`));

PS.publish('click', 'banana');
PS.publish('button', 'pineapple');