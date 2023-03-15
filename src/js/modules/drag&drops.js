const drop = () =>{
    const inputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((evName) =>{
        inputs.forEach((input) => {
            input.addEventListener(evName, preventDefaults, false);
        });
    });

    function preventDefaults(e){
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(item){
        item.closest('.file_upload').style.border = 'red solid 5px';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }

    function unHighlight(item){
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')){
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
        item.closest('.file_upload').style.backgroundColor = 'white';
    }

    ['dragenter', 'dragover'].forEach((evName) =>{
        inputs.forEach((input) =>{
            input.addEventListener(evName, () =>{
                highlight(input);
            });
        });
    });

    ['dragleave','drop'].forEach((evName) =>{
        inputs.forEach((input) =>{
            input.addEventListener(evName, () =>{
                unHighlight(input);
            });
        });
    });

    inputs.forEach((input) =>{
        input.addEventListener(('drop'), () =>{
            input.files = e.dataTransfer.files;
            let dots;
            let filesName = input.files[0].name.split('.');
            filesName[0].length > 5 ? dots = '...' : dots = '.';
            input.previousElementSibling.textContent = filesName[0].substring(0, 6) + dots + filesName[1];
        });
    });
};

export {drop};