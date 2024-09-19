const count = document.getElementById("count");

function increaseCount() {
  let currentCount = Number(count.innerText);
  currentCount++;
  count.innerText = currentCount;
}

function decreaseCount() {
  let currentCount = Number(count.innerText);
  currentCount--;
  count.innerText = currentCount;
}
