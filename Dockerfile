# Use the official Node.js image as the base image with the specific version
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm cache clean --force
RUN npm install --verbose

# Copy the rest of the application code to the working directory
COPY . .

# Source the .env file and build the application
RUN export $(cat .env | xargs) && npm run build

# Expose port 80 to the outside world
EXPOSE 80

# Start the Next.js application on host 0.0.0.0 and port 80
CMD ["npm", "start"]
