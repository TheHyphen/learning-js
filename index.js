let chats = [];

fetch("http://localhost:3000/messages").then(function (response) {
  console.log("round 1");
  response.json().then(function (result) {
    console.log("round 2");
    console.log(result);
    chats = result;
    document.querySelector("#chats").innerHTML = chats.map(convert).join("");
  });
});

fetch("https://api.github.com/users").then(function (response) {
  response.json().then(function (result) {
    console.log(result);
  });
});

function convert(chat) {
  return `
  <li class="flex justify-between p-4 hover:bg-neutral-100 cursor-pointer">
    <div class="flex gap-x-4">
      <img class="w-12 h-12" src="man.png" />
      <div>
        <p class="font-bold">${chat.name}</p>
        <p class="text-neutral-600">
          ${chat.message}
        </p>
      </div>
    </div>
    <div class="text-neutral-400">${chat.time}</div>
  </li>
`;
}
