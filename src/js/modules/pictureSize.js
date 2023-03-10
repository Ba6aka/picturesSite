const pictureSize = (pictureSelector) => {
    const pictures = document.querySelectorAll(pictureSelector);

    function showPictures (event, displayParam){
        pictures.forEach((image, i) =>{
            image.addEventListener(`${event}`, (e) =>{
                const target = e.target,
                img = target.querySelector('img');

                if (event == 'mouseenter'){
                    img.setAttribute('src', `assets/img/sizes-${i+1}-1.png`);
                } else {
                    img.setAttribute('src', `assets/img/sizes-${i+1}.png`);
                }

                image.querySelectorAll('p').forEach((par) =>{
                    par.style.display = `${displayParam}`;
                });
            });
        });
    }

    showPictures('mouseenter', 'none');
    showPictures('mouseleave', 'block');
  
};

export {pictureSize};