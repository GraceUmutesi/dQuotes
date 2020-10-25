export class Quote {
    showVotes:boolean;
    constructor(public id: number, public statement: string, public author: string, public senderName: string, public postDate:Date) {
        this.showVotes=false;
        
    }

}
