---
title: GitHub Workflows and Collaboration
description: Learn how to use GitHub for branching, pull requests, collaboration, and automation with practical steps.
comments: true
---

# GitHub Workflows and Collaboration

GitHub is more than just a place to store code. It’s a collaboration platform for teams, open-source contributors, and automation.

---

## 1. Getting Started

To begin using GitHub:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Use SSH for secure authentication, or use personal access tokens for HTTPS.

---

## 2. Fork vs Clone

**Clone**  
Use when you want a local copy of a repo you already have access to:

```bash
git clone https://github.com/user/repo.git
```

**Fork**  
Creates a copy of someone else’s repo under your GitHub account. Useful when contributing to public projects.

**Important**: After forking, keep your fork updated by adding the original as an `upstream` remote:

```bash
git remote add upstream https://github.com/original/repo.git
git fetch upstream
git merge upstream/main
```

---

## 3. Pull Request Workflow

Steps:

1. Create a new branch:

   ```bash
   git checkout -b feature/your-branch-name
   ```

2. Make changes and commit:

   ```bash
   git add .
   git commit -m "Add new feature"
   ```

3. Push the branch:

   ```bash
   git push origin feature/your-branch-name
   ```

4. Open a Pull Request on GitHub and request a code review.

**Important**: Avoid pushing directly to `main`. Always use branches and PRs.

---

## 4. Branch Protection Rules

Organizations often protect the `main` or `production` branch by requiring:

- Pull request reviews before merging
- Passing CI checks (like tests and linting)
- Preventing force-pushes or deletions

Set up in `Repo Settings → Branches → Add Rule`.

---

## 5. Issues & Discussions

### Issues

Used to report bugs, request features, or assign tasks.

You can:

- Label them (`bug`, `enhancement`, etc.)
- Assign team members
- Link them to pull requests

### Discussions

Used for general Q&A, design proposals, or announcements.

---

## 6. GitHub Actions (Preview)

GitHub Actions automate workflows like:

- Running tests on PRs
- Linting before merge
- Auto-deploying after merge

Workflows are defined in:

```yml
.github/workflows/main.yml
```

This will be covered in more depth in the next section.

---

## 7. Real-World Workflow

1. Clone the repo
2. Create a new branch
3. Make changes
4. Push the branch
5. Open a pull request
6. Code is reviewed and CI is triggered
7. Merge once approved

---

## Video: GitHub Workflow Tutorial

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
  <a href="https://www.youtube.com/watch?v=iv8rSLsi1xo" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/iv8rSLsi1xo/0.jpg" alt="GitHub Workflows Explained" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">GitHub Workflow for Teams – The Net Ninja</strong>
  </a>
</div>

---

## Summary

- Use branches and PRs to manage code collaboratively.
- Fork for contributing to public repos.
- Enable branch protections to safeguard your main branch.
- Use issues and discussions for team communication.
- Next: Learn to automate workflows with GitHub Actions.

---
