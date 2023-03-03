import { postData } from "../servises/servises";


function forms(state){
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    const message = {
        success:'success',
        loaging: 'loading',
        fail: 'fail'};
    
  

   function clearInputs(){
        inputs.forEach((input) =>{
            input.value = '';
        });
    }

    form.forEach((item)=>{
        item.addEventListener('submit', (e) =>{
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end"){
                for (let key in state){
                    formData.append(key, state[key]);
                }
            }
           

            postData('assets/server.php', formData, '.status', message.loaging)
            .then(res =>{
                console.log(res);
                document.querySelector('.status').textContent = message.success;
                setTimeout(() => {
                    document.querySelectorAll('[data-modal]').forEach((item) =>{
                        item.style.display = 'none';
                        document.body.style.overflow = '';
                    });
                }, 5000);
            })
            .catch(() =>{
                document.querySelector('.status').textContent = message.fail;
            })
            .finally(()=>{
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                }, 5000);
            }
               
            );

        });
    });
   
}

export {forms};