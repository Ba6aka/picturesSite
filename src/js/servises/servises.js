
const postData = async (url, data, selectorModalWindow ,loadMessage) =>{
    document.querySelector(selectorModalWindow).textContent = loadMessage;
    const res =  await fetch(url, {
        method:'Post',
        body:data,
    } );

    return await res.text();
};

export {postData};