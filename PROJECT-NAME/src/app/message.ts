export class Message {
    public message: string;
    public nickname: string;
    public date: Date;

    constructor(message: string, nickname: string, date: Date) {
        this.message = message;
        this.nickname = nickname;
        this.date = date;
    }

}
