import React from "react";

const FormattedText = ({ text, className, style }) => {
  const formattedText = convertUrlsToLinks(convertAsterisksToHTML(convertBulletsToHTML(text)));

  return (
    <p
      className={`editable me-4 ${className}`}
      style={{ whiteSpace: "pre-wrap", width: "fit-content", ...style }}
      dangerouslySetInnerHTML={{ __html: formattedText }}
    />
  );
};

// Utility function to convert URLs to links
function convertUrlsToLinks(text) {
  const urlPattern =
    /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
  return text?.replace(urlPattern, (url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
}

function convertAsterisksToHTML(text) {
  return text?.replace(
    /\*\*(.*?)\*\*/g,
    (match, p1) => `<strong>${p1}</strong>`
  );
}

function convertBulletsToHTML(text) {
  const lines = text?.split("\n");
  const htmlLines = lines?.map((line) => {
    if (line?.startsWith("- ")) {
      return `<li>${line?.slice(2)}</li>`;
    }
    return line;
  });
  const joinedHtml = htmlLines?.join("\n");
  return `<ul>${joinedHtml}</ul>`;
}

export default FormattedText;
