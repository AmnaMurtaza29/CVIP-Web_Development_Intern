// Update the iframe content with the generated code
    updateIframeContent(outputFrame, fullCode);
}

// Function to generate the full HTML code
function generateFullCode(htmlCode, cssCode, jsCode) {
    return `
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>${htmlCode}<script>${jsCode}</script></body>
        </html>
    `;
}

// Function to update the iframe content
function updateIframeContent(outputFrame, fullCode) {
    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write(fullCode);
    outputFrame.contentDocument.close();
}

// Use event listeners to trigger the code execution
document.getElementById('run-button').addEventListener('click', run);
