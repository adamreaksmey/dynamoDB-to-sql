import { load_data } from "./functions/dataLoader";
import { insert_data } from "./functions/sqlGenerator";

const fs = require("fs");

const main = () => {
  const data = load_data("./sources/data.json");
  const queries = insert_data(data);
  const sqlContent = queries.join("\n");

  fs.writeFileSync("./generated_sql/migration_queries.sql", sqlContent);
  console.log("SQL file generated successfully.");
};

main();
