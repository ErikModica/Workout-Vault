import DOMPurify from 'dompurify';

export default function createMarkup(html) {
  if (html && html[0] !== '<') {
    const pStartTag = '<p>';
    const pEndTag = '</p>';
    html = pStartTag + html + pEndTag;
  }
  html = DOMPurify.sanitize(html);
  return { __html: html };
}
