import { load_data } from "./functions/dataLoader.mjs";
import { insert_data } from "./functions/sqlGenerator.mjs";
import fs from "fs";

import mapperFunction from "./functions/mapper.mjs";
import subject from "./log/subjects/subject.mjs";
import question from "./log/questions/question.mjs";
import answer from "./log/answers/answer.mjs";

const main = () => {
  const data = load_data("./sources/data.json");

  // very important function, it maps data to generate correct queries.
  mapperFunction(data, fs);

  // data
  const _data = [subject, question, answer];
  const contents = [];

  console.log("Generating script....")
  for (let i = 0; i < _data.length; i++) {
    const queries = insert_data(_data[i]);
    contents.push(queries.join("\n"));
  }

  fs.writeFileSync(`./generated_sql/subjects/subject.sql`, contents[0]);
  fs.writeFileSync(`./generated_sql/questions/question.sql`, contents[1]);
  fs.writeFileSync(`./generated_sql/answers/answer.sql`, contents[2]);

  console.log("SQL file generated successfully.");
};

main();
