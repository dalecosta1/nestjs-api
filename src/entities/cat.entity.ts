export class Cats {
    id: number;
    name: string;
    age: number;
    breed: string;
}

export class ListAllEntities {
    catsArray: Cats[] = [
        {id:0, name:'Romeo', age:7, breed:'Persiano'},
        {id:1, name:'Bizet', age:12, breed:'Abissino'},
        {id:2, name:'Matisse', age:10, breed:'Bengala'},
        {id:3, name:'Minou', age:5, breed:'Ragdoll'},
        {id:4, name:'Napoleone', age:9, breed:'Sphynx'}
    ];
}