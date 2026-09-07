const fs = require("fs");

const fileName = "test.txt";

console.log("Creating File...");

fs.writeFile(fileName, "Hello Node.js\n", function (err) {
  if (err) {
    console.log("Error creating file: " + err.message);
    return;
  }

  console.log("File Created");
  console.log("Reading File");

  fs.readFile(fileName, "utf8", function (err, data) {
    if (err) {
      console.log("Error reading file: " + err.message);
      return;
    }

    console.log(data);

    // updating file by appending some text
    fs.appendFile(fileName, "Learning FS Module\n", function (err) {
      if (err) {
        console.log("Error updating file: " + err.message);
        return;
      }

      console.log("File Updated");

      fs.readFile(fileName, "utf8", function (err, data) {
        if (err) {
          console.log("Error reading file: " + err.message);
          return;
        }

        console.log(data);

        // now delete the file
        fs.unlink(fileName, function (err) {
          if (err) {
            console.log("Error deleting file: " + err.message);
            return;
          }
          console.log("File Deleted");
        });
      });
    });
  });
});