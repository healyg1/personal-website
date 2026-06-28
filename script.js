const timeElement = document.querySelector("#local-time");

function updateLocalTime() {
  if (!timeElement) {
    return;
  }

  const formatter = new Intl.DateTimeFormat([], {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short"
  });

  timeElement.textContent = formatter.format(new Date());
}

updateLocalTime();
setInterval(updateLocalTime, 1000);
