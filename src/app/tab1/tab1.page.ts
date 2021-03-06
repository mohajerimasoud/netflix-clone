import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import homeData from '../../assets/mockdata/home.json';
import { modalEnterAnimation, modalLeaveAnimation } from '../modal.animation';
import { ModalPage } from '../modal/modal.page';
import { DrawerService } from '../services/drawer.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  sections: any = homeData.sections;
  spotlight: any = homeData.spotlight;
  ops = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    // freeMode: true,
    loop: true,
  };
  constructor(
    private modalControler: ModalController,
    private drawerService: DrawerService
  ) {}

  async openCategories() {
    const modal = await this.modalControler.create({
      component: ModalPage,
      componentProps: { value: 123 },
      cssClass: 'transparent-modal',
      enterAnimation: modalEnterAnimation,
      leaveAnimation: modalLeaveAnimation,
    });

    await modal.present();
  }

  opnenInfo(title) {
    this.drawerService.opneDrawer(title);
  }
}
