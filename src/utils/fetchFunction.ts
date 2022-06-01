export const fetchFunction = async (path: string, methodFromCall: string, formObject?: { login: string, password: string }) => {
    const tokenObj = localStorage.getItem('token')
        ? localStorage.getItem('token')
        : null;
    const bodyObj = formObject ? JSON.stringify(formObject) : null;
    let headersObj: {};
    if (!tokenObj) {
        headersObj = {
            'Content-Type': 'application/json',
        }
    } else {
        headersObj = {
            'Content-Type': 'application/json',
            Authorization: tokenObj,
        }
    }
    const fetchObj = bodyObj
        ?{
        method: methodFromCall,
        headers: headersObj,
        body: bodyObj,
    } :{
            method: methodFromCall,
            headers: headersObj,
        };
    try {
        const result = await fetch(`http://localhost:3001/${path}`, fetchObj);
        if (result.status === 200 || result.status === 401) {
            const data = await result.json();
            if (data.token) {
                    localStorage.setItem('token', data.token);
            }
            if (result.status === 401) {
                console.log('here')
                localStorage.removeItem('token');
            }
            return data;
        } else {
            return {
                message: 'You Are Not Logged In',
                "loginStatus": false,
            }
        }
    }catch(err){
        return {
            message: 'You Are Not Logged In',
            "loginStatus": false,
        }

    }
}
