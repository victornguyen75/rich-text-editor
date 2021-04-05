const output = document.getElementById("output");
const buttons = document.getElementsByTagName("button");

for (let btn of buttons) {
  btn.addEventListener("click", () => {
    let cmd = btn.dataset["command"];
    if (cmd === "createLink") {
      let url = prompt("Enter the link here: ", "http://");
      if (url) {
        document.execCommand(cmd, false, url);
      }
    } else {
      document.execCommand(cmd, false, null);
    }

    output.focus();
  });
}

const loadFile = (event) => {
  const img = document.createElement("img");
  img.src = URL.createObjectURL(event.target.files[0]);

  const src = document.getElementById("output");
  src.appendChild(img);
};
