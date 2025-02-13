const resMenuItems = require("./resMenuItems"); // Adjust the path if needed
const fs = require("fs");

const jsonContent = JSON.stringify(resMenuItems, null, 2); // pretty-print with 2-space indent
fs.writeFileSync("resMenuItems.json", jsonContent);
console.log("JSON file created.");
