# Post-Disaster Community Health and Medical Supply Chain Platform

Live Demo: [Live URL](https://healthhub-991c2.web.app)
Server Repository: [Server Repo](https://github.com/Porgramming-Hero-web-course/l2-b2-assignment-6-backend-habib-N19.git)

## Overview

The Post-Disaster Community Health and Medical Supply Chain Platform is designed to provide a comprehensive solution for managing health and medical supplies in post-disaster scenarios. Leveraging technologies like React, Redux, RTK Query, and React Router DOM, this platform ensures efficient distribution and accessibility of essential supplies.

## Setup Instructions

To run this project locally, follow these steps:

- Clone the repository:

  ```**bash**
  git clone https://github.com/your-username/your-repo.git
  ```

Navigate\*\*\* to the project **\*directory**

### Install the dependencies

Start the development server

Now, you should be able to see the application running at

```
http://localhost:5173

```

## Features Implemented

### Home / Landing Page / Root Page

Implemented a visually appealing home page featuring a header/navbar with authentication support. Unauthenticated users can view all supply posts and log in, while authenticated users gain access to their dashboard and can log out. Utilized React Router DOM for seamless navigation.

### Supply Posts

Implemented supply posts display with card format, showcasing vital information like image, title, category, and amount. Added buttons for viewing details and navigating to the all supplies page.

### Top Provider Testimonials

Engaging section displaying provider testimonials with animations and sliders for enhanced user experience.

### Gallery / Carousel

Dynamic carousel displaying photos of supply donations and humanitarian works to foster transparency and trust among users.

### Summary / About Us

Informative section providing detailed insights into the platform's mission, objectives, and impact.

### All Supplies Page

Organized grid layout presenting supply posts related to health and medical supplies. Implemented navigation to view detailed supply information.

### Supply Detail Page

Standardized supply detail format showcasing detailed information about individual supplies.

### Login / Register Page

User-friendly registration and secure login interfaces enabling users to create accounts and access their accounts respectively.

### Dashboard

Dynamic dashboard interface featuring essential elements for managing user supplies and accessing statistical insights. Implemented pie charts for visual representation of supply statistics.

### Create Supply Post Page

Interactive form allowing users to contribute new supply posts with relevant information.

### Animations

Enhanced visual appeal and interactivity using animations implemented with the Framer Motion library.

# New Features

## Dynamic Theme Switching

Enable users to switch between different themes (e.g., light mode, dark mode) based on their preferences.

## Donors Leaderboard

Develop a leaderboard to showcase the top donors who have made significant contributions to the relief efforts. Display donor names or usernames along with their donation amounts to recognize their generosity.
URL: /leaderboard

## Community Gratitude Wall

Create a community gratitude wall where users can post comments of appreciation for the support they've received during difficult times. Allow users to post comments expressing their gratitude.
URL: /community

## Interactive Testimonial

Donors will be able to post testimonials about the donation posts.
URL: /dashboard/create-testimonial

## Digital Volunteer Hub

Develop a digital hub where users can discover and sign up for virtual volunteer opportunities. Create a form where users can provide their information like their email, phone number, location etc. Show the volunteer lists in the About Us page in a section named Our Volunteers.
URL: /volunteer

### Database Management

Utilized MongoDB as the backend database for efficient data storage and retrieval, optionally integrating Mongoose for defining database schemas.

### UI/UX Design

Ensured responsiveness across devices with a focus on mobile-first development for broad accessibility.

### Deployment & Testing

Deployed the application to a suitable hosting platform such as Vercel to ensure seamless accessibility for users. Thoroughly tested all functionalities, including authentication, supply management, navigation, responsiveness, and error handling, to guarantee robust performance.
