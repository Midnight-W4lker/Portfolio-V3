# Midnight Walker Portfolio

An immersive, game-map inspired personal portfolio for Muhammad Ali Abid. The site blends a dynamic canvas world, scroll-synced route navigation, project dossiers, ambient audio, dark/light visual modes, and a built-in editor for portfolio content.

## Highlights

- Dynamic world map with checkpoint lighting, visited route states, and smooth scroll progress.
- Canvas atmosphere with biome-specific particles, silhouettes, depth, and pointer response.
- Project cards with strategy summaries, generated embedding chips, expandable dossiers, and video anchors.
- Bottom HUD for audio, theme switching, portfolio editing, and map access.
- In-page portfolio editor for identity, projects, and skills.
- Dependency-free Node backend for portfolio JSON and contact messages.
- GitHub-ready structure with ignored QA artifacts and local archives.

## Preview

Run locally and open:

```text
http://localhost:3000
```

To open directly into the content editor:

```text
http://localhost:3000/?editor=1
```

## Tech Stack

- HTML, CSS, and vanilla JavaScript
- Canvas 2D animation
- Node.js built-in `http`, `fs`, and `path` modules
- JSON-powered content in `data/portfolio.json`

No framework and no install step are required.

## Project Structure

```text
.
|-- data/
|   `-- portfolio.json        # Editable portfolio content
|-- references/               # Design reference images
|-- archive/                  # Local legacy files, ignored by git
|-- index.html                # App shell
|-- style.css                 # Responsive visual system
|-- main.js                   # Canvas, map, editor, cards, and interactions
|-- server.js                 # Node server and JSON API
|-- package.json              # Scripts and project metadata
|-- .gitignore                # Runtime, QA, and local artifact ignores
|-- .gitattributes            # Line-ending and binary handling
|-- LICENSE                   # MIT license
`-- README.md
```

## Getting Started

```bash
npm start
```

Then visit:

```text
http://localhost:3000
```

If PowerShell blocks `npm.ps1` on Windows, use:

```powershell
npm.cmd start
```

## Scripts

```bash
npm start
```

Starts the local portfolio server.

```bash
npm run check
```

Checks JavaScript syntax for `main.js` and `server.js`.

On Windows PowerShell with restricted script execution, use:

```powershell
npm.cmd run check
```

## Editing Portfolio Content

Open `/?editor=1` to enter authoring mode and reveal the lower-left HUD editor button.

The editor supports:

- Name, alias, email, and bio
- Project title, tag, stack, description, and primary link
- Skill clusters
- JSON export
- Local reset

When the Node server is running, Save writes to `data/portfolio.json` through `PUT /api/portfolio`. If the server save is unavailable, the editor falls back to browser `localStorage`.

## API

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/portfolio` | Returns portfolio JSON. |
| `PUT` | `/api/portfolio` | Saves portfolio JSON locally. |
| `POST` | `/api/contact` | Stores contact messages in `data/messages.json`. |

## Deployment

Use any Node host that can run:

```bash
npm start
```

Static hosts can serve the frontend, but server-side editor saves and contact message storage require the Node server.

## GitHub Hygiene

The repository ignores:

- Browser QA profiles such as `.chrome-*`
- Generated screenshots such as `portfolio-*-check.png`
- Contact message archives
- `node_modules`
- Local legacy files in `archive/`

Before pushing, the useful root should stay focused on the active app files, `data/`, `references/`, and project metadata.

## License

MIT. See [LICENSE](LICENSE).
