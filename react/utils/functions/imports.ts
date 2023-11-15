// import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export default function ImportData(getFile:any) {

  var selectedFile = getFile[0]
  var json_object:any = []
  localStorage.removeItem('ImportProceesedData')

  var reader = new FileReader()

  reader.onload = function (event) {

    var data = event.target?.result
    var workbook = XLSX.read(data, {
      type: 'binary'
    })

    workbook.SheetNames.forEach(function (sheetName) {
      var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
      var json_object = JSON.stringify(XL_row_object);
      console.log(JSON.parse(json_object));
      localStorage.setItem('ImportProceesedData', json_object)
    })
  }

  reader.onerror = function (event) {
    console.log(event);
  }

  reader.readAsBinaryString(selectedFile)

  console.log('AVERA_ DataImport: ', json_object)
  return true
}
