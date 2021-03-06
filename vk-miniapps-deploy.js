#!/usr/bin/env node
var chalk = require('chalk');
const fs = require('fs-extra');
const configFilePath = './vk-hosting-config.json';
const prompt = require('prompts');

async function run() {
  if (fs.pathExists(configFilePath).then((res) => {
    if (!res) {
      console.error(configFilePath + ' is missing');
      return false;
    }
  })) ;

  const configJSON = require('require-module')(configFilePath);
  if (!configJSON) {
    console.error(configFilePath + ' is missing');
    return false;
  }

  const deploy = require('../index');
  const cfg = configJSON || {};

  if (!cfg) {
    console.error('vk-hosting-config.json is missing');
    return false;
  }

  if (cfg.noprompt) {
    deploy.run(cfg);
  } else {
    prompt.message = chalk.cyan("vk-mini-apps-deploy:");
    prompt.delimiter = chalk.green(" $ ");

    const result = await prompt({
      type: 'confirm',
      initial: true,
      name: 'result',
      message: chalk.yellow('Would you like to deploy to VK Mini Apps hosting using these commands?')
    });

    if (result.result) {
      const status = await deploy.run(cfg) ? 0 : 1;
      process.exit(status);
    }
  }
}
run().then(r => console.log(r));