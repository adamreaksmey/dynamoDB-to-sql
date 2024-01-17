const insert_data = (data) => {
  let queries = [];
  for (let item of data) {
    // Prepare column names and values

    let columns = Object.keys(item).filter((key) => key !== "recordType");
    let values = columns.map((column) => {
      let value = item[column];
      // Check if value is a string, if it is, add single quotes around it
      if (typeof value === "string") {
        value = `'${value}'`;
      }
      return value;
    });

    // Build the query
    let query = `INSERT INTO ${item.recordType} (${columns.join(
      ", "
    )}) VALUES (${values.join(", ")});`;
    queries.push(query);
  }
  return queries;
};

export { insert_data }