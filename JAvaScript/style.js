"sue strict"



const gettingUsersInfo = async function () {
    const fetchingUsers = await fetch("https://dummyjson.com/users").then(response => response.json())
        .then(data => {
            let dataUSersInfo = data.users
            dataUSersInfo.forEach((item) => {
                const userCard = createElement("div", "cardPerson bg-success p-5 m-2 rounded-4 border-2", `<img src="${item.image}" class="badbashara" alt="rasm"><h2 class="titleUser">${item.firstName}</h2>
                <p class="agent">${item.userAgent}</p><a href="#" class="moreInfo p-3" id="enkir">MORE INFO</a><div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle btn-drop" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item text-black href="#">Tel:${item.phone}</a></li>
    <li><a class="dropdown-item text-black" href="#">Email:${item.email}</a></li>
    <li><a class="dropdown-item text-black" href="#">username:${item.username}</a></li>
    <li><a class="dropdown-item text-black" href="#">password:${item.password}</a></li>
  </ul>
</div>`)
                $(".box").appendChild(userCard)
               
            })
               let morebtn = document.querySelectorAll(".moreInfo");
               let info = document.querySelectorAll(".btn-drop");
               for (let i = 0; i < morebtn.length; i++) {
                   morebtn[i].addEventListener("click", () => {
                       info[i].classList.toggle("d-block")
                      
                   })
               }
        })

      

}


 
gettingUsersInfo()



// let elBtn = document.querySelectorAll("#more_click");
// let fullinfo = document.querySelectorAll(".fullInfo");
// for (let index = 0; index < elBtn.length; index++) {
//     elBtn[index].addEventListener("click", () => {
//         fullinfo[index].classList.toggle("d-block");
//     });
// }

// let elBtn = document.querySelectorAll("#more_click");
// let fullinfo = document.querySelectorAll(".fullInfo");
// for (let index = 0; index < elBtn.length; index++) {
//     elBtn[index].addEventListener("click", () => {
//         fullinfo[index].classList.toggle("d-block");
//     });
// }


// async function getMessage() {
//     const text = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const result = await text.json();
//     result.forEach((post) => {
//         const postItem = createElement("div", "card p-4 m-2 rounded-4 border-2", `<h2>${post.title}</h2><p>${post.body}</p>`)
//         $(".box").appendChild(postItem)
//     })
// }
// getMessage()



// Quyidagi misol faylni oladi va tarkibni ko'rsatadi:
// fetch(file)
//     .then(x => x.text())
//     .then(y => myDisplay(y));

// Fetch asenkron va kutishga asoslanganligi sababli, yuqoridagi misolni quyidagicha tushunish osonroq bo'lishi mumkin:
// async function getText(file) {
//     let x = await fetch(file);
//     let y = await x.text();
//     myDisplay(y);
// }


// Yoki undan ham yaxshiroq: x va y o 'rniga tushunarli nomlardan foydalaning:
// async function getText(file) {
//     let myObject = await fetch(file);
//     let myText = await myObject.text();
//     myDisplay(myText);
// }