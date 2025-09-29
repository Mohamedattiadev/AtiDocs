document.addEventListener("DOMContentLoaded", function () {
  let hintsVisible = false;
  let activeHints = {};
  let firstKey = "";
  const scrollStep = 100;

  // ... (All the hint-generating functions remain the same)
  function generateHints(count) {
    const chars = "adghjklqwertyuiopzxcvbnm1234567890";
    const hints = [];
    for (let i = 0; i < chars.length; i++) {
      for (let j = 0; j < chars.length; j++) {
        if (hints.length >= count) return hints;
        hints.push(chars[i] + chars[j]);
      }
    }
    return hints;
  }
  function showHints() {
    if (hintsVisible) return;
    hintsVisible = true;
    activeHints = {};
    firstKey = "";
    const elements = Array.from(
      document.querySelectorAll(
        "a, button, [onclick], [role=button], [tabindex]",
      ),
    ).filter((el) => {
      const style = window.getComputedStyle(el);
      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        el.offsetWidth > 0 &&
        el.offsetHeight > 0
      );
    });
    const hints = generateHints(elements.length);
    elements.forEach((el, index) => {
      const hint = hints[index];
      if (!hint) return;
      const hintElement = document.createElement("div");
      hintElement.textContent = hint;
      hintElement.style.position = "absolute";
      hintElement.style.backgroundColor = "#51afef";
      hintElement.style.color = "#282a36";
      hintElement.style.padding = "2px 6px";
      hintElement.style.borderRadius = "4px";
      hintElement.style.fontFamily = "monospace";
      hintElement.style.fontWeight = "bold";
      hintElement.style.fontSize = "14px";
      hintElement.style.zIndex = "9999";
      hintElement.style.cursor = "pointer";
      hintElement.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
      const rect = el.getBoundingClientRect();
      hintElement.style.left = `${rect.left + window.scrollX}px`;
      hintElement.style.top = `${rect.top + window.scrollY}px`;
      hintElement.id = `hint-${hint}`;
      document.body.appendChild(hintElement);
      activeHints[hint] = {
        element: el,
        hintElement: hintElement,
      };
    });
  }
  function updateHintStyles() {
    Object.entries(activeHints).forEach(([hint, data]) => {
      if (firstKey && hint.startsWith(firstKey)) {
        data.hintElement.style.backgroundColor = "#c678dd";
        data.hintElement.style.color = "#f2f2f2";
        data.hintElement.textContent = hint[1];
      } else if (firstKey) {
        data.hintElement.style.backgroundColor = "#5d4d7a";
        data.hintElement.style.color = "#f2f2f2";
      } else {
        data.hintElement.style.backgroundColor = "#c678dd";
        data.hintElement.textContent = hint;
      }
    });
  }
  function cleanupHints() {
    document.querySelectorAll("[id^='hint-']").forEach((el) => el.remove());
    hintsVisible = false;
    activeHints = {};
    firstKey = "";
  }

  // Handle keyboard input
  document.addEventListener(
    "keydown",
    (e) => {
      // Show hints
      if (e.key === "f" && !hintsVisible && !e.ctrlKey && !e.metaKey) {
        showHints();
        e.preventDefault();
        e.stopPropagation();
      }
      // Two-letter hint selection
      else if (hintsVisible) {
        if (!firstKey) {
          firstKey = e.key;
          updateHintStyles();
          e.preventDefault();
        } else {
          const fullKey = firstKey + e.key;
          if (activeHints[fullKey]) {
            activeHints[fullKey].element.click();
            cleanupHints();
            e.preventDefault();
          } else {
            cleanupHints();
          }
        }
      }
      // Navigation keys
      else {
        // gg - go to top
        if (e.key === "g" && !e.shiftKey) {
          if (
            this.lastKey === "g" &&
            this.lastKeyTime &&
            Date.now() - this.lastKeyTime < 300
          ) {
            window.scrollTo(0, 0);
            e.preventDefault();
          }
          this.lastKey = "g";
          this.lastKeyTime = Date.now();
        }
        // Shift+G - go to bottom
        else if (e.key === "G" && e.shiftKey) {
          window.scrollTo(0, document.body.scrollHeight);
          e.preventDefault();
        }
        // ⭐ START: Read Mode functionality added here ⭐
        else if (e.key === "F") {
          // Ignore keypress if user is typing in a text field
          const activeElement = document.activeElement;
          if (
            activeElement &&
            (activeElement.tagName === "INPUT" ||
              activeElement.tagName === "TEXTAREA" ||
              activeElement.isContentEditable)
          ) {
            return;
          }
          // Toggle the 'data-read-mode' attribute on the body
          const body = document.body;
          const isReadMode = body.getAttribute("data-read-mode") === "true";
          body.setAttribute("data-read-mode", !isReadMode);
          console.log("Read Mode Toggled:", !isReadMode); // For debugging
          e.preventDefault();
        }
        // ⭐ END: Read Mode functionality ⭐
        // hjkl scrolling
        else if (["h", "j", "k", "l"].includes(e.key)) {
          switch (e.key) {
            case "h":
              window.scrollBy(-scrollStep, 0);
              break;
            case "j":
              window.scrollBy(0, scrollStep);
              break;
            case "k":
              window.scrollBy(0, -scrollStep);
              break;
            case "l":
              window.scrollBy(scrollStep, 0);
              break;
          }
          e.preventDefault();
        }
        // Center the content on the screen
        // Toggle Centered Content Layout
        else if (e.key === "C") {
          const body = document.body;
          const isCenterMode = body.getAttribute("data-center-mode") === "true";
          body.setAttribute("data-center-mode", !isCenterMode);
          e.preventDefault();
        }
      }

      // Escape to close hints
      if (e.key === "Escape" && hintsVisible) {
        cleanupHints();
        e.preventDefault();
      }
    },
    true,
  );
});
