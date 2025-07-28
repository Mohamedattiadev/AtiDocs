---
title: Getting Started with Visual Studio Code (VS Code)
description: A practical introduction to VS Code for JavaScript/TypeScript development — extensions, settings, and workflow tips.
comments: true
---

# 1. Why Use VS Code?

VS Code is a powerful code editor that works great with JavaScript, TypeScript, and many other languages. It supports:

- IntelliSense (auto-completion + type info)
- Git integration
- Debugging
- Extensions marketplace
- Cross-platform (Windows, macOS, Linux)

---

# 2. Installing VS Code

Download from [https://code.visualstudio.com](https://code.visualstudio.com)

After installing:

- Open the terminal: `Ctrl + ~` (or `` Ctrl + ` ``)
- Open a folder: `File > Open Folder`

---

# 3. Recommended Extensions

You can install extensions from the sidebar (`Ctrl+Shift+X`).

### Suggested for Web Dev:

- **ESLint** – Lint JavaScript/TypeScript
- **Prettier** – Auto-format code
- **GitLens** – Git superpowers
- **Live Server** – Auto-reload HTML/CSS
- **Path Intellisense** – Smart path suggestions
- **Debugger for Chrome** – Debug JS in the browser
- **TabNine** or **Codeium** – AI-powered completions

```bash
# Or install from terminal (optional)
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
```

---

# 4. Settings Overview

You can customize settings via:

- GUI: `File > Preferences > Settings`
- Or directly via JSON (`Ctrl + Shift + P → Preferences: Open Settings (JSON)`)

```json
{
  "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "files.autoSave": "onFocusChange",
  "typescript.tsdk": "node_modules/typescript/lib",
  "eslint.validate": ["javascript", "typescript"]
}
```

---

# 5. VS Code and Git

VS Code has built-in Git support:

- Stage/commit from the Source Control panel (`Ctrl + Shift + G`)
- See diffs inline
- Resolve merge conflicts visually
- View blame history with GitLens

---

# 6. Run and Debug Code

Press `F5` or go to the **Run & Debug** panel:

- Select environment (e.g., Node.js)
- Add a launch config in `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run Node App",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/index.js"
    }
  ]
}
```

---

# 7. Integrated Terminal

Open terminal: `Ctrl + ~`

You can run commands like:

```bash
npm install
npm run dev
git status
```

You can also set default shell (bash, PowerShell, zsh) in Settings.

---

# 8. Snippets & Shortcuts

- `Ctrl + Space`: Trigger suggestions
- `Shift + Alt + F`: Format file
- `Ctrl + D`: Select next occurrence
- `Ctrl + /`: Toggle comment
- `Ctrl + P`: Quick file open
- `Ctrl + Shift + P`: Command palette

---

# 9. Tasks & Automation

Create a `.vscode/tasks.json` file to run custom build or test scripts.

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "npm: build",
      "type": "shell",
      "command": "npm run build",
      "group": "build"
    }
  ]
}
```

Run with `Ctrl + Shift + B`.

## 10. my vim vscode workflow

### settings.json

