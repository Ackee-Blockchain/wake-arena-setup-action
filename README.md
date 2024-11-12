# Wake Arena Setup GitHub Action

A GitHub action to set up an environment on the runner for the usage of Wake Arena in subsequent steps.

## Usage

To use this action in your GitHub workflows, you can refer to it in your workflow file. Here is an example of how to use it in a workflow:

```yaml
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Wake environment
        uses: Ackee-Blockchain/wake-arena-setup-action@0.1.1

      - name: Wake up
        run: wake-arena --help
```

In the above example, the action is used after the code is checked out to set up an environment (install Wake Arena) and in the last step the `wake` command is executed.
