function redirectTo(url) {
  window.location.href = url;
}

function bannerClick() {
  const banner = document.querySelector(".banner");
  banner.classList.add("clicked");
  setTimeout(() => {
    banner.classList.remove("clicked");
  }, 300);
}