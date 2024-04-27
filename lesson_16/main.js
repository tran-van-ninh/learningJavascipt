function writeLog(message){
    console.log(message);
}

writeLog("Đây là một dòng log của tôi");

function showLog() {
    var myString = "";
    for(var param of arguments){
        myString += `${param} - `;
    }
    console.log(myString);
}
showLog(1, 2,3,4,5);