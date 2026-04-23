function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('プライムコース 教室対抗 小テストバトル')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
