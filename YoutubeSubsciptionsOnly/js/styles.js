const styleId = "youtubeSubscriptionsOnly"
const style = document.createElement("style");
let observerDebounce;

style.id = styleId;
style.type = "text/css";
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);

function updateStyles() {
  const playlistControls = document.querySelector("#container.style-scope.ytd-playlist-panel-renderer");

  const sidebar = document.querySelector("#secondary");

  const chapters = document.querySelector(
    'ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-macro-markers-description-chapters"]',
  );

  // Check if the video is part of a playlist or has chapters
  if (sidebar) { 
    const hasPlaylist =
      playlistControls && playlistControls.textContent !== "NaN / NaN";
    const hasChapters = chapters !== null;

    if (!hasPlaylist && !hasChapters) {
      css = `${defaultCSS} #secondary { display: none; }`;
    } else {
      css = defaultCSS;
    }
    style.textContent = css;
  }
}

// Observe changes in the DOM to remove elements dynamically
const observer = new MutationObserver(() => {
  clearTimeout(observerDebounce);
  observerDebounce = setTimeout(updateStyles, 100);
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["id", "class", "title"]
});

updateStyles();