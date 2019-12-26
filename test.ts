import { test } from 'https://deno.land/std/testing/mod.ts'
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'

const fixture = `foo foo
bar bar
baz baz`

test('The script formats the stdin', async () => {
  const p = Deno.run({
    args: [Deno.execPath(), '--reload', 'main.ts'],
    stdin: 'piped',
    stdout: 'piped',
  })

  await Deno.writeAll(p.stdin, new TextEncoder().encode(fixture))
  p.stdin.close()

  assertEquals((new TextDecoder().decode(await p.output())).trim(), '::set-output name=value::foo foo%0Abar bar%0Abaz baz')
})
