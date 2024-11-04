const appRootPath = require("app-root-path");
const csvToJson = require("convert-csv-to-json");
const fileInputCsv = appRootPath + "/data/csv/data.csv";
const fileOutputCsv = appRootPath + "/data/json/data.json";

csvToJson.fieldDelimiter(";");
csvToJson.generateJsonFileFromCsv(fileInputCsv, fileOutputCsv);
