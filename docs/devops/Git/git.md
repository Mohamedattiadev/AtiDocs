---
title: Git Essentials for Developers
description: Learn the fundamental Git commands and concepts needed for daily development and collaboration.
comments: true
---

# Git Essentials for Developers

Git is a distributed version control system that tracks changes in source code. It’s the foundation for modern collaboration, CI/CD, and DevOps workflows.

---

## 1. What Is Git?

Git allows you to:

- Track and revert changes
- Work on different features safely
- Collaborate with others without overwriting work

You interact with Git using commands via the terminal or GUI tools like VS Code, GitHub Desktop, or Sourcetree.

---

## 2. Setting Up Git

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

These commands set your identity for all repositories on your machine.

---

## 3. Creating a Repository

### Initialize a new local repo:

```bash
git init
```

### Clone an existing repo:

```bash
git clone https://github.com/user/repo.git
```

---

## 4. Common Git Commands

### Track files:

```bash
git add filename       # add a single file
git add .              # add all changes
```

### Save a snapshot:

```bash
git commit -m "Describe your changes"
```

### View changes:

```bash
git status             # current working state
git diff               # see changes before committing
```

---

## 5. Working with Branches

### Create and switch:

```bash
git checkout -b feature-branch
```

### Merge into main:

```bash
git checkout main
git merge feature-branch
```

### Delete a branch:

```bash
git branch -d feature-branch
```

---

## 6. Pushing to Remote

### Connect your repo to GitHub:

```bash
git remote add origin https://github.com/user/repo.git
```

### Push your commits:

```bash
git push -u origin main
```

---

## 7. Pulling Changes

Always sync before working:

```bash
git pull origin main
```

This updates your local copy with the latest remote changes.

---

## 8. Resolving Merge Conflicts

When two changes clash, Git marks the conflict. You’ll need to manually edit the file and commit again.

**Important**: Conflicts are common — learn to read Git's conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).

---

## 9. Git Ignore

Use `.gitignore` to prevent committing unnecessary files:

```gitignore
node_modules/
dist/
.env
```

---

## ✅ Summary

- Git tracks your code history and enables safe collaboration.
- Use `add`, `commit`, and `push` daily.
- Branching and merging allow multiple features to be developed independently.
- `.gitignore` avoids bloating the repo with generated or sensitive files.

---

## 📺 Video: Git for Beginners

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
  <a href="https://www.youtube.com/watch?v=RGOj5yH7evk" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/RGOj5yH7evk/0.jpg" alt="Git & GitHub Crash Course" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">Git & GitHub Crash Course – Traversy Media</strong>
  </a>
</div>

---
