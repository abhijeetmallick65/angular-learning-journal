# EasyTask - Team Workspace App

This project is part of my **Angular Learning Journal**.

## Live Demo

[View Production App](https://easytask-teamworkspace.netlify.app/)

## Project Overview

EasyTask is a small Angular application I built while learning the foundational concepts of Angular.  
The goal of this project was not only to follow the course, but to understand how Angular applications are structured, how components communicate, and how data flows through the UI.

This app helped me practice building a component-based user interface while documenting what I learned along the way.

---

## What I Learned

### Components

I learned that components are the building blocks of Angular applications.  
Each component controls a specific part of the UI and is defined using the `@Component` decorator.

Key ideas practiced:

- Component selectors
- Component templates
- Component styles
- Splitting the UI into reusable parts

---

### Component Communication

I learned how parent and child components communicate with each other.

Concepts practiced:

- `@Input()` for passing data from parent to child
- `@Output()` for sending custom events from child to parent
- Event emitters for user interactions

This helped me understand how Angular apps manage interaction between different parts of the UI.

---

### Data Binding

I practiced several Angular data binding techniques:

- String interpolation
- Property binding
- Event binding
- Two-way binding with `ngModel`

These concepts helped me understand how Angular connects TypeScript logic with the HTML template.

---

### Change Detection and Signals

I learned how Angular updates the UI when data changes.

The course introduced Angular’s traditional change detection system and also covered **Signals**, introduced in Angular 16, as a newer way to manage reactive state.

Key ideas:

- Angular updates the UI automatically when state changes
- `zone.js` helps Angular detect changes
- Signals allow Angular to be notified more explicitly when data changes

---

### Conditional Rendering

I practiced showing and hiding content conditionally.

Concepts covered:

- `@if` syntax in Angular 17+
- `*ngIf` for older Angular versions

This helped me understand how to render UI based on application state.

---

### Rendering Lists

I learned how to render lists of data in Angular.

Concepts covered:

- `@for` syntax in Angular 17+
- `*ngFor` in older Angular versions
- Tracking list items efficiently

---

### Dynamic Styling and Content Projection

I practiced making the UI more flexible using:

- Dynamic class binding
- Conditional classes
- `ng-content` for content projection

This helped me understand how reusable components can accept custom content from their parent.

---

### Pipes

I learned how pipes are used to format values before displaying them in the template.

Examples include formatting:

- Text
- Dates
- Numbers
- Other display values

---

### Form Handling

I practiced basic Angular form handling.

Concepts covered:

- `ngSubmit`
- Preventing default browser form submission
- Reading and handling form input values

This helped me understand how Angular manages form submissions without triggering traditional HTTP page reloads.

---

### Services and Dependency Injection

I learned how services help separate business logic from components.

Concepts practiced:

- Creating services
- Using the `@Injectable()` decorator
- Injecting services into components
- Reusing shared logic across the app

This was one of the most important concepts because it showed how Angular applications can stay organized as they grow.

---

## Key Takeaways

This project gave me a strong foundation in Angular fundamentals.

By building this app, I practiced:

- Creating and organizing components
- Passing data between components
- Handling user events
- Rendering lists and conditional content
- Using Angular’s modern template syntax
- Managing forms
- Creating reusable services
- Understanding dependency injection

The biggest takeaway was learning how Angular encourages a structured, component-driven approach to building frontend applications.

---

## Tech Stack

- Angular
- TypeScript
- HTML
- CSS
- Netlify

---

## Status

✅ Completed initial version  
✅ Deployed to Netlify  
✅ Documented learning summary  

