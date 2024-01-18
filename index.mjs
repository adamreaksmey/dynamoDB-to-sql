import { load_data } from "./functions/dataLoader.mjs";
import { insert_data } from "./functions/sqlGenerator.mjs";
import fs from "fs";

const main = () => {
  const data = load_data("./sources/data.json");
  const queries = insert_data(data);
  const sqlContent = queries.join("\n");

  fs.writeFileSync("./generated_sql/migration_queries.sql", sqlContent);
  console.log("SQL file generated successfully.");
};

console.log("hello world");
main();
