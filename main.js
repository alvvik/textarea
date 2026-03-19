const textarea = document.querySelector("#textarea");
const current = document.querySelector("#current");
const limit = document.querySelector("#limit");
textarea.addEventListener("input", () => {
  let textLength = textarea.value.length;

  if (textLength >= 250) {
    textarea.value = textarea.value.slice(0, 250);
    textarea.style.border = "2px solid red";
    textarea.style.color = "red";
    limit.style.color = "red";
  } else {
    textarea.style.border = "none";
    textarea.style.color = "black";
    limit.style.color = "black";
  }
  textLength = textarea.value.length;
  current.innerText = textLength;
});
