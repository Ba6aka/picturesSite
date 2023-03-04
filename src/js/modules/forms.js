import { postData } from "../servises/servises";


const forms = () =>{
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[data-upload]');
          console.log(document.querySelector('[data-upload]'));
    const message = {
        success:'success',
        loaging: 'loading',
        fail: 'fail',
        spinner: 'assets/img/loading.png',
        failure: 'assets/img/fail.png',
        ok: 'assets/img/succes.png'};
    
    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };
 

   function clearInputs(){
        inputs.forEach((input) =>{
            input.value = '';
        });
    }
   
    upload.forEach((imageInput) =>{
        imageInput.addEventListener('input', () =>{
            let dots;
            let filesName = imageInput.files[0].name.split('.');
            filesName[0].length > 5 ? dots = '...' : dots = '.';
            console.log(filesName[0].length)
            imageInput.previousElementSibling.textContent = filesName[0].substring(0, 6) + dots + filesName[1];
        });
    });

    form.forEach((item)=>{
        item.addEventListener('submit', (e) =>{
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loaging;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api;
            item.closest('.popup-consultation') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);
           
          

            postData(api, formData)
            .then(res =>{
                console.log(res);
                statusImg.setAttribute('src', message.ok);
                textMessage.textContent = message.success;
               
            })
            .catch(() =>{
               textMessage.textContent = message.fail;
               statusMessage.setAttribute('src', message.failure);
            })
            .finally(()=>{
                clearInputs();
                setTimeout(() => {
                    item.style.display = 'block';
                    item.classList.remove('fadeOutUp');
                    item.classList.add('fadeInUp');
                    statusMessage.remove();
                    textMessage.remove();
                    upload.forEach((item) =>{
                        console.log(item);
                        console.log('something')
                        item.previousElementSibling.textContent = 'file not selected';
                    });
                }, 5000);
            }
               
            );

        });
    });
   
}

export {forms};