const postData = async (url, data) =>{
    const res =  await fetch(url, {
        method:'Post',
        body:data,
    } );

    return await res.text();
};

const getData = async (url) =>{
    const res = await fetch(url);

    if (!res.ok){
        throw Error;
    }

    return await res.json();
};

export {postData, getData};