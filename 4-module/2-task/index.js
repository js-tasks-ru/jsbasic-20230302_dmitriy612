function makeDiagonalRed(table) {
  for (tr of table.rows) {
    tr.cells[tr.rowIndex].style.background = "red";
  }
}
