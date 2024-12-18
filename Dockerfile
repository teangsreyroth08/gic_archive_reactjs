# Use the official Node.js image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Install a simple static file server to serve the built app
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "build", "-l", "3000"]
