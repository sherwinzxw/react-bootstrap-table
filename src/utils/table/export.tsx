export function exportToCsv(targetTableId: string, fileFormat: string) {
  const separator = ",";
  // Select rows from table_id
  var rows = document.querySelectorAll("table#" + targetTableId + " tr");
  // Construct csv
  var csv = [];
  for (var i = 0; i < rows.length; i++) {
    var row = [],
      cols = rows[i].querySelectorAll("td, th") as any;
    for (var j = 0; j < cols.length; j++) {
      // Clean innertext to remove multiple spaces and jumpline (break csv)
      var data = cols[j]
        .innerText!.replace(/(\r\n|\n|\r)/gm, "")
        .replace(/(\s\s)/gm, " ");
      // Escape double-quote with double-double-quote (see https://stackoverflow.com/questions/17808511/properly-escape-a-double-quote-in-csv)
      data = data.replace(/"/g, '""');
      // Push escaped string
      row.push('"' + data + '"');
    }
    csv.push(row.join(separator));
  }
  var csv_string = csv.join("\n");
  // Download it
  var filename =
    "export_" +
    targetTableId +
    "_" +
    new Date().toLocaleDateString() +
    "." +
    fileFormat.toLowerCase();
  var link = document.createElement("a");
  link.style.display = "none";
  link.setAttribute("target", "_blank");
  link.setAttribute(
    "href",
    "data:text/csv;charset=utf-8," + encodeURIComponent(csv_string)
  );
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
export function exportToJson(targetTableId: string) {
  var table = document.getElementById(targetTableId) as any;
  var data: any = [];

  // first row needs to be headers
  var headers = [];
  for (var i = 0; i < table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].innerText
      .toLowerCase()
      .replace(/ /gi, "");
  }

  // go through cells
  for (var i = 1; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData: any = {};

    for (var j = 0; j < tableRow.cells.length; j++) {
      rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }

    data.push(rowData);
  }

  var filename =
    "export_" + targetTableId + "_" + new Date().toLocaleDateString() + ".json";

  var link = document.createElement("a");
  link.style.display = "none";
  link.setAttribute("target", "_blank");
  link.setAttribute(
    "href",
    "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data))
  );
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
export function exportToXml(targetTableId: string) {
  var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><Rows>';
  var tritem = document
    .getElementById(targetTableId)!
    .getElementsByTagName("tr");
  for (var i = 0; i < tritem.length; i++) {
    var celldata = tritem[i];
    if (celldata.cells.length > 0) {
      xml += "<Row name='" + celldata.cells[0].textContent + "'>\n";
      for (var m = 1; m < celldata.cells.length; ++m) {
        xml += "\t<data>" + celldata.cells[m].textContent + "</data>\n";
      }
      xml += "</Row >\n";
    }
  }
  xml += "</Rows></Root>";

  var filename =
    "export_" + targetTableId + "_" + new Date().toLocaleDateString() + ".xml";

  var link = document.createElement("a");
  link.style.display = "none";
  link.setAttribute("target", "_blank");
  link.setAttribute(
    "href",
    "data:text/xml;charset=utf-8," + encodeURIComponent(xml)
  );
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  //here you can rewrite the xmlstring to a new document
  //or use the hide control to store the xml text, call the text in code behind.
  //also, you can call ajax to excuet codebehind and sava the xml file
  // window.open('data:text/xml,' + xml);
}
