import React, { useEffect, useState } from 'react';

const WellKnownContent = () => {
  const [fileContent, setFileContent] = useState('');

  let fetchURL = "";
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    fetchURL = "http://localhost:5000/.well-known/apple-developer-merchantid-domain-association";
  } else {
    fetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/.well-known/apple-developer-merchantid-domain-association";
  }

  useEffect(() => {
    // Fetch the file from the .well-known directory
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
  }, [fetchURL]);

  return (
    <div className="WellKnownContent" dangerouslySetInnerHTML={{ __html: fileContent }} />
  );
};

export default WellKnownContent;

