console.log("hi");
let history = document.querySelector("#history");
let historyMid = document.querySelector("#history-mid");
let team = document.querySelector("#team");
let teamMid = document.querySelector("#team-mid");
let mount1 = document.querySelector("#mount1");
let mount2 = document.querySelector("#mount2");

history.addEventListener("click", historyFunction);
function historyFunction() {
    window.location.href = "#mid-div";
}
historyMid.addEventListener("click", historyMidFunction);
function historyMidFunction() {
    window.location.href = "#top-div";
}
team.addEventListener("click", historyFunction);
function historyFunction() {
    window.location.href = "#mid-div";
}
teamMid.addEventListener("click", historyMidFunction);
function historyMidFunction() {
    window.location.href = "#top-div";
}
mount1.addEventListener("click", showMount1);
function showMount1() {
    window.location.href = "#mount1";
}
mount2.addEventListener("click", showMount);
function showMount() {
    window.location.href = "#top-div";
}