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
      image: 'https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?w=2000',
      title: 'Learn More About',
      subtitle: 'Investments',
      description: 'Get Started',
    },
    {
      image: 'https://www.vanessaraath.com/wp-content/uploads/2023/03/people.jpg',
      title: 'Learn More About',
      subtitle: 'Life Cover',
      description: 'Get Started',
    },
    {
      image: 'https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?w=2000',
      title: 'Learn More About',
      subtitle: 'Disability Cover',
      description: 'Get Started',
    },
    {
      image: 'https://www.vanessaraath.com/wp-content/uploads/2023/03/people.jpg',
      title: 'Learn More About',
      subtitle: 'Educational Trust',
      description: 'Get Started',
    },
    {
      image: 'https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?w=2000',
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

}
