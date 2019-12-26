import { parse } from 'https://deno.land/std/flags/mod.ts'

const { help, name } = parse(Deno.args, {
  string: ['name'],
  boolean: ['help'],
  alias: {
    h: 'help'
  }
})

if (help) {
  console.log(`Usage: https://git.io/set-output.ts [-h, --help] [--name <name>]

Options:
  -h, --help       Show the help message and exit.
  --name <name>    Specify the name of the output. Default is "value".

Example:
  <your command> | deno set_output --name myparam

  This sets the output of your command to the output of the step in GitHub Actions.

Visit https://github.com/kt3k/set-output.ts for more examples.`)
  Deno.exit(0)
}

const decoder = new TextDecoder()
const input = decoder.decode(await Deno.readAll(Deno.stdin))

// ref: https://github.com/actions/toolkit/blob/e8d384d3afbb1f6ab7f173155ae0404242a34d80/packages/core/src/command.ts#L78
const escaped = input.replace(/\r/g, '%0D').replace(/\n/g, '%0A')

const output = `::set-output name=value::${escaped}`
console.log(output)
