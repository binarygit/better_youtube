// Write the code here

function removeThumbnailsAndChannelAvatars() {
  removeThumbnails()
  removeChannelAvatars()
  addMutationObserver();
}

function removeThumbnails() {
  let thumbnails = document.querySelectorAll("ytd-thumbnail");
  thumbnails.forEach((item) => item.remove());
}

function removeChannelAvatars() {
  let channelAvatars = document.querySelectorAll("yt-img-shadow");
  channelAvatars.forEach((item) => item.remove());
}

function addMutationObserver() {
  const targetNode = document.getElementById("contents");
  const config = { childList: true };
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      mutation.addedNodes.forEach((item) => {
        if (item.tagName == "YTD-RICH-GRID-ROW") {
          removeThumbnails()
          removeChannelAvatars()
        }
      });
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

function removeRecommendationsPanel() {
  const panel = document.getElementById('secondary')
  panel.remove()
}

setTimeout(removeThumbnailsAndChannelAvatars, 2000);
setTimeout(removeRecommendationsPanel, 2000);
