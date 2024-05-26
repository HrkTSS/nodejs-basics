const { log } = require("console");

setTimeout(() => {
  log("timer 1");
}, 0);
setTimeout(() => {
  log("timer 2");
  process.nextTick(() => {
    log("Next tick inside timer 2");
  });
}, 0);
setTimeout(() => {
  log("timer 3");
}, 0);

process.nextTick(() => {
  log("next tick 1");
});
process.nextTick(() => {
  log("next tick 2");
  process.nextTick(() => {
    log("inner from next tick 2");
  });
});
process.nextTick(() => {
  log("next tick 3");
});

Promise.resolve().then(() => {
  log("Promise 1");
});
Promise.resolve().then(() => {
  log("Promise 2");
  process.nextTick(() => {
    log("inner from promise 2");
  });
});
Promise.resolve().then(() => {
  log("Promise 3");
});
