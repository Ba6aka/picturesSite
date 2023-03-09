const filter = () =>{
    const menu = document.querySelector('.portfolio-menu'),
          menuItems = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          categoryAllBloks = wrapper.querySelectorAll('.all'),
          categoryNo = document.querySelector('.portfolio-no');
      
    function filterCategories(typeOfCategory){
        categoryAllBloks.forEach((picture) =>{
            picture.style.display = 'none';
            picture.classList.remove('animated', 'fadeIn');
        });
        
        categoryNo.style.display = 'none';
        categoryNo.classList.remove('animated', 'fadeIn');

        if(typeOfCategory){
            typeOfCategory.forEach((item) =>{
                item.style.display = 'block';
                item.classList.add('animated', 'fadeIn');
            });
        } else {
            categoryNo.style.display = 'block';
            categoryNo.classList.add('animated', 'fadeIn');
        }
    }

    function changeCategory(btnSelector, categorySelector){
        const btn = menu.querySelector(btnSelector),
              category = wrapper.querySelectorAll(categorySelector);

        if (btnSelector == '.grandmother' || btnSelector == '.granddad'){
            btn.addEventListener('click', () =>{
                filterCategories();
            });

        } else {
            btn.addEventListener('click', () =>{
                filterCategories(category);
            });
        }
      
    }

    changeCategory('.all ', '.all');
    changeCategory('.lovers', '.lovers');
    changeCategory('.chef', '.chef');
    changeCategory('.girl', '.girl');
    changeCategory('.guy', '.guy');
    changeCategory('.grandmother','.portfolio-no' );
    changeCategory('.granddad', '.portfolio-no' );

    menu.addEventListener('click', (e) =>{
        const target = e.target;
    
        if (target && target.tagName == 'LI'){
            menuItems.forEach((btn) =>{
                btn.classList.remove('active');
                target.classList.add('active');
            });
        }
    });

};

export {filter};