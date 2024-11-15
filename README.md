# CloudHyper Extract

CloudHyper Extract is a simple and sleek file extraction tool that allows users to upload `.html`, `.txt`, and `.zip` files. It enables users to view the contents of these files and download the content as `.txt` files for `.html` and `.txt` file types. For `.zip` files, the tool displays the contents and provides options to view and download HTML files.

## Features

- **File Upload**: Supports `.html`, `.txt`, and `.zip` files.
- **View Content**: For `.html` and `.txt` files, the content is displayed in a readable format.
- **Download as `.txt`**: Allows the user to download the content of `.html` and `.txt` files as `.txt`.
- **ZIP Support**: For `.zip` files, displays the contents and enables viewing HTML files directly.
- **Sleek and Modern UI**: Clean and user-friendly interface with scrollable content viewing.

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- No installation required. Just open the HTML file in a browser.

## How to Use

1. **Upload Files**: Click on the "Choose File" button to select a `.html`, `.txt`, or `.zip` file.
2. **View File Content**: Once uploaded, the content of the file will be displayed. For `.zip` files, a list of file contents will be shown.
3. **Download Content**: 
   - For `.html` and `.txt` files, you can download the content as a `.txt` file by clicking the "Download as .txt" button.
   - For `.zip` files containing HTML files, you can view the code by clicking the "View Code" button next to the HTML files listed.

## Project Structure

- `index.html`: The main HTML file for the application.
- `styles.css`: The CSS file for the layout and styling of the page.
- `script.js`: The JavaScript file that contains the functionality for handling file uploads, displaying content, and downloading files.
- `README.md`: This file.

## How It Works

1. **File Input**: The user uploads a file using the file input element.
2. **JSZip Library**: For `.zip` files, the `JSZip` library is used to extract and read the contents of the ZIP archive.
3. **File Reading**: For `.html` and `.txt` files, JavaScript’s `FileReader` is used to read the file content.
4. **Download**: When the user clicks on "Download as .txt", JavaScript creates a `Blob` from the content and triggers a download.

## Example

### Upload a File

- Select a `.html` or `.txt` file, and the content will be displayed.
- For a `.zip` file, the contents will be shown with options to view HTML files.

### Download the File

Click the "Download as .txt" button to download the content of `.html` or `.txt` files.

## Libraries Used

- **JSZip**: A JavaScript library for creating, reading, and editing `.zip` archives.

  CDN Link: `https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js`

## License

This project is open-source and available under the [MIT License](LICENSE).
