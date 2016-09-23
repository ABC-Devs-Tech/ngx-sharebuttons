import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input} from '@angular/core';

import {ShareButton} from "../../helpers/share-buttons.class";
import {ShareProvider} from "../../helpers/share-provider.enum";
import {ShareHelper} from "../../helpers/share-buttons.helper";

@Component({
    selector: 'share-buttons',
    templateUrl: 'share-buttons.component.html',
    styleUrls: ['share-buttons.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareButtonsComponent implements OnInit{
    
    /** Share URL */
    @Input() url;

    /** Sharing title */
    @Input() shareTitle: string;
    /** Show count on share-buttons, disabled by default */
    @Input() count: boolean = false;
    /** Show total counts for all buttons, disabled by default */
    @Input() totalCount: boolean = false;

    @Input() defaultStyle: boolean = true;

    /** Buttons default templates */
    @Input() facebook: any = "<i class='fa fa-facebook'></i>";
    @Input() twitter: any = "<i class='fa fa-twitter'></i>";
    @Input() linkedIn: any = "<i class='fa fa-linkedin'></i>";
    @Input() tumblr: any = "<i class='fa fa-tumblr'></i>";
    @Input() google: any = "<i class='fa fa-google-plus'></i>";
    @Input() pinterest: any = "<i class='fa fa-pinterest-p'></i>";
    @Input() stumbleUpOn: any = "<i class='fa fa-stumbleupon'></i>";
    @Input() reddit: any = "<i class='fa fa-reddit-alien'></i>";

    private buttons:ShareButton[];

    private tCount: number = 0;

    constructor() {
    }

    ngOnInit(){
        this.buttons = [];
        if (this.facebook) {
            this.buttons.push(new ShareButton(
                ShareProvider.FACEBOOK,
                this.facebook,
                ShareHelper.linkFacebook,
                'facebook'
            ));
        }
        if (this.twitter) {
            this.buttons.push(new ShareButton(
                ShareProvider.TWITTER,
                this.twitter,
                ShareHelper.linkTwitter,
                'twitter'
            ));
        }
        if (this.google) {
            this.buttons.push(new ShareButton(
                ShareProvider.GOOGLEPLUS,
                this.google,
                ShareHelper.linkGooglePlus,
                'googleplus'
            ));
        }
        if (this.pinterest) {
            this.buttons.push(new ShareButton(
                ShareProvider.PINTEREST,
                this.pinterest,
                ShareHelper.linkPinterest,
                'pinterest'
            ));
        }
        if (this.linkedIn) {
            this.buttons.push(new ShareButton(
                ShareProvider.LINKEDIN,
                this.linkedIn,
                ShareHelper.linkLinkedin,
                'linkedin'
            ));
        }
        if (this.stumbleUpOn) {
            this.buttons.push(new ShareButton(
                ShareProvider.STUMBLEUPON,
                this.stumbleUpOn,
                ShareHelper.linkStumbleUpon,
                'stumbleupon'
            ));
        }
        if (this.tumblr) {
            this.buttons.push(new ShareButton(
                ShareProvider.TUMBLR,
                this.tumblr,
                ShareHelper.linkTumblr,
                'tumblr'
            ));
        }
        if (this.reddit) {
            this.buttons.push(new ShareButton(
                ShareProvider.REDDIT,
                this.reddit,
                ShareHelper.linkReddit,
                'reddit'
            ));
        }
    }

    counter(count: number) {
        this.tCount += count;
    }

}
