const todos = [{
    id: 1,
    task: "Finance",
    time: 1
  }, {
    id: 2,
    task: "Distribution",
    time: 1
  }, {
    id: 3,
    task: "Blah",
    time: 1
  }
];

const taskDuration = 5; // 5 instead of 60

async function startHandler() {
  for (const todo of todos) {
    console.log('Current todo', todo.task);
    await countDown(todo.time * taskDuration);
  }
}


startHandler();

function countDown(time) {
  function tick() {
    const min = Math.floor(time / 60);
    let sec = time - min * 60;

    if (sec < 10) {
      sec = "0" + sec;
    }

    const message = min.toString() + ":" + sec;

    console.log(message);

    time--;
  }
  const interval = setInterval(tick, 1000);
  return promiseSetTimeout(() => clearInterval(interval), time * 1000);
}

// Util function to call a function later, and return a Promise
function promiseSetTimeout(fun, time) {
  return new Promise(resolve => setTimeout(() => [fun, resolve].forEach(x => x.call()), time));
}