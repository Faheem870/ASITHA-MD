const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=e24jmBSB#3hbZrCK9lieTi_FquPHZ7P0sZ_OJSOCRUDcGnnIhOiA",
MONGODB: process.env.MONGODB || "",//enter mongo db url
};
