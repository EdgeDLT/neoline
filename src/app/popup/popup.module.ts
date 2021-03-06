import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';

import { PopupRoutingModule } from '@popup/popup.route';
import { PopupComponent } from '@popup/popup.component';
import { PopupSidenavComponent } from '@popup/sidenav/sidenav.component';
import { PopupAssetDetailComponent } from './asset-detail/asset-detail.component';

import {
    PopupLogoutDialogComponent,
    PopupClearStorageDialogComponent,
    PopupConfirmDialogComponent,
    PopupHomeMenuDialogComponent,
    PopupAddressDialogComponent,
    PopupAssetDialogComponent,
    PopupTxDetailDialogComponent,
    PopupTransferSuccessDialogComponent,
    PopupInputDialogComponent,
    PopupEditFeeDialogComponent
} from '@popup/_dialogs';
import { PopupAuthorizationListDialogComponent } from '@popup/_dialogs/authorization-list/authorization-list.dialog';
import { PopupQRCodeDialogComponent } from '@popup/_dialogs';
import { PopupLanguageDialogComponent } from '@popup/_dialogs';
import { PopupNameDialogComponent } from '@popup/_dialogs';
import { PopupAddTokenDialogComponent } from '@popup/_dialogs';
import { PopupDelTokenDialogComponent } from '@popup/_dialogs';

import { ShareModule } from '@app/share';

import { PopupWalletModule } from '@popup/wallet';
import { PopupSettingModule } from '@popup/setting';
import { PopupAboutModule } from '@popup/about';
import { PopupAccountModule } from '@popup/account';
import { PopupHomeModule } from '@popup/home';
import { PopupLoginModule } from '@popup/login';
import { PopupAddAssetModule } from '@popup/add-asset';
import { PopupNewWalletGuideModule } from './new-wallet-guide';

import { PopupServiceModule } from '@popup/_services';
import { PopupNotificationModule } from './notification';
import { TransferModule } from './transfer';

@NgModule({
    declarations: [
        PopupComponent,
        PopupSidenavComponent,
        PopupLogoutDialogComponent,
        PopupQRCodeDialogComponent,
        PopupLanguageDialogComponent,
        PopupAddressDialogComponent,
        PopupAssetDialogComponent,
        PopupNameDialogComponent,
        PopupAddTokenDialogComponent,
        PopupDelTokenDialogComponent,
        PopupClearStorageDialogComponent,
        PopupConfirmDialogComponent,
        PopupHomeMenuDialogComponent,
        PopupAuthorizationListDialogComponent,
        PopupAssetDetailComponent,
        PopupTxDetailDialogComponent,
        PopupTransferSuccessDialogComponent,
        PopupInputDialogComponent,
        PopupEditFeeDialogComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        PopupRoutingModule,
        ShareModule,
        MatMenuModule,
        MatSnackBarModule,
        MatDialogModule,
        MatSliderModule,
        PopupWalletModule,
        PopupNotificationModule,
        MatSidenavModule,
        MatListModule,
        PopupSettingModule,
        TransferModule,
        PopupAboutModule,
        PopupAccountModule,
        PopupHomeModule,
        PopupLoginModule,
        PopupAddAssetModule,
        PopupServiceModule,
        PopupNewWalletGuideModule
    ],
    exports: [],
    entryComponents: [
        PopupLogoutDialogComponent,
        PopupQRCodeDialogComponent,
        PopupLanguageDialogComponent,
        PopupAddressDialogComponent,
        PopupAssetDialogComponent,
        PopupNameDialogComponent,
        PopupAddTokenDialogComponent,
        PopupDelTokenDialogComponent,
        PopupClearStorageDialogComponent,
        PopupConfirmDialogComponent,
        PopupHomeMenuDialogComponent,
        PopupAuthorizationListDialogComponent,
        PopupTxDetailDialogComponent,
        PopupTransferSuccessDialogComponent,
        PopupInputDialogComponent,
        PopupEditFeeDialogComponent
    ]
})
export class PopupModule {}
