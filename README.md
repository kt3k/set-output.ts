# set-output.ts

<img src="https://github.com/kt3k/set-output.ts/workflows/Test/badge.svg" />

> A utility for setting output of the steps of GitHub Actions

# Usage

If you have a command and you want to set the output of the command as the output of the step of GitHub Actions, then this tool works for you.

```yml
steps:
  - uses: actions/checkout@master
  - uses: denolib/setup-deno@v1.1.0
  - run: <your command> | deno https://git.io/set-output.ts --name myparam
    id: mystep
  - run: echo ${{ steps.mystep.output.myparam }}
```

In the above example, the output of `<your command>` is stored in `steps.mystep.output.myparam` and you can use it in later steps.

## CLI Detail

```
Usage: https://git.io/set-output.ts [-h, --help] [--name <name>]

Options:
  -h, --help       Show the help message and exit.
  --name <name>    Specify the name of the output. Default is "value".

Example:
  <your command> | deno set_output --name myparam

  This sets the output of your command to the output of the step in GitHub Actions.
```

# License

MIT
