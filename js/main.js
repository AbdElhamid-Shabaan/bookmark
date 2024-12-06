let bookmarkName = document.getElementById("name");
let websiteUrl = document.getElementById("url");
let userInfo = document.getElementById("result");
var regex =
  /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/;

var clintArray = [];

function addClint() {
  var clint = {
    name: bookmarkName.value,
    website: websiteUrl.value,
  };

  if (regex.test(websiteUrl.value)) {
    console.log("match");
    document.getElementById("msAlert").classList.add("d-none")
    var isDublicate = clintArray.some(function (existClint) {
      return existClint.name === clint.name;
    });
    if (!isDublicate) {
      clintArray.push(clint);
      console.log("not dublicate");
      document.getElementById("nameEx").classList.add("d-none")
    } else {
      console.log("dublicate");
      document.getElementById("nameEx").classList.remove("d-none")

    }

    display();
  } else {
    console.log("unmatch");
    document.getElementById("msAlert").classList.remove("d-none")
  }
}

function display() {
  var content = "";

  for (let i = 0; i < clintArray.length; i++) {
    content += `
  <div class="row text-center d-flex p-2  ">
              <div class="col-3 d-flex">
                <span class="align-self-center mx-auto">${i + 1}</span>
              </div>
              <div class="col-3 d-flex  justify-content-center">
                <span class=" align-self-center">${clintArray[i].name}</span>
              </div>
              <div class="col-3 ">
                <a class="visit-btn" href="${
                  clintArray[i].website
                }" target="balnk">
                  <i class="fa-solid fa-eye"></i>
                  Visit
                </a>
              </div>
              <div class="col-3">
                <button class="delete-btn" onclick="deleteClint(${i})">
                  <i class="fa-solid fa-trash-can"></i>
                  Delete
                </button>
                </div>
              </div>
  `;
  }
  userInfo.innerHTML = content;
}

function deleteClint(e) {
  clintArray.splice(e, 1);
  display();
}
