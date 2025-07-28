---
title: Neovim Config (Lazy.nvim Setup)
description: Quick overview and installation guide for my Neovim configuration using Lazy.nvim, located in the arch-config branch of my dotfiles.
comments: true
---

# Neovim Config (Lazy.nvim Setup)

This is my personal Neovim setup, built with the modern **[Lazy.nvim](https://github.com/folke/lazy.nvim)** plugin manager. It's optimized for speed, modularity, and developer productivity.

The configuration includes:

- Fully Lua-based setup
- LSP and autocompletion via `mason.nvim` / `nvim-lspconfig`
- Syntax highlighting with `nvim-treesitter`
- File search and navigation with `telescope.nvim`
- UI enhancements like statusline, tabline, and file explorer

📁 Repository: [Mohamedattiadev/.dotfiles](https://github.com/Mohamedattiadev/.dotfiles)  
📂 Path: `config/.config/nvim`  
🌿 Branch: `arch-config`

---

## 1. Clone the Repository

```bash
git clone https://github.com/Mohamedattiadev/.dotfiles.git ~/dotfiles
cd ~/dotfiles
git checkout arch-config
```

---

## 2. Symlink Neovim Config with Stow (Recommended)

```bash
cd ~/dotfiles
stow --dir=. config
```

This links your Neovim config from:

```
~/.config/nvim → ~/dotfiles/config/.config/nvim
```

> **Important:** You must have [GNU Stow](https://www.gnu.org/software/stow/) installed.

---

## 3. Launch Neovim

Open Neovim to allow Lazy.nvim to auto-bootstrap and install plugins:

```bash
nvim
```

Lazy.nvim will:

- Install itself
- Install all listed plugins
- Load your full configuration

> **Important:** Make sure your system has the following installed:
>
> - `neovim` (v0.8+)
> - `git`
> - `ripgrep`
> - `curl`
> - `stow` (optional, for symlinking)

---

## 4. Features Included

1. Lazy-loaded plugin management (via Lazy.nvim)
2. LSP and auto-completion with `mason`, `cmp`, `lspconfig`
3. Fast fuzzy finder using `telescope.nvim`
4. Syntax-aware highlighting with `nvim-treesitter`
5. Git integration (e.g., `gitsigns.nvim`)
6. File explorer (`nvim-tree.lua` or similar)
7. Statusline and UI components
8. Modular config under the `lua/` directory

---

## 5. Troubleshooting Tips

- Use `:checkhealth` in Neovim to verify all dependencies.
- If startup errors occur, try deleting `lazy-lock.json` and re-opening Neovim.
- Ensure your shell environment is properly initialized when launching Neovim.

---

## Video: Neovim Key Mapping Tutorials

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
  <a href="https://www.youtube.com/watch?v=RZ4p-saaQkc&pp=ygUNbnZpbSB0dXRvcmlhbA%3D%3D" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/RZ4p-saaQkc/0.jpg" alt="Neovim Custom Keymaps with Lua" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">vim – Tutorial</strong>
  </a>

  <a href="https://www.youtube.com/watch?v=zHTeCSVAFNY&list=PLsz00TDipIffreIaUNk64KxTIkQaGguqn&pp=0gcJCV8EOCosWNin" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/zHTeCSVAFNY/0.jpg" alt="Configuring hotkeys in Neovim" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">Configuring Neovim</strong>
  </a>
</div>

---
