#!/usr/bin/env node

const program = require('commander');
const script = require("./script")

program
  .action(function(slug, comment, timestamp) {
    script.run("updated", slug, comment, timestamp);
  });

program
  .parse(process.argv);

// console.log(program.args);