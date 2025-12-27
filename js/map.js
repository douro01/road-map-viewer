// 地図を作成
var map = L.map("map").setView([35.681236, 139.767125], 16);

// 背景地図（OpenStreetMap）
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);
