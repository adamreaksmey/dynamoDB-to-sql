import fs from "fs";

const load_data = (file_path) => {
  let rawdata = fs.readFileSync(file_path);
  let data = JSON.parse(rawdata);
  return data;
};

export { load_data }