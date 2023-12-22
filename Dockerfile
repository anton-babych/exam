# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies in the container
RUN npm install

# If you are building your code for production, run `npm ci --only=production`

# Bundle the app source inside the Docker image
COPY . .

# Make port 8080 available to the world outside the Docker container
EXPOSE 8080

# Define the command to run your app using CMD which defines your runtime
CMD [ "npm", "start" ]
