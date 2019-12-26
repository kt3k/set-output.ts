const decoder = new TextDecoder()
const input = decoder.decode(await Deno.readAll(Deno.stdin))

// ref: https://github.com/actions/toolkit/blob/e8d384d3afbb1f6ab7f173155ae0404242a34d80/packages/core/src/command.ts#L78
const escaped = input.replace(/\r/g, '%0D').replace(/\n/g, '%0A')

// TODO: value from --name value
const output = `::set-output name=value::${escaped}`
console.log(output)
