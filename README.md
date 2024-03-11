# Linux, Caddy, MySQL, NodeJS

Technology stack for develop NodeJS projects.

## Directory Stucture

```txt
|- app   : NodeJS Application, clone this directory for each app
   |- Dockerfile
|- mysql : MySQL Server
|- caddy : Caddy Server
```

## Commands

Build image and start docker containers

```bash
docker compose up --build
```

Stop docker containers and remove volumes.

```bash
docker compose down -v
```

## Environment Variables

| ENV                 | Desc |
| ------------------- | ---- |
| MYSQL_ROOT_PASSWORD |      |
| MYSQL_DATABASE      |      |
| MYSQL_USER          |      |
| MYSQL_PASSWORD      |      |
| APP_PORT            |      |

By default, you can:

- Access to caddy server by: `localhost:8080`.
- Access to adminer server by: `localhost:8081`.

## Notes

- Do not use this on the production environment.

## License

MIT.
