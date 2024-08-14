let box = document.querySelectorAll(".box");

let reset = document.querySelector(".reset-btn");

let turnO = true;

let new_btn = document.querySelector(".new_btn");

let msg = document.querySelector(".msg");

const win_pat = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

reset.addEventListener("click", () => {
  box.forEach((box) => {
    box.innerHTML = "";
    box.disabled = false;
  });
});

new_btn.addEventListener("click", () => {
  box.forEach((box) => {
    box.disabled = false;
  });
  const list = new_btn.classList;
  list.add("hide");
  const list1 = msg.classList;
  list1.add("hide");
  const list2 = reset.classList;
  list2.remove("hide");
});

const check_win = () => {
  for (let pattern of win_pat) {
    let pos1 = box[pattern[0]].innerText;
    let pos2 = box[pattern[1]].innerText;
    let pos3 = box[pattern[2]].innerText;
    console.log("abcd");
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        const b = show_winner(pos1);
      }
    }
  }
};

const show_winner = (turn) => {
  if (turn === "X") {
    msg.innerHTML = "Congratulation Winner is X";
  } else {
    msg.innerHTML = "Congratulation Winner is O";
  }
  const list = new_btn.classList;
  list.remove("hide");
  const list1 = msg.classList;
  list1.remove("hide");
  const list2 = reset.classList;
  list2.add("hide");

  box.forEach((box) => {
    box.innerHTML = "";
    box.disabled = true;
  });

};

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    const a = check_win();
    box.disabled = true;
  });
});
