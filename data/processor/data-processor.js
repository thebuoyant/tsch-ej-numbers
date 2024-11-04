const appRootPath = require("app-root-path");
const csvToJson = require("convert-csv-to-json");
const fileInputCsv = appRootPath + "/data/csv/data.csv";
const fileOutputData = appRootPath + "/src/data/data.json";

csvToJson.fieldDelimiter(";");
csvToJson.generateJsonFileFromCsv(fileInputCsv, fileOutputData);
