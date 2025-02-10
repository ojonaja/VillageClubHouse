import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements  AfterViewInit{
  private swiper!: Swiper;

  ngAfterViewInit() {
    this.swiper = new Swiper(".mySwiper", {
      loop: true, // วนลูปตลอด
      autoplay: {
        delay: 2000, // เปลี่ยนภาพทุก 2 วินาที
        disableOnInteraction: false, // ไม่ให้หยุดแม้มีการแตะ/เลื่อน
        pauseOnMouseEnter: false, // ไม่หยุดแม้เอาเมาส์ไปวาง
      },
      speed: 1000, // ความเร็วในการเปลี่ยนภาพ (1 วินาที)
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    });
  }
}
