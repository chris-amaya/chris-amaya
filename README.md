# Monorepo

This monorepo was created as a basic template for common projects using

- Node - Express - Typescript
- React - CRA - Typescript
- Eslint as lint project
- Prettier as formatter
- Docker for dockerize packages

## Usage

1. **Clone this repository**

2. **Setup:**

   1. **custom name package** if you want to use any export from any package in
      the `packages` folder, (e.g)

      ```typescript
      import {customFunction} from '@my-app/custom-package'
      ```

      you have to consider to change the name property of all `package.json`
      files in `packages` folder and replace them like this.

      ```json
      "name": "@nice-project/custom-package"
      ```

      so now you can import your package like this

      ```typescript
      import {customFunction} from '@nice-project/custom-package'
      ```

   2. **root scripts** you can run scripts of all packages from root modifing
      the root `package.json` file.
      ```json
      "scripts": {
        "mypackage:start": "yarn workspace @my-project/my-package start",
      }
      ```

3. **Installation**

```shell
    yarn
```

## Notes

this repository can use docker, to use it, just run this commands

Build the project with docker-compose

```console
docker-compose build
```

Run the projects separatedly

```console
docker-compose up backend
```

```console
docker-compose up frontend
```

## Task List

- [ ] Run scripts before installation so step 2 is automated
- [ ] Improve docker files
