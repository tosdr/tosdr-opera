window.addEventListener('DOMContentLoaded', function() {
  // ignore frames
  if (window.top !== window) {
    return;
  }
  opera.extension.postMessage(window.document.location.href);
});
