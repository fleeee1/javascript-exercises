// your JavaScript file
const container = document.querySelector("#container");

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const header3 = document.createElement("h3");
header3.classList.add("content");
header3.textContent = "I'm a blue h3!";
header3.style.color = "blue";

const header1 = document.createElement("h1");
header1.textContent = "I'm a div!";

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

const newDiv = document.createElement("div");
newDiv.classList.add("content2");
newDiv.style.backgroundColor = "pink";
newDiv.appendChild(header1);
newDiv.appendChild(para2);

container.appendChild(para);
container.appendChild(content);
container.appendChild(header3);
container.appendChild(newDiv);
