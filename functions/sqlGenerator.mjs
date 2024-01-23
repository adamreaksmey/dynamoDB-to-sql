const insert_data = (data) => {
  let queries = [];
  for (let item of data) {
    // Prepare column names and values
    let columns = Object.keys(item).filter(
      (key) => key !== "tableName" && key !== "recordType"
    );
    let values = columns.map((column) => {
      let value = item[column];
      if (typeof value === "string") {
        return `'${value.replace(/'/g, "''")}'`;
      } else if (value === null || value === undefined) {
        return "NULL";
      } else {
        return JSON.stringify(value);
      }
    });

    // Build the query
    let query = `INSERT INTO ${item.tableName} (${columns
      .map((column) => `"${column}"`)
      .join(", ")}) VALUES (${values.join(", ")});`;
    queries.push(query);
  }
  return queries;
};

const checkIfRecordTypeExists = (type, item) => {
  let questionsTable = [];
  if (type) {
    return type;
  } else {
    if ("finalThank" in item) {
      // questionsTable.push({ ...item, recordType: "subject" });
      return "subject";
    } else {
      return "question";
    }
  }
};

export { insert_data };
