---
title: Docker Basics
description: Introduction to Docker, containers, images, and how to use Docker effectively in development.
comments: true
---

# Docker 🐳

Docker allows developers to package applications and dependencies into isolated containers. This helps ensure consistent environments across different machines.

---

## 📦 What is Docker?

Docker is a containerization platform. You can think of containers like lightweight virtual machines, but faster and more efficient.

---

## 🔍 Key Concepts

1. **Image** – A snapshot of your app + environment (code, dependencies, OS).
2. **Container** – A running instance of an image.
3. **Dockerfile** – A set of instructions to build an image.
4. **Docker Hub** – A public registry for Docker images (like GitHub for containers).

---

## 🚀 Basic Commands

### 1. Check Docker is working:

```bash
docker --version
docker info
```

### 2. Run a container:

```bash
docker run hello-world
```

### 3. Pull an image:

```bash
docker pull node:18
```

### 4. Run a container with interactive shell:

```bash
docker run -it ubuntu bash
```

### 5. List running containers:

```bash
docker ps
```

### 6. List **all** containers:

```bash
docker ps -a
```

### 7. Stop and remove:

```bash
docker stop <container_id>
docker rm <container_id>
```

---

## 📄 Example: Node App with Docker

### 1. `Dockerfile`

```Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
```

### 2. Build and run

```bash
docker build -t my-node-app .
docker run -p 3000:3000 my-node-app
```

---

## 🧹 Clean up

```bash
docker system prune -a
```

> **Important:** This deletes unused images, containers, and networks!

---

## Video: Learn Docker Quickly

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
  <a href="https://www.youtube.com/watch?v=pTFZFxd4hOI" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/pTFZFxd4hOI/0.jpg" alt="Docker for Beginners" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">Docker Crash Course for Beginners 🐳</strong>
  </a>
</div>

---
