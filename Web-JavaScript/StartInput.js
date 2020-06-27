const repl = require('repl');

repl.start({
  prompt: "<입력하십시요.>",
  eval: (command, context, filemane, callback) => {
    console.log(command);

    callback();
  }
});
