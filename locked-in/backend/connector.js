const { exec } = require('child_process');

// Function to execute Python script with arguments
// eslint-disable-next-line no-unused-vars
const executePythonScript = (scriptPath, arg1, arg2) => {
    return new Promise((resolve, reject) => {
    exec(`python ${scriptPath} ${arg1} ${arg2}`, (error, stdout, stderr) => {
    if (error) {
        reject(error);
        return;
    }
    resolve({ stdout, stderr });
    });
});
};