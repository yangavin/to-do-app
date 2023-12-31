import {v4 as uuid} from 'uuid';

export default class{
    constructor(title, completed = false, parentListId){
        this.id = uuid();
        this.title = title;
        this.completed = completed;
        this.parentListId = parentListId;
    }
}