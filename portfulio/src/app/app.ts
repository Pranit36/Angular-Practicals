import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'Student Portfolio';

  student = {
    name: 'Abhishek Phatangare',
    title: 'Data Analyst | Computer Science Student',

    bio: `Passionate Computer Science student interested in Data Analytics,
    Python, SQL, Power BI, Machine Learning and modern web technologies.`,

    skills: [
      'Python',
      'SQL',
      'Power BI',
      'Angular',
      'Java',
      'Machine Learning',
      'HTML',
      'CSS'
    ],

    projects: [
      {
        name: 'Employee Promotion Prediction',
        description:
          'A machine learning project that predicts whether an employee is likely to be promoted based on employee performance and other factors.',
        link: 'https://github.com/'
      },

      {
        name: 'Customer Churn Analytics',
        description:
          'A data analytics project using Python, SQL and Power BI to analyze customer churn and identify high-risk customers.',
        link: 'https://github.com/'
      },

      {
        name: 'Sales Dashboard',
        description:
          'A Power BI dashboard for analyzing regional sales performance and business KPIs.',
        link: 'https://github.com/'
      }
    ],

    contact: {
      email: 'abhishekphatangare2004@gmail.com',
      phone: '+91-9373580159',
      linkedin: 'https://www.linkedin.com/in/abhishek-phatangare-147428367/',
      github: 'https://github.com/Abhishek-Phatangare'
    }
  };

}