## Run locally

Prerequisite: Node.js.

```sh
npm install
npm run dev
```

## Build and deploy

```sh
npm run build
```

Deploy the generated `dist` directory to any static web host. The build uses relative asset paths, so it can also be served from a subdirectory. Configure your host to serve `index.html` for unknown routes if you add client-side routes.
