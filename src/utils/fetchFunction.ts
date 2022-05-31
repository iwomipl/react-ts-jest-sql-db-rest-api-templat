export const fetchFunction = async (path: string, formObject: { login: string, password: string }) => {
    const tokenObj = localStorage.getItem('token')
        ?  localStorage.getItem('token')
        : null;
    const headersObj: {} = tokenObj
        ? {
        'Content-Type': 'application/json',
    }
    : {
            'Content-Type': 'application/json',
            Authorization: tokenObj,
        }
    const result = await fetch(`http://localhost:3001/${path}`, {
        method: 'POST',
        headers: headersObj,
        body: JSON.stringify(formObject),
    });
    const data = await result.json();
    if (data.token){
        localStorage.setItem('token', data.token);
    }
    return data;
}
