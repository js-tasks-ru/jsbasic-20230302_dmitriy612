function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    const tr = table.rows[i];

    switch (tr.cells[2].innerHTML) {
    case "m":
      tr.classList.add("male");
      break;
    case "f":
      tr.classList.add("female");
      break;
    }

    if (Number(tr.cells[1].innerHTML) < 18) {
      tr.style.textDecoration = "line-through";
    }

    const lastTd = tr.lastElementChild;

    if (lastTd.hasAttribute("data-available")) {
      if (lastTd.getAttribute("data-available") === "true") {
        tr.classList.add("available");
        continue;
      }

      tr.classList.add("unavailable");
    } else {
      tr.setAttribute("hidden", "");
    }
  }
}
