# AI Governance Demo (Insurance)

## Run locally

```bash
node server.js
```

Open `http://localhost:3000`.

## Deploy to Railway

Railway can run this as a simple Node app with no dependencies.

1) Create a new repo (optional but recommended)
```bash
git init
git add .
git commit -m "Initial demo"
```

2) Create a Railway project and deploy
```bash
railway login
railway init
railway up
```

Railway will detect `package.json` and use `npm start`.

If you prefer the dashboard:
- New Project → Deploy from GitHub repo
- Set start command: `npm start`
- Ensure a Node runtime is selected (default is fine)

## Customize
- Update copy and data in `app.js`
- Style tweaks in `styles.css`
- Layout changes in `index.html`
