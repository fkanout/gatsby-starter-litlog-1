#!/usr/bin/env node

const program = require('commander');
const script = require("./script")

program
  .action(function(slug, comment) {
    script.run("updated", slug, comment);
  });

program
  .parse(process.argv);

// console.log(program.args);