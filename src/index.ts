import axios, { AxiosInstance } from "axios"

const url:string = "[URL_HERE]";
const axiosInstance:AxiosInstance = axios.create();


axiosInstance.get(url)
    .then(res => {
        const html = res.data;
        console.log(html);
    })
    .catch(console.error);


console.log("Running ..."+ process.argv[2])