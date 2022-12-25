// Write the code here

function removeThumbnails() {
  let thumbnails = document.querySelectorAll("ytd-thumbnail");
  let channelAvatars = document.querySelectorAll("yt-img-shadow");
  thumbnails.forEach((item) => item.remove());
  channelAvatars.forEach((item) => item.remove());
  addMutationObserver();
}

function addMutationObserver() {
  const targetNode = document.getElementById("contents");
  const config = { childList: true, subtree: true };
  const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
      mutation.addedNodes.forEach((item) => {
        if (item.tagName == "YTD-RICH-GRID-ROW") {
          let thumbnails = item.querySelectorAll("ytd-thumbnail");
          let channelAvatars = document.querySelectorAll("yt-img-shadow");
          thumbnails.forEach((item) => item.remove());
          channelAvatars.forEach((item) => item.remove());
        }
      });
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

setTimeout(removeThumbnails, 3000);
