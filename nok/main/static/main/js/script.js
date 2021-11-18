let nameVal;
let lastnameVal;

document.getElementById('code').addEventListener('change', (e) => {
    var file = e.target.files[0];

    var fileReader = new FileReader();  

    fileReader.onload = function() {

        var typedarray = new Uint8Array(this.result);

        const loadingTask = pdfjsLib.getDocument(typedarray);
        loadingTask.promise.then(pdf => {
            // The document is loaded here...
            pdf.getPage(1).then( function(page){
                page.getTextContent().then( function(text) {
                    console.log(text);
                    nameVal = text.items[0].str.split(':')[1].trim();
                    lastnameVal = text.items[1].str.split(':')[1].trim();
                    console.log(nameVal, lastnameVal);
                })
            })
        });
                    

    };
    fileReader.readAsArrayBuffer(file);
})


