const insert_data = (data) => {
  let queries = [];
  for (let item of data) {
    // Prepare column names and values
    let columns = Object.keys(item).filter((key) => key !== "tableName");
    let values = columns.map((column) => {
      let value = item[column];
      // Check if value is a string, if it is, add single quotes around it
      if (typeof value === "string") {
        value = `${value}`;
      } else if (value === null || value === undefined) {
        value = "NULL";
      }
      return JSON.stringify(value);
    });

    // Build the query
    let query = `INSERT INTO ${item.tableName} (${columns.join(", ")}) VALUES (${values.join(", ")});`;
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
