function generate(){
    var inputValue = document.getElementById('input_text').value;
    var selectedDataType = document.getElementById('data_type_option').value;
    var outputText = document.getElementById('output_text');
    outputText.value = convertToStatement(inputValue,selectedDataType);
}
function convertToStatement(textToConvert,dataType){

    var arr = textToConvert.split(/\r\n|\r|\n/);
    var arr = arr.filter(function(e){return e !== ""});
    var first_row = arr[0]
    var arr2 = new Array();
    for(i=1;i < arr.length; i++){
        if (arr[i].replace(/\r?\n/g,"").length ==0) break;
        if (dataType==='char') {
            inValue = "'" + arr[i] + "'";
        }else{
            inValue = arr[i];
        }
        arr2[i-1] = inValue 
	if(arr.length-1!=i) arr2[i]+=','
     }
    
    var 
    convertedText = 'WHERE\n'
    convertedText += first_row
    convertedText += ' IN\n'
    convertedText += '(\n'
    convertedText += arr2.join('\n');
    convertedText += '\n)'
    return convertedText;
}
