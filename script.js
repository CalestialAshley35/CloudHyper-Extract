async function handleFile() {
  const fileInput = document.getElementById("fileInput");
  const fileContentDiv = document.getElementById("fileContent");

  if (fileInput.files.length === 0) {
    alert("Please select a file to upload.");
    return;
  }

  const file = fileInput.files[0];
  const fileType = file.name.split('.').pop().toLowerCase();

  if (fileType === "html" || fileType === "txt") {
    // For HTML or TXT files: read and display the code with download option
    const reader = new FileReader();
    reader.onload = function (e) {
      const content = e.target.result;
      fileContentDiv.innerHTML = `
        <pre>${escapeHtml(content)}</pre>
        <button onclick="downloadAsTxt('${file.name.replace(/\.[^/.]+$/, '')}', \`${escapeHtml(content)}\`)">Download as .txt</button>
      `;
    };
    reader.readAsText(file);
  } else if (fileType === "zip") {
    // For ZIP files: show contents and options to view HTML files
    const zip = await JSZip.loadAsync(file);
    fileContentDiv.innerHTML = "<p>ZIP file contents:</p><ul id='zipContentList'></ul>";
    const zipList = document.getElementById("zipContentList");

    zip.forEach((relativePath, zipEntry) => {
      const li = document.createElement("li");
      li.textContent = relativePath;

      // If an HTML file is found in the zip, add a view button
      if (relativePath.endsWith(".html")) {
        const viewButton = document.createElement("button");
        viewButton.textContent = "View Code";
        viewButton.onclick = async function () {
          const content = await zipEntry.async("text");
          fileContentDiv.innerHTML = `<pre>${escapeHtml(content)}</pre>`;
        };
        li.appendChild(viewButton);
      }
      zipList.appendChild(li);
    });
  } else {
    fileContentDiv.innerHTML = "<p>Unsupported file type.</p>";
  }
}

function downloadAsTxt(filename, content) {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${filename}.txt`;  // Ensure filename is `.txt`
  document.body.appendChild(link);    // Append to the body for Firefox compatibility
  link.click();
  document.body.removeChild(link);    // Clean up after download
  URL.revokeObjectURL(url);           // Free up memory
}

// Escape HTML to prevent XSS when displaying content
function escapeHtml(unsafe) {
  return unsafe.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
      }
