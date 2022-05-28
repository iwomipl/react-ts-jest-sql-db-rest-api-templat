export const fetchFunction = async (path: string, formObject: { login: string, password: string })=>{
    //@TODO finish creating function accessing checking and storing tokens from API maybe use Redux to check if token is there, and pass it in this function
    // const tokenObj = await localStorage.getItem('token')
    //     ?  await localStorage.getItem('token')
    //     : null;
    const result = await fetch(`http://localhost:3001/${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
    });
    return await result.json();
}
