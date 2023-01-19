export const exerciseOptions = {
    method: 'GET',
    //process.env is not working in my case so I am passing the key directly
    //to pass the KEY write process.env.KEY 
    headers: {
        'X-RapidAPI-Key': '335a2017e7msh490283778d0fe1ap1d2d2ejsnbe3a7cdd0b5a',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}