const fs = require("fs");

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

const load_data = (file_path) => {
  let rawdata = fs.readFileSync(file_path);
  let data = JSON.parse(rawdata);
  return data;
};

const main = () => {
  const data = load_data("./sources/data.json");
  const queries = insert_data(data);
  const sqlContent = queries.join("\n");

  fs.writeFileSync("./generated_sql/migration_queries.sql", sqlContent);
  console.log("SQL file generated successfully.");
};

main();