```json
{
  // -------------------------
  //  File Save Behavior
  // -------------------------
  "files.autoSave": "onFocusChange",

  // -------------------------
  //  Vim Extension Settings
  // -------------------------
  "vim.easymotion": true,
  "vim.incsearch": true,
  "vim.useSystemClipboard": true,
  "vim.useCtrlKeys": true,
  "vim.hlsearch": true,
  "vim.sneak": true,
  "vim.easymotionMarkerBackgroundColor": "#020202",
  "vim.leader": "<space>",

  // Highlight yank settings (highlight text after copying)
  "vim.highlightedyank.enable": true,
  "vim.highlightedyank.duration": 300,
  "vim.highlightedyank.color": "rgba(255, 185, 4, 0.8)",

  // -------------------------
  //  Vim Keybindings - Normal Mode
  // -------------------------
  "vim.normalModeKeyBindings": [
    {
      // Switch to the next editor tab
      "before": ["<S-l>"],
      "commands": ["workbench.action.nextEditor"]
    },
    {
      // Switch to the previous editor tab
      "before": ["<S-h>"],
      "commands": ["workbench.action.previousEditor"]
    },
    // {
    //  // Quick open file explorer
    //  "before": ["<leader>","f"],
    //  "commands": ["workbench.action.quickOpen"]
    // },
    {
      // Clear search highlight
      "before": ["<leader>", "n", "n"],
      "commands": [":nohl"]
    }
  ],

  // -------------------------
  //  Vim Keybindings - Normal Mode (Non-Recursive)
  // -------------------------
  "vim.normalModeKeyBindingsNonRecursive": [
    {
      // Save the current file
      "before": ["<leader>", "w"],
      "commands": ["workbench.action.files.save"]
    },
    {
      // Show diagnostics (problems)
      "before": ["<leader>", "d"],
      "commands": ["workbench.action.problems.focus"]
    },

    {
      // Start searching
      "before": ["/"],
      "commands": ["actions.find"]
    },
    // {
    //     // Close panel or active editor
    //     "before": ["<space>", "<space>", "q"],
    //     "commands": [
    //         {
    //             "command": "workbench.action.closePanel",
    //             "when": "panelVisible"
    //         },
    //         {
    //             "command": "workbench.action.closeActiveEditor",
    //             "when": "!panelVisible"
    //         }
    //     ]
    // },
    {
      // Move 5 characters left with <Tab> + h
      "before": ["<Tab>", "h"],
      "commands": [
        {
          "command": "cursorMove",
          "args": { "to": "left", "by": "character", "value": 5 }
        }
      ]
    },
    {
      // Move 5 lines down with <Tab> + j
      "before": ["<Tab>", "j"],
      "commands": [
        {
          "command": "cursorMove",
          "args": { "to": "down", "by": "line", "value": 5 }
        }
      ]
    },
    {
      // Move 5 lines up with <Tab> + k
      "before": ["<Tab>", "k"],
      "commands": [
        {
          "command": "cursorMove",
          "args": { "to": "up", "by": "line", "value": 5 }
        }
      ]
    },
    {
      // Move 5 characters right with <Tab> + l
      "before": ["<Tab>", "l"],
      "commands": [
        {
          "command": "cursorMove",
          "args": { "to": "right", "by": "character", "value": 5 }
        }
      ]
    },
    {
      // Show hover information under the cursor
      "before": ["<S-k>"],
      "commands": ["editor.action.showHover"]
    }
    // {
    //     // Format the current document
    //     "before": ["<leader>", "g", "f"],
    //     "commands": ["editor.action.formatDocument"]
    // },
    // {
    //     // Go to the definition of the symbol under the cursor
    //     "before": ["<leader>", "g", "d"],
    //     "commands": ["editor.action.revealDefinition"]
    // }
  ],

  // -------------------------
  //  Vim Keybindings - Visual Mode
  // -------------------------
  "vim.visualModeKeyBindings": [
    {
      "before": [">"],
      "after": [">", "g", "v"]
    },
    {
      "before": ["<"],
      "after": ["<", "g", "v"]
    },
    {
      "before": ["J"],
      "commands": ["editor.action.moveLinesDownAction"]
    },
    {
      "before": ["K"],
      "commands": ["editor.action.moveLinesUpAction"]
    }
  ],

  // -------------------------
  //  Disable Conflicting VS Code Keybindings for Vim
  // -------------------------
  "vim.handleKeys": {
    "<C-a>": false,
    "<C-f>": false,
    "<C-c>": false,
    "<C-x>": false,
    "<C-v>": false,
    "<C-z>": false,
    "<C-y>": false,
    "<C-S-h>": false,
    "<C-S-l>": false,
    "<C-h>": false,
    "<C-j>": false,
    "<C-k>": false,
    "<C-l>": false
  },

  // -------------------------
  //  Language-Specific Auto-Formatting
  // -------------------------
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features",
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // -------------------------
  //  Editor Appearance & Behavior
  // -------------------------
  "editor.minimap.enabled": false,
  "editor.wordWrap": "on",
  "editor.lineHeight": 25,
  "editor.hover.enabled": true,
  "editor.renderLineHighlight": "line",
  "editor.occurrencesHighlight": "on",
  "editor.guides.indentation": true,
  "editor.guides.highlightActiveIndentation": true,
  "editor.emptySelectionClipboard": false,
  "editor.stickyScroll.enabled": false,
  "editor.unicodeHighlight.invisibleCharacters": false,
  "editor.unicodeHighlight.ambiguousCharacters": false,
  "editor.bracketPairColorization.enabled": false,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.formatOnSave": true,

  // -------------------------
  //  Workbench & UI Settings
  // -------------------------
  "workbench.colorTheme": "doom-one",
  "workbench.iconTheme": "eq-material-theme-icons-light",
  "workbench.editor.showTabs": "none",
  "workbench.tips.enabled": false,
  "breadcrumbs.enabled": false,
  "window.menuBarVisibility": "toggle",
  "zenMode.showTabs": "none",
  "workbench.activityBar.location": "top",
  "workbench.statusBar.visible": false,
  "workbench.editor.editorActionsLocation": "hidden",

  // -------------------------
  //  Color and Cursor Customizations
  // -------------------------
  "workbench.colorCustomizations": {
    "editorCursor.foreground": "#3498db",
    "terminalCursor.foreground": "#3498db",
    "terminalCursor.background": "#3498db",
    "statusBar.background": "#005f5f",
    "statusBar.noFolderBackground": "#005f5f",
    "statusBar.debuggingBackground": "#005f5f",
    "statusBar.foreground": "#ffffff",
    "statusBar.debuggingForeground": "#ffffff"
  },
  "vim.cursorStylePerMode": {
    "normal": "block",
    "insert": "bar",
    "replace": "underline"
  },
  "vim.cursorColor": true, // Ensures Vim extension respects cursor color
  "vim.statusBarColorControl": false,

  // -------------------------
  //  File Explorer Settings
  // -------------------------
  "explorer.sortOrder": "type",

  // -------------------------
  //  Git & SCM Settings
  // -------------------------
  "scm.diffDecorations": "none",
  "git.decorations.enabled": false,
  "git.autofetch": true,

  // -------------------------
  //  Language & Extension Specific Settings
  // -------------------------
  "javascript.updateImportsOnFileMove.enabled": "always",
  "eslint.format.enable": true,
  "eslint.codeActionsOnSave.rules": null,
  "cmake.options.advanced": {
    "build": {
      "statusBarVisibility": "inherit",
      "inheritDefault": "visible"
    },
    "launch": {
      "statusBarVisibility": "inherit",
      "inheritDefault": "visible"
    },
    "debug": {
      "statusBarVisibility": "inherit",
      "inheritDefault": "visible"
    }
  }
}
```

