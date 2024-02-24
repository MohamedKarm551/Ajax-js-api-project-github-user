function getResponse() {
  // اوبجكت بيبدل البيانات مع السيرفر وراء الكواليس
  var ajax = new XMLHttpRequest();
  // state = 0

  ajax.open("GET", "https://reqres.in/api/users?page=2", true);
  // state = 1

  ajax.send();
  // state = 2

  ajax.onreadystatechange = function () {
    if (ajax.readyState == 4 && ajax.status == 200) {
      //       readyState=> State  Description : 0 or 1 or 2 or 3 or 4
      // 0      The request is not initialized
      // 1      The request has been set up
      // 2      The request has been sent
      // 3      The request is in process
      // 4      The request is complete
      // status ==200 =>The request succeeded.

      // console.log(ajax.response); //string
      var Data = JSON.parse(ajax.response); //convert to objects
      // console.log(Data);
      // console.log(Data.data)
      // console.log(Data.data.length); // 6
      var container = document.querySelector(".container-slide-show");
      for (var i = 0; i < Data.data.length; i++) {
        //  console.log(Data.data[i]);
        var card = document.createElement("div");
        card.classList.add("item");
        card.innerHTML = `<img src="${Data.data[i].avatar}" alt="img"  >
          <div class="caption">
            <h3>${Data.data[i].first_name} ${Data.data[i].last_name}</h3>
            <p>${Data.data[i].email}</p>
          </div>`;
        container.appendChild(card);
      }
      // ===============
      var images = document.querySelectorAll(".container-slide-show .item img");
      // console.log(images);
      images.forEach(function (image, index) {
        image.addEventListener("click", function (event) {
          openPopup(event);
        });
      });
    }
  };
}
// ========================================================

// Function to open the popup
function openPopup(event) {
  var overlay = document.getElementById("overlay");
  var popupImg = overlay.querySelector(".popup img");
  var imgSrc = event.target.src;
  popupImg.src = imgSrc;
  overlay.style.display = "block";
}

// Function to close the popup
function closePopup() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

//=============
