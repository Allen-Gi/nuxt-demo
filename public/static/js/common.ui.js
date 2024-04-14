//도움말
function openLayer(IdName) {
  const el = document.getElementById(IdName);
  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
  return false;
}
function closeLayer(IdName) {
  const el = document.getElementById(IdName);
  el.style.display = "none";
  return false;
}