### Keybindings.json

```json
// Place your key bindings in this file to override the defaults
[
  {
    //up and down arrows
    "key": "j",
    "command": "list.focusDown",
    "when": "sideBarFocus && !inputFocus"
  },
  {
    "key": "k",
    "command": "list.focusUp",
    "when": "sideBarFocus && !inputFocus"
  },
  // explorer
  {
    "key": "a",
    "command": "workbench.files.action.createFileFromExplorer",
    "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "shift+a",
    "command": "workbench.files.action.createFolderFromExplorer",
    "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "shift+y", // CORRECTED: Changed from 'y' to 'Y' (Shift+y) to avoid conflict
    "command": "filesExplorer.copy",
    "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "x",
    "command": "filesExplorer.cut",
    "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "p",
    "command": "filesExplorer.paste",
    "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "d",
    "command": "moveFileToTrash",
    "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "r",
    "command": "renameFile",
    "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "g y",
    "command": "copyFilePath",
    "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "y",
    "command": "copyRelativeFilePath",
    "when": "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus"
  },
  {
    "key": "ctrl+o",
    "command": "vim.remap",
    "when": "editorTextFocus && vim.mode == 'Normal'",
    "args": {
      "after": ["<C-o>"]
    }
  }, // CORRECTED: Comma is now in the correct place, after the brace.
  {
    "key": "ctrl+i",
    "command": "vim.remap",
    "when": "editorTextFocus && vim.mode == 'Normal'",
    "args": {
      "after": ["<C-i>"]
    }
  },
  {
    "key": "space e",
    "command": "runCommands",
    "args": {
      "commands": [
        "workbench.files.action.focusFilesExplorer",
        "workbench.action.focusSideBar"
      ]
    },
    "when": "editorTextFocus && vim.mode == 'Normal' && !sideBarVisible && !terminalFocus"
  },
  {
    "key": " space e",
    "command": "workbench.action.toggleSidebarVisibility",
    "when": " sideBarVisible  && vim.mode == 'Normal' &&!terminalFocus"
  },
  {
    "key": " space space f",
    "command": "workbench.action.quickOpen",
    "when": " sideBarVisible  && vim.mode == 'Normal' &&!terminalFocus"
  },

  {
    "key": "space e",
    "command": "workbench.action.toggleSidebarVisibility",
    "when": "editorTextFocus && vim.mode == 'Normal' && sideBarVisible &&!terminalFocus "
  },
  // --- START: Pane and Panel Navigation ---

  // Navigate between split editor panes with Ctrl + H/J/K/L
  // Navigation
  {
    "key": "ctrl-h",
    "command": "workbench.action.navigateLeft"
  },
  {
    "key": "ctrl-l",
    "command": "workbench.action.navigateRight"
  },
  {
    "key": "ctrl-k",
    "command": "workbench.action.navigateUp"
  },
  {
    "key": "ctrl-j",
    "command": "workbench.action.navigateDown"
  },

  // Toggle the Terminal open and closed with Space > T > T
  // This is active only in Normal Mode to avoid conflicts while typing.
  {
    "key": "space t t",
    "command": "workbench.action.togglePanel",
    "when": "editorTextFocus && vim.mode == 'Normal' && !terminalFocus"
  },
  {
    "key": "space q",
    "command": "workbench.action.toggleSidebarVisibility",
    "when": "filesExplorerFocus && vim.mode == 'Normal' && sideBarVisible && !terminalFocus"
  },
  //  {
  //     "key": "ctrl+a",
  //     "command": "workbench.action.quickchat.toggle"
  //   },
  //   {
  //     "key": "ctrl+a",
  //     "command": "workbench.view.extension.chatgpt-sidebar-view"
  //   },
  {
    "key": "ctrl+shift+a",
    "command": "workbench.panel.chatEditing",
    "when": "workbench.panel.chat.view.edits.active"
  },
  {
    "key": "space a",
    "command": "workbench.panel.chat",
    "when": "workbench.panel.chat.view.edits.active && vim.mode == 'Normal' && !terminalFocus"
  },
  {
    "key": "ctrl+shift+l",
    "command": "workbench.action.decreaseViewWidth",
    "when": " editorFocus   && !terminalFocus"
  },
  {
    "key": "ctrl+shift+h",
    "command": "workbench.action.increaseViewWidth",
    "when": " editorFocus && !terminalFocus"
  },
  {
    "key": "ctrl+shift+l",
    "command": "workbench.action.terminal.resizePaneRight",
    "when": " terminalFocus"
  },
  {
    "key": "ctrl+shift+h",

    "command": "workbench.action.terminal.resizePaneLeft",
    "when": " terminalFocus"
  },
  {
    "key": "space q",
    "command": "workbench.action.closeActiveEditor",
    "when": "editorTextFocus && vim.mode == 'Normal' && !terminalFocus"
  },
  // 3. Open the Git / Source Control sidebar with Space > G > G
  {
    "key": "space g g",
    "command": "workbench.view.scm",
    "when": "editorTextFocus && vim.mode == 'Normal' && !terminalFocus"
  },
  {
    "key": "space q",
    "command": "workbench.action.closeSidebar",
    "when": "activeViewlet == 'workbench.view.scm' && vim.mode == 'Normal' && !terminalFocus"
  },
  //
  /* ─── Split editors ─────────────────────────────────────────────── */
  {
    "key": "space space v", // ␣ ␣ v  → vertical split (right)
    "command": "workbench.action.splitEditorRight",
    "when": "editorTextFocus && vim.mode == 'Normal' && !terminalFocus"
  },
  {
    "key": "space space h", // ␣ ␣ h  → horizontal split (down)
    "command": "workbench.action.splitEditorDown",
    "when": "editorTextFocus && vim.mode == 'Normal' && !terminalFocus"
  },

  /* ─── Open the file/folder under cursor in the Explorer with Space ─*/
  {
    "key": "space ,",
    "command": "workbench.action.showAllEditorsByMostRecentlyUsed",
    "when": "editorTextFocus && vim.mode == 'Normal'  && !terminalFocus"
  },

  {
    "key": "ctrl+j",
    "command": "workbench.action.quickOpenSelectNext",
    "when": "inQuickOpen"
  },
  {
    "key": "ctrl+k",
    "command": "workbench.action.quickOpenSelectPrevious",
    "when": "inQuickOpen"
  },

  /* Suggest/completion widget inside the editor */
  {
    "key": "ctrl+j",
    "command": "selectNextSuggestion",
    "when": "editorTextFocus && suggestWidgetVisible"
  },
  {
    "key": "ctrl+k",
    "command": "selectPrevSuggestion",
    "when": "editorTextFocus && suggestWidgetVisible"
  },

  /* Search results panel (Ctrl+Shift+F) */
  {
    "key": "ctrl+j",
    "command": "search.action.focusNextSearchResult",
    "when": "hasSearchResults && searchViewletFocus"
  },
  {
    "key": "ctrl+k",
    "command": "search.action.focusPreviousSearchResult",
    "when": "hasSearchResults && searchViewletFocus"
  },
  {
    "key": "space w",
    "command": "workbench.action.files.save",
    "when": "editorTextFocus && vim.mode == 'Normal' && !terminalFocus"
  },
  {
    "key": "space f w",
    "command": "workbench.action.findInFiles",
    "when": "editorTextFocus && vim.mode == 'Normal' && !terminalFocus"
  },
  {
    "key": "space q",
    "command": "workbench.action.closeSidebar",
    "when": "activeViewlet == 'workbench.view.search' && vim.mode == 'Normal' && !terminalFocus"
  },
  // 2. Search for files with Space > F
  {
    "key": "space space f",
    "command": "workbench.action.quickOpen",
    "when": "editorTextFocus && vim.mode == 'Normal' && !terminalFocus"
  },
  {
    "key": "space g d",
    //go to definition
    "command": "editor.action.revealDefinition",
    "when": "editorTextFocus && vim.mode == 'Normal' && editorHasDefinitionProvider && !editorReadonly && !terminalFocus"
  },
  {
    "key": "space g r", //go to references
    "command": "editor.action.goToReferences",
    "when": "editorTextFocus && vim.mode == 'Normal' && editorHasReferenceProvider && !editorReadonly && !terminalFocus"
  },
  {
    "key": "space g i", //go to implementation
    "command": "editor.action.goToImplementation",
    "when": "editorTextFocus && vim.mode == 'Normal' && editorHasImplementationProvider && !editorReadonly && !terminalFocus"
  },
  {
    "key": "space g f",
    //format
    "command": "editor.action.formatDocument",
    "when": "editorTextFocus && vim.mode == 'Normal' && editorHasDocumentFormattingProvider && !editorReadonly && !terminalFocus"
  },
  {
    "key": "space g a",
    //go to type definition
    "command": "editor.action.goToTypeDefinition",
    "when": "editorTextFocus && vim.mode == 'Normal' && editorHasTypeDefinitionProvider && !editorReadonly"
  },
  {
    "key": "space g s",
    //go to symbol
    "command": "workbench.action.gotoSymbol",
    "when": "editorTextFocus && vim.mode == 'Normal' && !editorReadonly && !terminalFocus"
  }
]
```

---

# Summary

- Use extensions for linting, formatting, Git, and live reload.
- Save configs in `.vscode/` to share with team members.
- Customize shortcuts and terminal for your workflow.
- Combine with GitHub, Docker, or CI/CD for a complete dev setup.
