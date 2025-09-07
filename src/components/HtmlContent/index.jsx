const HtmlContent = (htmlString) => {
  console.log(htmlString);

  return <div dangerouslySetInnerHTML={{ __html: htmlString.htmlString }} />;
};

export default HtmlContent;
