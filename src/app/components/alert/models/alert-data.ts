export class AlertData {
    public type: 'error' | 'confirmation' | 'alert';
    public title: string;
    public message: string;
    public negativeAction?: string;
    public positiveAction?: string;
    public neutralAction?: string;
}