First open the backend folder where all the backend code works.

now using " npm install " or " npm i " install the required dependencies.

now start it using " npm start ".

now you see your server is running in the terminal.

now it's similar to frontend.

navigate to frontend use the same commands


if you need a specific project just use the below git commands

# Step 1: Initialize the repository (without pulling any files)
git clone --no-checkout <repository-url>

# Step 2: Navigate into the cloned repository
cd <repository-directory>

# Step 3: Enable sparse checkout
git sparse-checkout init

# Step 4: Define the folder(s) you want to clone (specify the path to the folder)
git sparse-checkout set <folder-path>

# Step 5: Pull the changes (download only the specific folder)
git checkout <branch-name>
