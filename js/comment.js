document.getElementById("btn_post").addEventListener("click", function () {
  // step 2
  const commentBox = document.getElementById("new_comment");
  const newComment = commentBox.value;
  //   step 3
  const commentContainer = document.getElementById("comment_container");

  const p = document.createElement("p");
  p.innerText = newComment;

  commentContainer.appendChild(p);
  //   step 4
  commentBox.value = "";
});

// ================================

document
  .getElementById("delete-confirm")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById("btn_delete");
    if (text === "delete") {
      deleteButton.removeAttribute("disabled");
    }else{
      deleteButton.setAttribute('disabled', true)
    }
  });

  // hide the number====================

document.getElementById("btn_delete").addEventListener("click", function () {
  const secret = document.getElementById("secret_info");
  secret.style.display = "none";
});


// ==============================

document.getElementById("item-2").addEventListener("click", function (event) {
  console.log('itmesdfjsdf');
  // event.stopPropagation()
  event.stopImmediatePropagation()
});

document.getElementById("list-ul").addEventListener("click", function () {
  console.log('listul');
});

document.getElementById("list-container").addEventListener("click", function () {
  console.log('list-container');
});