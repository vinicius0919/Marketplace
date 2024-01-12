import axios from "axios"

const commonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Acess-Control-Allow_Header': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
};

const api = (token) => axios.create({
    baseURL: "http://localhost:8086/",
    headers: {
        ...commonHeaders,
        'Authorization': `Bearer ${token}`
    }
});

export const getProducts = async () => {
    try {
        const minhaApi = await api('bfçiçadsygaduifery3t6ty4grq67rf$FTDR76');
        const response = await axios.get('http://localhost:8086');
        // Access the response body here:
        return response.data;
    } catch (error) {
        // Access the error when something unexpected happens:
        console.log(error);
        return error;
    }
};

export const insertProduct = async (datas) => {
    try {
        const minhaApi = await api('bfçiçadsygaduifery3t6ty4grq67rf$FTDR76');
        const response = await axios.post('http://localhost:8086/insertProduct', datas);
        // Access the response body here:
        return response.data;
    } catch (error) {
        // Access the error when something unexpected happens:
        console.log(error);
        return error;
    }
};
