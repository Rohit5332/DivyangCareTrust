# Divyang Care Trust Website Documentation

## Project Architecture

This project is built using Angular and follows a modular, feature-based architecture. The codebase is organized to promote maintainability, scalability, and separation of concerns.

### Directory Structure

```
src/
├── app/
│   ├── features/           # Feature modules
│   │   ├── about/         # About page feature
│   │   ├── contact/       # Contact page feature
│   │   ├── donation/      # Donation feature
│   │   ├── gallery/       # Gallery feature
│   │   ├── home/          # Home page feature
│   │   ├── not-found/     # 404 page feature
│   │   ├── programs/      # Programs feature
│   │   └── tasks/         # Tasks feature
│   ├── services/          # Shared services
│   │   └── donation.service.ts
│   ├── core/              # Core functionality
│   ├── app.component.ts   # Root component
│   └── app.routes.ts      # Application routing
├── global_styles.css      # Global styles
├── index.html            # Main HTML file
└── main.ts              # Application entry point
```

### Architecture Overview

#### 1. Feature Modules
The application follows a feature-based architecture where each major functionality is encapsulated in its own module. This promotes:
- Better code organization
- Lazy loading capabilities
- Easier maintenance
- Clear separation of concerns

Key features include:
- **Home**: Main landing page
- **About**: Organization information
- **Contact**: Contact information and forms
- **Donation**: Donation-related functionality
- **Gallery**: Image gallery and media content
- **Programs**: Information about various programs
- **Tasks**: Task management functionality

#### 2. Services Layer
The services directory contains shared services that provide functionality across multiple features:
- **DonationService**: Handles donation-related operations and data management

#### 3. Core Module
The core module contains singleton services and components that are used throughout the application.

#### 4. Routing
The application uses Angular's routing module (`app.routes.ts`) to handle navigation between different features. This enables:
- Lazy loading of features
- Clean URLs
- Better user experience
- SEO optimization

#### 5. Styling
- Global styles are managed through `global_styles.css`
- Component-specific styles are co-located with their respective components
- The project uses modern CSS practices and responsive design

### Best Practices Implemented

1. **Modular Architecture**
   - Features are isolated in their own modules
   - Clear separation of concerns
   - Easy to maintain and scale

2. **Service Layer**
   - Centralized business logic
   - Reusable functionality
   - Better state management

3. **Component Structure**
   - Smart and presentational components
   - Clear component hierarchy
   - Reusable UI components

4. **Routing**
   - Lazy loading for better performance
   - Clean URL structure
   - Proper route guards where needed

### Development Guidelines

1. **Adding New Features**
   - Create a new directory under `features/`
   - Include necessary components, services, and models
   - Update routing configuration in `app.routes.ts`

2. **Adding New Services**
   - Place shared services in the `services/` directory
   - Use dependency injection for better testability
   - Follow Angular's service best practices

3. **Styling**
   - Use global styles for common elements
   - Keep component-specific styles with their components
   - Follow responsive design principles

4. **Testing**
   - Write unit tests for services
   - Component testing for UI elements
   - E2E testing for critical user flows

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   ng serve
   ```

3. Build for production:
   ```bash
   ng build
   ```

### Contributing

When contributing to this project:
1. Follow the established architecture
2. Create feature branches for new functionality
3. Write tests for new features
4. Update documentation as needed
5. Follow Angular style guide

### Future Considerations

1. **State Management**
   - Consider implementing NgRx for complex state management
   - Add caching layer for better performance

2. **Performance Optimization**
   - Implement lazy loading for all features
   - Optimize bundle size
   - Add service workers for offline capabilities

3. **Security**
   - Implement proper authentication
   - Add route guards where needed
   - Secure API endpoints

4. **Accessibility**
   - Ensure WCAG compliance
   - Add ARIA labels
   - Implement keyboard navigation 


5. **To Build the Project on the github**
   - After commit the changes and push to main branch
   - build the project in the doc file use command- "ng build --output-path=docs --base-href=/DivyangCareTrust/"
   - then make sure index.html and images files are inside docs not in the assets folder
   - if the browser are in the nested folder then remove that folder and bring everything outside in the docs from the browser folder and delete that folder
   - use command- "mv docs/browser/* docs/" and then --> "rm -r docs/browser".
   - once done use git command to add and then commit the changes and push
   - git add .
   - git commit -m
   - git push
   - check the URL after few minutes -"https://rohit5332.github.io/DivyangCareTrust/"