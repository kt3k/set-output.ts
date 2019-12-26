# set_output

A utility for setting output of the steps of GitHub Actions

# Usage

If you have a command and you want to set the output of the command as the output of the step of GitHub Actions, then this tool works for you.

```yml
steps:
  - uses: actions/checkout@master
  - uses: denolib/setup-deno@v1.1.0
    with:
      deno-version: 0.x
  - run: <your command> | deno https://raw.githubcontent.com/.../main.ts
    id: mystep
  - run: echo ${{ steps.mystep.output.value }}
```

In the above example, the output of `<your command>` is stored in `steps.mystep.output.value` and you can use it in later steps.

# TODO

- [ ] make the name of the output configurable

# License

MIT
