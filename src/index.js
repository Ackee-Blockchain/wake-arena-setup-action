const exec = require('@actions/exec');
const core = require('@actions/core');

async function run() {
  try {
    // Install Python and pip
    await exec.exec('sudo apt-get update');
    await exec.exec('sudo apt-get install -y python3 python3-pip');

    // Install eth-wake
    await exec.exec('pip3 install wake-arena-cli');

  } catch (error) {
    console.error(`Action failed with error ${error}`);
    process.exit(1);
  }
}

run();