---
title: Tmux Config (Custom + TPM Plugins)
description: Full guide to installing and understanding my tmux configuration, featuring plugin support, Vim-style navigation, and custom UI.
comments: true
---

# Tmux Configuration

This is my **customized tmux setup**, using the [Tmux Plugin Manager (TPM)](https://github.com/tmux-plugins/tpm) for plugins and a workflow tailored to keyboard-driven productivity.

Config location in repo:

📁 Repository: [Mohamedattiadev/.dotfiles](https://github.com/Mohamedattiadev/.dotfiles)  
📂 Path: `config/.config/nvim`  
🌿 Branch: `arch-config`

---

## 🔧 Installation

### 1. Install Tmux

```bash
sudo apt install tmux     # Debian/Ubuntu
# or
brew install tmux         # macOS
```

---

### 2. Clone the Dotfiles

```bash
git clone https://github.com/Mohamedattiadev/.dotfiles.git ~/dotfiles
cd ~/dotfiles
```

---

### 3. Link the Tmux Config

```bash
ln -sfn ~/dotfiles/.tmux/.tmux.conf ~/.tmux.conf
```

---

### 4. Install TPM (Plugin Manager)

```bash
git clone https://github.com/tmux-plugins/tpm ~/.config/tmux/.tmux/plugins/tpm
```

---

### 5. Launch tmux and Install Plugins

Inside tmux, press:

```text
(Ctrl-a) + I
```

This installs all plugins listed in the config.

---

## Key Features

### General Behavior

- `Ctrl-a` as the prefix key (instead of `Ctrl-b`)
- Mouse support enabled
- Vi-style navigation in copy mode
- Session/window index starts at 1
- Fast pane navigation and resize
- Top-positioned status bar with minimal indicators

---

### Plugins Used

| Plugin               | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| `tpm`                | Plugin management                               |
| `vim-tmux-navigator` | Seamless movement between tmux and Neovim panes |
| `tmux-resurrect`     | Save and restore sessions                       |
| `tmux-continuum`     | Auto-save/restore tmux environment              |
| `tmuxifier`          | Modular session configs (optional support)      |

---

## ⌨️ Keybindings

| Action                   | Binding            |
| ------------------------ | ------------------ |
| Prefix key               | `Ctrl-a`           |
| Reload config            | `Prefix + r`       |
| Save session (manual)    | `Prefix + Ctrl-s`  |
| Restore session (manual) | `Prefix + Ctrl-r`  |
| Resize pane              | `Prefix + h/j/k/l` |
| Toggle zoom              | `Prefix + m`       |
| Start visual selection   | `v` in copy-mode   |
| Copy selected text       | `y` in copy-mode   |

> **Note:** You can use `:checkhealth` in Neovim to verify `vim-tmux-navigator` is working properly.

---

## 🎨 Theme & Status

- Simple black borders with magenta highlights
- Window bar with dot indicators:
  - Current window: **●** (magenta)
  - Other windows: **●** (gray)
- Minimal status line: session name on the left

---

## Tips & Notes

- Reload the config inside tmux with:

  ```bash
  Ctrl-a r
  ```

- Ensure the required tools are available:
  - `tmux`, `git`, `xclip` (for clipboard), `neovim`

---

## 🎥 Video Tutorial

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
  <a href="https://www.youtube.com/watch?v=U41BTVZLKB0" target="_blank" style="text-align: center; display: block; padding: 1em; border-radius: 10px; text-decoration: none;">
    <img src="https://img.youtube.com/vi/U41BTVZLKB0/0.jpg" alt="tmux video tutorial" style="width: 100%; border-radius: 10px;" />
    <strong style="display: block; margin-top: 0.5em;">tmux Tutorial for Beginners (Terminal Multiplexer)</strong>
  </a>
</div>

---

## Summary

- Custom prefix (`Ctrl-a`), Vim-style bindings
- TPM + plugins for session persistence, navigation, and layout control
- Fully managed in your dotfiles at `.tmux/.tmux.conf`
- Integrates smoothly with Neovim via `vim-tmux-navigator`

Would you like to proceed to documenting Zsh, starship, or your shell environment next?
