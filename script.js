function adjustFontSize() {
    const editableBox = document.getElementById('editable-box');
    const width = window.innerWidth;

    // Scale font size based on width
    editableBox.style.fontSize = Math.max(10, width / 10) + 'px'; // Minimum font size of 10px
}

function selectAllText() {
    const editableBox = document.getElementById('editable-box');
    const range = document.createRange();
    range.selectNodeContents(editableBox);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

// Initial adjustment
adjustFontSize();

// Adjust on window resize
window.addEventListener('resize', adjustFontSize);

// Add event listener to the button
document.getElementById('select-all-button').addEventListener('click', selectAllText);

// Keyboard shortcut for select all (Ctrl + A or Command + A)
document.addEventListener('keydown', function(event) {
    // Check for 'Ctrl' or 'Command' key and 'A' key
    if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
        event.preventDefault(); // Prevent the default select all behavior
        const editableBox = document.getElementById('editable-box');
        editableBox.focus(); // Ensure the editable box is focused
        selectAllText(); // Call the select all function
    }
});