import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activeSlideIndex = 0; // Index of the initially active slide

  carouselSlides = [
    {
      image: 'https://ouch-cdn2.icons8.com/93j5jo8NI5fKk_BYSZCdfAkWBwzSK9hU4uNJ_-JEkJ8/rs:fit:256:384/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODUw/LzgxZTdiMDRmLWQy/Y2QtNDYwNS05NDI4/LTcwZGU4NTdlNTZl/OC5wbmc.png',
      title: 'Learn More About',
      subtitle: 'Investments',
      description: 'Get Started',
    },
    {
      image: 'https://ouch-cdn2.icons8.com/046iHL5EuDh4zqzlVMxaB5jPItz0kkvRwqCkYPPJfwE/rs:fit:256:218/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTAv/YWNlZmI4ZWUtMGQ4/Ny00Y2E1LTgwZWMt/ZjQ5YTI5MzI4MDBj/LnBuZw.png',
      title: 'Learn More About',
      subtitle: 'Life Cover',
      description: 'Get Started',
    },
    {
      image: 'https://ouch-cdn2.icons8.com/cGfkg5FDjXEE9BOkSMPV3kuGkOeYP6XKZ6lvVwA3Nm8/rs:fit:256:312/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzI5/LzhjNWY4MGIyLTYx/NGEtNDFhMi04ZjMz/LTg5ZjEyMGM5M2I3/YS5wbmc.png',
      title: 'Learn More About',
      subtitle: 'Disability Cover',
      description: 'Get Started',
    },
    {
      image: 'https://ouch-cdn2.icons8.com/CAfThCeK-9AAimmPJrndwkdhVKEn9AxFf1Tw6-MkBlg/rs:fit:256:221/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcz/LzFmOWEzODY1LWZl/ZjQtNDAwYy1hMWQz/LTA4MjJiZTkyNmM5/MS5wbmc.png',
      title: 'Learn More About',
      subtitle: 'Educational Trust',
      description: 'Get Started',
    },
    {
      image: 'https://ouch-cdn2.icons8.com/9craA36nWy-8BCq_QPqcC6-A6lvDlAkhfUvAHVB-xMg/rs:fit:256:395/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjg2/LzEzNWM4MDUyLWU2/MmEtNDQwMy1iMzQx/LWM1MTk3YWFiZjVk/OC5wbmc.png',
      title: 'Learn More About',
      subtitle: 'Retirement Cover',
      description: 'Get Started',
    },
    // Add more slides as needed
  ];

  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.carouselSlides.length;
  }

  previousSlide() {
    if (this.activeSlideIndex === 0) {
      this.activeSlideIndex = this.carouselSlides.length - 1;
    } else {
      this.activeSlideIndex = (this.activeSlideIndex - 1) % this.carouselSlides.length;
    }
  }

  getStarted(){
    window.location.replace("/getstarted")
  }
}
