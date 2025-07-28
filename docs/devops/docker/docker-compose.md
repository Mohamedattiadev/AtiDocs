---
title: Docker Compose Guide
description: Learn how to define and manage multi-container applications using Docker Compose.
comments: true
---

# ⚙️ Docker Compose — Simplifying Multi-Container Dev Environments

Docker Compose allows you to **define, configure, and manage** multiple Docker containers using a single file (`docker-compose.yml`). It's ideal for microservices, full-stack apps, databases, and local development workflows.

---

## 📘 What is `docker-compose.yml`?

It’s a YAML file where you:

- Declare your services (web, db, redis, etc.)
- Set up networks, volumes, and environment variables
- Control how your containers connect and depend on each other

### ✅ Example

```yaml
version: "3.8"

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: myuser
      POSTGRES_PASSWORD: mypass
      POSTGRES_DB: mydb
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```

> This sets up a Node.js app (`web`) that connects to a Postgres database (`db`) with persistent data.

---

## 🧠 Why Use Docker Compose?

- 🔗 Simplifies multi-container setup
- 🧪 Makes testing environments reproducible
- 📦 Supports volume mounting and networking
- ⏱ Speeds up onboarding and dev workflows

---

## Common Commands

| Action                 | Command                        |
| ---------------------- | ------------------------------ |
| Start services         | `docker-compose up`            |
| Start in background    | `docker-compose up -d`         |
| Stop & remove services | `docker-compose down`          |
| Remove with volumes    | `docker-compose down -v`       |
| Build services         | `docker-compose build`         |
| View logs              | `docker-compose logs -f`       |
| Access a container     | `docker-compose exec web bash` |

> 💡 Use `--profile` or `.env` files to enable more advanced setups.

---

## 🎥 Video: Docker Compose

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
  <a href="https://www.youtube.com/watch?v=Qw9zlE3t8Ko" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/Qw9zlE3t8Ko/0.jpg" alt="Docker Compose Tutorial" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">Docker Compose </strong>
  </a>
</div>

---
