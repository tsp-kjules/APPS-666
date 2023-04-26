const fs = require('fs');

// fs.readFile('hell_property_data.json', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

const originalPath = 'hell_property_data.json'
const modifiedPath = 'hell_property_modified.json'


// Gets properties using either originalPath or modifiedPath
const getProperties = url => {
    const jsonData = fs.readFileSync(url);
    return JSON.parse(jsonData);
}

// Update json data
const newData = getProperties(originalPath);
newData[0].owner = 'Tom Almighty'

// Write to modified data.
fs.writeFile(modifiedPath, JSON.stringify(newData), (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data written to file.')
})