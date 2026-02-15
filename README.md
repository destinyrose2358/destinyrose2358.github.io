# Portfolio Site

## Features

### Route Registry - TODO

A React Component will be able to be tied to a specific route, allowing for focusing and parameter syncing. This relies on a Context/Provider pattern, and the end result is dynamic URLs as the user navigates. No history, other than the initial url, is preserved in order to keep history clean.

All urls follow the format of `{base url}/{section name}/{sub section name}/.../`

```text
https://destinyrose2358.github.io
├─/                     ↔ Header
├─/about                ↔ About Me
├─/skills               ↔ Skills
│   └─/{skill name}     ↔ Project By Skill
├─/projects             ↔ Projects
│   └─/{project name}   ↔ Project Embed Modal
├─/contacts ↔ Contacts
```

### Github Integration - TODO

Using `octokit/rest` and Github Actions, this website will fully integrate with Github, to allow for dynamic UI/UX within a static page.
