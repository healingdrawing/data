import re

# Open file1.txt in read mode and file2.txt in write mode
with open('muto.txt', 'r') as file1, open('file2.txt', 'w') as file2:
    # Read the content of file1.txt
    content = file1.read()
    
    # Insert a space after every character
    modified_content = ' '.join(content)

    # Replace any sequence of spaces with a single space
    modified_content = re.sub(' +', ' ', modified_content)
    
    # Write the modified content to file2.txt
    file2.write(modified_content)