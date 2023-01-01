// Write the code here

function checkUrl() {
  let regexForHomepage = new RegExp(/youtube\.com\/?$/)
  let isHomePage = regexForHomepage.test(window.location.href)

  let regexForWatchPage = new RegExp(/youtube\.com\/?watch.+/)
  let isWatchPage = regexForWatchPage.test(window.location.href)

  if (isHomePage) {
    removeThumbnails()
    removeChannelAvatars()
    return
  } else if (isWatchPage) {
    removeRecommendationsPanel()
  }
}

function removeThumbnails() {
  let thumbnails = document.querySelectorAll("ytd-thumbnail");
  thumbnails.forEach((item) => item.remove());
}

function removeChannelAvatars() {
  let channelAvatars = document.querySelectorAll("yt-img-shadow");
  channelAvatars.forEach((item) => item.remove());
}

function removeRecommendationsPanel() {
  const panel = document.getElementById('secondary')
  panel.remove()
}

setInterval(checkUrl, 1000)
