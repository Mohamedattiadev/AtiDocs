---
title: n8n Docker Setup
description: Full guide to running, stopping, and persisting data for n8n using Docker, including backup and restore.
comments: true
---

# n8n Docker Setup

This README explains how to run, stop, and persist data for **n8n** using Docker.

---

## 1. Run n8n with persistent storage

```bash
docker run -d \
  --name n8n \
  --restart always \
  -p 5678:5678 \
  -v ~/.config/n8n:/home/node/.n8n \
  n8nio/n8n:latest
```

> - `--name n8n` → container name.
> - `--restart always` → auto-restart on reboot.
> - `-p 5678:5678` → maps n8n web UI to http://localhost:5678.
> - `-v ~/.config/n8n:/home/node/.n8n` → saves all workflows/credentials to your home folder.

### 1.1 Stop n8n

```bash
docker stop n8n
```

### 1.2 Start n8n again

```bash
docker start n8n
```

### 1.3 Check logs

```bash
docker logs -f n8n
```

### 1.4 Remove container (keeps data safe)

```bash
docker rm -f n8n
```

## 2. Removing the container does not delete your workflows.

- Data lives in `~/.config/n8n`. You can re-run `docker run ...` and pick up the same data.

> by creating a .tar.gz file and extraxte it u can backup and restore :

#### 2.1 Backup:

```bash
tar czf n8n_data_backup.tar.gz ~/.config/n8n
```

#### 2.2 Restore:

```bash
tar xzf n8n_data_backup.tar.gz -C ~/
sudo chown -R 1000:1000 ~/.config/n8n
```

> Then run the container again.

## Important Notes

> The `.config/n8n` folder contains:

> - `database.sqlite` → workflows & executions.
> - `.n8n.env` → encryption key for credentials.

> Always keep `.n8n.env` safe, otherwise credentials can’t be decrypted when restoring.

### Access n8n :

> Once running, open:

- http://localhost:5678
