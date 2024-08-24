<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>CS 290: Web Development - Final Project</h1>
    <p>This project is the final assignment for CS 290: Web Development and demonstrates the use of various technologies to build a comprehensive web application.</p>
    <h2>Technologies Used</h2>
    <ul>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Vite</li>
    </ul>
    <h2>Features</h2>
    <ul>
        <li>Retrieve a list of all exercises</li>
        <li>View details of a specific exercise</li>
        <li>Edit existing exercises</li>
        <li>Create new exercises</li>
        <li>Delete exercises</li>
    </ul>
    <h2>Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/your-username/your-repository.git</code></pre>
        </li>
        <li>Navigate to the React UI directory and install dependencies:
            <pre><code>cd your-repository/"React UI"
npm install</code></pre>
        </li>
        <li>Navigate to the REST API directory and install dependencies:
            <pre><code>cd ../"REST API"
npm install</code></pre>
        </li>
        <li>Create a <code>.env</code> file in the <code>"REST API"</code> directory with the following variables:
            <pre><code>PORT=3000
MONGODB_CONNECT_STRING=mongodb://localhost:27017/your-database</code></pre>
        </li>
        <li>Start the REST API server:
            <pre><code>npm start</code></pre>
        </li>
        <li>Start the React UI development server:
            <pre><code>cd ../"React UI"
npm run dev</code></pre>
        </li>
    </ol>
    <h2>Usage</h2>
    <p>Once the servers are running, navigate to <a href="http://localhost:5173">http://localhost:5173</a> in your browser to access the application. You can use the interface to view, create, edit, and delete exercises.</p>
    <h2>Contributing</h2>
    <p>Contributions are welcome! Please fork the repository and submit a pull request with your changes. Make sure to include tests for any new features or bug fixes.</p>
    <h2>Acknowledgments</h2>
    <ul>
      <li>Special thanks to Professor Naumann for their guidance and support throughout the course and project.</li>
    </ul>
    <h2>Project Outcome</h2>
    <p><strong>Score Received:</strong> 100/100</p>

</body>
</html>
