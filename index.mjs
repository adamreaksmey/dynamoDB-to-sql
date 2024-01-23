import { load_data } from "./functions/dataLoader.mjs";
import { insert_data } from "./functions/sqlGenerator.mjs";
import fs from "fs";

import surveyData from "./log/subject.mjs"
import mapperFunction from "./functions/mapper.mjs";

const main = () => {
  const data = load_data("./sources/data.json");

  // very important function, it maps data to generate correct queries.
  // mapperFunction(data)

  const _data = surveyData;
  const queries = insert_data(_data);
  const sqlContent = queries.join("\n");

  fs.writeFileSync("./generated_sql/migration_queries.sql", sqlContent);
  console.log("SQL file generated successfully.");
};

console.log("hello world");
main();
