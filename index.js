

// your code goes here
let water = 1000;
let steps = 3240;
let heart = 75;
let spo2 = 98;

function addHistory(message) {
  const history = document.getElementById("history");
  const item = document.createElement("li");

  const time = new Date().toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit"
  });

  item.textContent = time + " - " + message;
  history.prepend(item);
}

function addWater() {
  water += 250;
  document.getElementById("water").textContent = water;

  addHistory("Đã uống thêm 250 ml nước");
}

function addSteps() {
  steps += 500;
  document.getElementById("steps").textContent = steps;

  addHistory("Đã ghi nhận thêm 500 bước chân");
}

function testAlert() {
  heart = 135;

  document.getElementById("heart").innerHTML =
    heart + " <small>bpm</small>";

  document.getElementById("alertText").textContent =
    "Nhịp tim mô phỏng: " + heart +
    " bpm. Hãy kiểm tra lại chỉ số và tình trạng của bạn.";

  document.getElementById("alert").classList.add("show");

  addHistory("Kích hoạt cảnh báo mô phỏng nhịp tim");
}

function closeAlert() {
  document.getElementById("alert").classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
  addHistory("Website đã sẵn sàng");
});


async function loadData() {
  const result = document.getElementById("result");

  const { data, error } = await db
    .from("test_table")
    .select("*");

  if (error) {
    result.textContent = "Error: " + error.message;
    return;
  }

  result.textContent = JSON.stringify(data, null, 2);
}