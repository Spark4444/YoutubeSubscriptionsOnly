function updatePath() {
    const currentPath = window.location.pathname;
    if (currentPath === "/") {
    // Redirect to the subscriptions page
    window.location.href = "/feed/subscriptions";
  }
}

updatePath();

// Event listener for navigation changes
navigation.addEventListener("currententrychange", updatePath);

function removeElements() {
  const deleteElements = [
    '#endpoint[title="Home"]',
    "#main.style-scope.yt-mealbar-promo-renderer"
  ];

  deleteElements.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => element.remove());
  });

  const playlistControls = document.querySelector("#container.style-scope.ytd-playlist-panel-renderer");
  console.log(Boolean(playlistControls));

  const related = document.querySelector("#related");

  const sidebar = document.querySelector("#secondary");
  if (playlistControls?.textContent !== "NaN / NaN") {
    related?.remove();
  } else {
    sidebar?.remove();
  }
}

// Observe changes in the DOM to remove elements dynamically
const observer = new MutationObserver(() => {
  removeElements();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ["id", "class", "title"]
});

removeElements();