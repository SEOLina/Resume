function toggleVersion() {
  const body = document.querySelector('body');
  const container = document.getElementById('container');
  const versionButton = document.getElementById('versionButton');

  if (body.classList.contains('desktop-version')) {
    body.classList.remove('desktop-version');
    body.classList.add('mobile-version');
    container.classList.remove('desktop-version');
    container.classList.add('mobile-version');
    versionButton.textContent = 'Switch to Desktop Version';
  } else {
    body.classList.remove('mobile-version');
    body.classList.add('desktop-version');
    container.classList.remove('mobile-version');
    container.classList.add('desktop-version');
    versionButton.textContent = 'Switch to Mobile Version';
  }
}

window.addEventListener('DOMContentLoaded', function () {
  const versionButton = document.getElementById('versionButton');
  versionButton.addEventListener('click', toggleVersion);
});

window.addEventListener('resize', toggleVersion);