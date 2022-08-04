export default class Person{
    private first_name:string;
    private last_name:string;

    constructor(first_name:string, last_name:string){
        this.first_name = first_name;
        this.last_name = last_name;
    }

    getFullName = ():string => `${this.first_name} ${this.last_name}`



    // getFullName(): string {
    //     return `${this.first_name} ${this.last_name}`;
    // }
    

}