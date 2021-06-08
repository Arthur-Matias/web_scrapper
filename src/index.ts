import axios, { AxiosInstance, AxiosResponse } from "axios"

const axiosInstance:AxiosInstance = axios.create();
const urlRegex: RegExp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

class Params{
    private options: string[] = [];
    private url: string;
    private args: string[] = process.argv.slice(2);

    constructor(){
        for (let i = 0; i < this.args.length; i++) {
            const element: string = this.args[i];
            if (urlRegex.test(element)) {
                this.url = element;
            }else{
                this.options.push(element);
            }
        }
    }

    getUrl = ():string => this.url;
    getParams = ():string[] => this.options;

    hasParams = () => this.options !== [];
    hasUrl = () => this.url !== undefined;
}

const params: Params = new Params();

// console.log(`Has params: ${params.hasParams()}`);
console.log("Requesting from: " + params.getUrl());
// console.log(params.getParams());
console.log("Start -----------------------------------------------------------------------------------");
    
axiosInstance.get(params.getUrl())
    .then((res:AxiosResponse) => {
        const html = res.data;
        console.log(html);
        console.log("End -----------------------------------------------------------------------------------");
    })
    .catch(console.error);