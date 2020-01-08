# set-output.ts

<img src="https://github.com/kt3k/set-output.ts/workflows/Test/badge.svg" />

> A utility for setting the output of a step of GitHub Action

# Usage

You can set the output of a step of GitHub Action by the following command.

```
cat YOUR_OUTPUT | deno https://git.io/set-output.ts
```

https://git.io/set-output.ts reads the stdin and outputs the directive for setting the output for a step of GitHub Action.

For example, you can see the example output like the below:

```
echo hello world | deno https://git.io/set-output.ts
```

This outputs `::set-output name=value::hello world`. If your output has linebreaks, this script escapes it appropriately.

# Example

Here's an example set up of GitHub Action.

```yml
steps:
  - uses: actions/checkout@master
  - uses: denolib/setup-deno@v1.1.0
  - run: <your command> | deno https://git.io/set-output.ts
    id: mystep
  - run: echo ${{ steps.mystep.output.myparam }}
```

In the above example, the output of `<your command>` is stored in `steps.mystep.output.value` and you can use it in later steps.

## CLI Detail

You can see the help message with the command `deno https://git.io/set-output.ts -h`.

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
