function updatePath() {
  const currentPath = window.location.pathname;
  const subPage = "/feed/subscriptions";
  if (currentPath === "/") {
    // Redirect to the subscriptions page
    window.location.href = subPage;
  } else if (currentPath.startsWith("/shorts")) {
    window.location.href = subPage;
  }
}

updatePath();

window.addEventListener("popstate", updatePath);