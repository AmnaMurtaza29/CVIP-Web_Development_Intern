// code_editor.js

// Function to run the code in the iframe
function run() {
    // Get the values of HTML, CSS, and JavaScript code
    var htmlCode = document.getElementById('html-code').value;
    var cssCode = document.getElementById('css-code').value;
    var jsCode = document.getElementById('js-code').value;

    // Get the iframe element
    var outputFrame = document.getElementById('output');

    // Generate the full HTML code with the provided HTML, CSS, and JavaScript code
    var fullCode = `
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>${htmlCode}<script>${jsCode}</script></body>
        </html>
    `;

    // Update the iframe content with the generated code
    outputFrame.contentDocument.open();
    outputFrame.contentDocument.write(fullCode);
    outputFrame.contentDocument.close();
}

// You can add more functionality or modifications based on your requirements.
