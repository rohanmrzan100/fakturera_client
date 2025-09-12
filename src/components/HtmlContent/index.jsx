const HtmlContent = (htmlString) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString.htmlString }} />;
};

export default HtmlContent;
