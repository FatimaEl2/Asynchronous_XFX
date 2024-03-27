import readline from 'readline';
import fs from 'fs';
import { ApiClient } from "./javascript-client-generated/src/ApiClient.js";
import { ProviderApi } from "./javascript-client-generated/src/api/ProviderApi.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiClient = new ApiClient();
const providerApi = new ProviderApi(apiClient);

function browse() {
  return new Promise((resolve, reject) => {
    rl.question('Enter the path to the folder you want to browse (leave it empty to browse the root): ', (path) => {
      providerApi.browseFiles(path, (error, data, response) => {
        if (error) {
          reject(error);
        } else {
          
          for (const file of data) {
            console.log(`Name: ${file.name}, Type: ${file.type}, Size: ${file.size}`);
          }
          resolve();
        }
      });
    });
  });
}

function rename() {
  return new Promise((resolve, reject) => {
    rl.question('Enter the file name or directory name you want to change: ', (filename) => {
      rl.question('Enter the new name for this file or folder: ', (newname) => {
        providerApi.renameFile(filename, newname, (error, data, response) => {
          if (error) {
            console.log('Failed to rename the file/directory.');
            reject(error);
          } else {
            console.log('File/directory renamed successfully.');
            resolve();
          }
        });
      });
    });
  });
}

function download() {
  return new Promise((resolve, reject) => {
    rl.question('Enter the file name you want to download: ', (filename) => {
      rl.question('Enter the path where the file exists (leave it empty for the root directory): ', (path) => {
        providerApi.downloadFile(filename, path, (error, data, response) => {
          if (error) {
            console.log('Failure, we could not download the file.');
            reject(error);
          } else {
            // Process the downloaded data here
            const contentDisposition = response.headers.get('content-disposition');
            let downloadedFileName = filename;

            if (contentDisposition) {
              const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(contentDisposition);
              if (matches && matches[1]) {
                downloadedFileName = matches[1].replace(/['"]/g, '');
              }
            }
            const downloadPath = `./ClientDirectory/${downloadedFileName}`;
            const fileStream = fs.createWriteStream(downloadPath);

            data.pipe(fileStream);

            fileStream.on('finish', () => {
              fileStream.close(() => {
                console.log('Success, the file is downloaded to:', downloadPath);
                resolve();
              });
            });

            fileStream.on('error', (error) => {
              console.error('Error while downloading the file:', error);
              reject(error);
            });
          }
        });
      });
    });
  });
}

function upload() {
  return new Promise((resolve, reject) => {
    rl.question('Enter the file name you want to upload: ', (filename) => {
      const filepath = `./ClientDirectory/${filename}`;
      fs.readFile(filepath, (err, data) => {
        if (err) {
          console.log('Error reading the file:', err);
          resolve();
        } else {
          const formData = {
            body: {
              name: 'File',
              data: data,
              filename: filename,
            },
            path: '',
          };

          providerApi.uploadFile(formData, (error, data, response) => {
            if (error) {
              console.error('Error while uploading the file:', error);
              reject(error);
            } else {
              console.log('File uploaded successfully.');
              resolve();
            }
          });
        }
      });
    });
  });
}

function deleteFile() {
  return new Promise((resolve, reject) => {
    rl.question('Enter the name of the file you want to delete (specify the subfolder if necessary): ', (path) => {
      providerApi.deleteFile(path, (error, data, response) => {
        if (error) {
          console.log(`Failure, we could not delete the file. ${error}`);
          reject(error);
        } else {
          console.log('Success, the file is deleted.');
          resolve();
        }
      });
    });
  });
}

function menu() {
  console.log('Welcome to XFX Menu!');
  console.log('1# Browse a directory');
  console.log('2# Rename file/directory');
  console.log('3# Download file');
  console.log('4# Upload file');
  console.log('5# Delete file');
  console.log('6# Quit');

  rl.question('Select an option (1, 2, 3, 4, 5, 6 to quit): ', (choice) => {
    if (choice === '6') {
      console.log('Goodbye!');
      rl.close();
    } else if (choice === '1') {
      browse()
        .then(menu)
        .catch((error) => console.error('Error:', error));
    } else if (choice === '2') {
      rename()
        .then(menu)
        .catch((error) => console.error('Error:', error));
    } else if (choice === '3') {
      download()
        .then(menu)
        .catch((error) => console.error('Error:', error));
    } else if (choice === '4') {
      upload()
        .then(menu)
        .catch((error) => console.error('Error:', error));
    } else if (choice === '5') {
      deleteFile()
        .then(menu)
        .catch((error) => console.error('Error:', error));
    } else {
      console.log('Invalid choice. Please select a valid option.');
      menu();
    }
  });
}

menu();
