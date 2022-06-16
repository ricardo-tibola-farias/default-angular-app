import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GlobalService {
    public supportsWebp: boolean;
    private _isFullscreenContent: boolean = false;
    public onIsMobileChange = new Subject<boolean>();

    constructor() { }

    private _init: Promise<void>;

    public init(): Promise<void> {
        if (this._init) {
            return this._init;
        }

        this._init = new Promise<void>(async resolve => {
            this.supportsWebp = await this.validateSupportsWebp();

            resolve();
        });
        this.listenWindowResize();

        return this._init;
    }

    public get isFullscreenContent(): boolean {
        return this._isFullscreenContent;
    }

    public get isMobile(): boolean {
        return window.innerWidth < 768;
    }

    public setFullscreenContent(fullscreen: boolean): void {
        setTimeout(() => { this._isFullscreenContent = fullscreen; });
    }

    private listenWindowResize(): void {
        window.addEventListener('resize', () => this.onIsMobileChange.next(this.isMobile));
    }

    public async validateSupportsWebp(): Promise<boolean> {
        if (!self.createImageBitmap) { return false; }

        const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
        const blob = await fetch(webpData).then(r => r.blob());
        return createImageBitmap(blob).then(() => true, () => false);
    }

    public copyToClipboard(value: string): void {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = value;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }

}