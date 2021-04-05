const output = document.getElementById("output");
const buttons = document.getElementsByClassName("tool--btn");

for (let btn of buttons) {
  btn.addEventListener("click", () => {
    let cmd = btn.dataset["command"];
    if (cmd === "createLink") {
      let url = prompt("Enter the link here: ", "http://");
      if (url) {
        document.execCommand(cmd, false, url);
      }
      output.focus();
    } else {
      document.execCommand(cmd, false, null);
      output.focus();
    }
  });
}
