const mapperFunction = (data) => {
  const removedItemName = data.map((item) => item.Item);
  fs.writeFileSync("./log/log.js", JSON.stringify(removedItemName));
  const removedValuePrefix = removedItemName.map((item) => {
    let mappedData;

    if (
      "finalThank" in item ||
      ("recordType" in item && item.recordType.S === "subject")
    ) {
      const {
        finalThank,
        visibility,
        createdAt,
        name,
        descriptionNative,
        code,
        subjectId,
        categoryId,
        organizationId,
        sort,
        end,
        description,
        introduction,
        nameNative,
        recordType,
        start,
      } = item;

      mappedData = {
        finalThank: finalThank?.S,
        visibility: visibility?.S,
        createdAt: createdAt?.S,
        name: name?.S,
        descriptionNative: descriptionNative?.NULL ?? descriptionNative?.S,
        code: code?.S,
        subjectId: subjectId?.S,
        categoryId: categoryId?.S,
        organizationId: organizationId?.S,
        sort: sort?.N ?? sort?.NULL,
        end: end?.S,
        description: description?.S,
        introduction: introduction?.S,
        nameNative: nameNative?.NULL ?? nameNative?.S,
        recordType: recordType?.S,
        start: start?.S,
        tableName: "subject",
      };
    } else if (
      "isRequired" in item ||
      ("recordType" in item && item.recordType.S === "question")
    ) {
      const {
        content,
        questionId,
        isRequired,
        status,
        createdAt,
        subjectId,
        organizationId,
        title,
        type,
        questionAnswers,
      } = item;

      mappedData = {
        subjectId: subjectId?.S,
        questionId: questionId?.S,
        title: title?.S,
        content: content?.S,
        isRequired: isRequired?.BOOL,
        status: status?.S,
        organizationId: organizationId?.S,
        createdAt: createdAt?.S,
        tableName: "question",
        type: type?.S,
        questionAnswers: questionAnswers?.L.map((data) => {
          const mapped = {
            content: data.M.content.S,
          };
          return mapped;
        }),
      };
    } else if ("userAnswerId" in item) {
      const { userAnswerId, questionId, subjectId, userAnswers, createdAt } =
        item;

      mappedData = {
        answerId: userAnswerId?.S,
        questionId: questionId?.S,
        subjectId: subjectId?.S,
        questionAnswers: {
          type: userAnswers?.M?.type?.S,
          answer: userAnswers?.L?.map((data) => {
            const mappedData = {
              content: data.M.content.S,
            };
            return mappedData;
          }),
        },
        createdAt: createdAt?.S,
        tableName: "answer",
      };
    } else {
      return undefined;
    }
    return mappedData;
  });
  fs.writeFileSync("./log/subject.mjs", JSON.stringify(removedValuePrefix));
};

export default mapperFunction;
