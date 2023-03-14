function sumSalary(salaries) {
  let sum = 0;

  for (const prop in salaries) {
    if (isNaN(salaries[prop]) || !isFinite(salaries[prop])) {
      continue;
    }

    if (typeof salaries[prop] === "number") {
      sum += salaries[prop];
    }
  }

  return sum;
}
