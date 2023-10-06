# W16 API 

## Introduction
W16 is an Express.js API server with a focus on security. The server comes equipped with diverse middleware integrations like CORS, Helmet, Morgan, and others, and provides basic CRUD operations as well as demonstrations of potential vulnerabilities.

## Live Deployment

BE = [https://real-erin-greyhound-yoke.cyclic.app/](https://real-erin-greyhound-yoke.cyclic.app/)

FE ClientX = [https://w-15-clientx.netlify.app/](https://w-15-clientx.netlify.app/)

Fe ClientY = [https://w-15-clienty.netlify.app/](https://w-15-clienty.netlify.app/)

## Table of Contents
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Middleware](#middleware)
- [Logger](#logger)
- [Testing](#testing)
- [Scripts](#scripts)

## Setup and Installation

### Prerequisites
- Node.js v14.x.x or higher
- npm v7.x.x or higher

### Installation Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/RevoU-FSSE-2/week-15-m-istighfar.git w16
    cd w16
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the server:
    ```sh
    npm start
    ```

## Usage

### Endpoints

#### CRUD Endpoints:
- `GET /`: Read operation.
- `POST /`: Create operation.
- `PUT /`: Update operation.
- `DELETE /`: Delete operation.

#### Vulnerabilities Demonstrations:
**NOTE: These routes are for demonstration purposes and expose potential security vulnerabilities.**
- `GET /xss`: Demonstrates a potential cross-site scripting vulnerability.
- `GET /click-jacking`: Returns a form that could be vulnerable to clickjacking attacks.
- `POST /click-jacking`: Accepts the form input.

## Middleware

### Helmet
Secures Express apps by setting various HTTP headers.

### CORS
Handles CORS headers and controls which domains can access the API.

### Body Parser
Parses incoming request bodies and makes them available under `req.body`.

### Morgan Logger
Logs HTTP requests, useful for debugging and monitoring.

## Logger

The application employs the `Morgan` middleware to log HTTP requests. 

### Log File
Logs are stored in the `logger` directory with the filename `request.log`.

### Viewing Logs:
To view the logs, navigate to the logger directory:

```sh
cat logger/request.log
```


## Testing

### Running Tests
Execute the test suites with:
```sh
npm run test
```

### Test Coverage
Tests ensure:
- Appropriate security headers.
- Correct CORS settings.
- Proper handling of other API features.