import React, { useEffect, useState } from 'react';

const WellKnownContent = () => {
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    // Define fetchURL based on environment
    let fetchURL = "";
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      fetchURL = "http://localhost:5000/.well-known/apple-developer-merchantid-domain-association";
    } else {
      fetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/.well-known/apple-developer-merchantid-domain-association";
    }

    fetch(fetchURL)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('File not found');
        }
      })
      .then(data => setFileContent(data))
      .catch(error => console.error('Error fetching file:', error));
  }, []);

  const htmlContent = `
    <html>
      <head>
        <meta name="color-scheme" content="light dark">
      </head>
      <body>
        <pre style="word-wrap: break-word; white-space: pre-wrap;">${fileContent}</pre>
      </body>
    </html>
  `;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
      style={{ width: '100%', height: '100vh' }} // Ensure it takes up full viewport height
    />
  );
};

export default WellKnownContent;


