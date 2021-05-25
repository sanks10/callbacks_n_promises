let fs= require('fs');
function Task(path, Operation){
    fs.readFile(path, Operation);
}
function Operation(err,data){
    console.log(data.toString());
}
Task("f.txt", Operation);