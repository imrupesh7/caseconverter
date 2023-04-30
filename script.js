var contentArea = document.getElementById("content-area");

contentArea.addEventListener('input', function(){
    var contentText = this.value;
    document.getElementById("character").innerHTML = contentText.length;

   
    

    contentText = contentText.trim();

    var wordsText = contentText.split(" ");
    var blankspace = wordsText.filter(function(eventspace){
        return eventspace != "";
    });

    document.getElementById("word").innerHTML = blankspace.length;
});



document.getElementById("sentenceCase").addEventListener("click", sentenceCase);
function sentenceCase(){
    contentArea.style.textTransform = "capitalize";
} 


document.getElementById("lowerCase").addEventListener("click", lowercase);
function lowercase(){
    contentArea.style.textTransform = "lowercase";
} 

document.getElementById("upperCase").addEventListener("click", uppercase);
function uppercase(){
    contentArea.style.textTransform = "uppercase";
} 





function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("download").addEventListener("click", function(){
    var text = contentArea.value;
    var filename = "rupesh.txt";
    download(filename, text);
}, false);