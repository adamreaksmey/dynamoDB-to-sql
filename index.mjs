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

// main();

const data = [
  {
    Item: {
      SK: { S: "ORGANIZATION#b740450d-a05d-4e1d-a235-1d507702f30d" },
      userId: { S: "f340f0fc-aac7-4fd6-a449-33a1a8a17221" },
      role: {
        L: [
          { S: "b740450d-a05d-4e1d-a235-1d507702f30d:lms:student" },
          { S: "b740450d-a05d-4e1d-a235-1d507702f30d:lms:user" },
          { S: "b740450d-a05d-4e1d-a235-1d507702f30d:default:user" },
        ],
      },
      organizationId: { S: "b740450d-a05d-4e1d-a235-1d507702f30d" },
      idCard: { S: "IBF22422342" },
      userName: { S: "testuserte551085" },
      createdAt: { S: "2022-12-23T03:42:18.285Z" },
      date_of_birth: { NULL: true },
      employer: { S: "bank abc" },
      enables: { M: { lms: { BOOL: true } } },
      identifyCode: { S: "U2FsdGVkX18vPg0zf5+7b5uppDAC9y829q292mZe16o=" },
      email: { S: "testuserte551085.sala.fake?@gmail.com" },
    },
  },
  {
    Item: {
      SK: { S: "ORGANIZATION#b740450d-a05d-4e1d-a235-1d507702f30d" },
      userId: { S: "79b6150b-b687-4974-9fdf-ab72cc50e898" },
      role: {
        L: [
          { S: "b740450d-a05d-4e1d-a235-1d507702f30d:lms:student" },
          { S: "b740450d-a05d-4e1d-a235-1d507702f30d:lms:user" },
          { S: "b740450d-a05d-4e1d-a235-1d507702f30d:default:user" },
        ],
      },
      lastName: { S: "sala" },
      organizationId: { S: "b740450d-a05d-4e1d-a235-1d507702f30d" },
      userName: { S: "sala.Chhayao90" },
      idCard: { S: "IBF22428246" },
      createdAt: { S: "2022-12-23T04:19:01.414Z" },
      date_of_birth: { S: "August 09, 1991" },
      firstName: { S: "Chhayao90" },
      gender: { S: "M" },
      enables: { M: { lms: { BOOL: true } } },
      identifyCode: { S: "U2FsdGVkX19iPMJ2QfbaexDJVxTgs4k1mndlYieCgwo=" },
      examinations: {
        L: [
          {
            M: {
              organizationId: { S: "b740450d-a05d-4e1d-a235-1d507702f30d" },
              name: { S: "Exam for Jan Section 38" },
              endDate: { NULL: true },
              subjectId: { S: "a838da12-b211-4ac9-bad2-be0925f0ef90" },
              startDate: { NULL: true },
            },
          },
          {
            M: {
              organizationId: { S: "b740450d-a05d-4e1d-a235-1d507702f30d" },
              name: { S: "Copy Exam for Jan Section 7" },
              endDate: { NULL: true },
              subjectId: { S: "61d55c04-0b23-4cbb-86ab-a657be564656" },
              startDate: { NULL: true },
            },
          },
          {
            M: {
              organizationId: { S: "b740450d-a05d-4e1d-a235-1d507702f30d" },
              name: { S: "Copy Basic skills 2" },
              endDate: { S: "2024-01-31" },
              subjectId: { S: "d7034061-f69a-4bad-bd0c-d24fbc543a56" },
              startDate: { S: "2023-01-31" },
            },
          },
          {
            M: {
              organizationId: { S: "b740450d-a05d-4e1d-a235-1d507702f30d" },
              name: { S: "Exam for Jan Section 3" },
              endDate: { S: "2024-01-03" },
              subjectId: { S: "878d2b03-b5c6-49a7-8446-ed76cf16fe19" },
              startDate: { S: "2024-01-03" },
            },
          },
          {
            M: {
              organizationId: { S: "b740450d-a05d-4e1d-a235-1d507702f30d" },
              name: { S: "Exam for Jan Section 4" },
              endDate: { S: "2024-01-03" },
              subjectId: { S: "6a23fa67-5f8f-4e6f-8b01-84f94da97c65" },
              startDate: { S: "2024-01-03" },
            },
          },
          {
            M: {
              organizationId: { S: "b740450d-a05d-4e1d-a235-1d507702f30d" },
              name: { S: "Exam for Jan Section 42" },
              endDate: { NULL: true },
              subjectId: { S: "af2d79cf-31ec-4e12-bf4e-979582dae728" },
              startDate: { NULL: true },
            },
          },
        ],
      },
      updatedAt: { S: "2024-01-05T01:15:29.179Z" },
    },
  },
];

const removedItemName = data.map((item) => item.Item);
const removedValuePrefix = removedItemName.map((item) => {
  console.log(item)
  const mappedData = {
    userId: item.userId.S
  }
  return mappedData
})

console.log(removedValuePrefix);
