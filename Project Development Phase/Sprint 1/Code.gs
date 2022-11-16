function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('clg1');
}
function AddRecord(reg,pass) {
  var url = 'https://docs.google.com/spreadsheets/d/1qDWkuMgUSfKzgaDUZchqVz3sH-UHATYA_L0i0k_2X8w/edit#gid=0';
  //Paste URL of GOOGLE SHEET
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("CO1");
  webAppSheet.appendRow([reg, pass,new Date()]);

}

function checkLogin(reg,pass) {
  var url = 'https://docs.google.com/spreadsheets/d/1qDWkuMgUSfKzgaDUZchqVz3sH-UHATYA_L0i0k_2X8w/edit#gid=0';
  //Paste URL of GOOGLE SHEET
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("CO1");
  var getLastRow =  webAppSheet.getLastRow();
  //var getFirstRow =  webAppSheet.getFirstRow();
  var dd = '';


    for(var i = getLastRow; i >= 1; i--)
     {
   if(webAppSheet.getRange(i,1).getValue()==reg && webAppSheet.getRange(i, 2).getValue() == pass)
      {
             dd="TRUE";
      } // webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase())



 }

  return dd;

}