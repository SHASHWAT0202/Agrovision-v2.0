# 🤝 Contributing to AgroVision

Thank you for your interest in contributing to AgroVision! This guide will help you get started with contributing to our smart farming platform.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Development Workflow](#development-workflow)
- [Code Style](#code-style)
- [Testing](#testing)
- [Documentation](#documentation)

## 📜 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- **Be respectful** and inclusive to all contributors
- **Be constructive** in your feedback and discussions
- **Focus on what's best** for the farming community
- **Show empathy** towards other community members
- **Use welcoming and inclusive language**

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Git for version control
- Code editor (VS Code recommended)
- Basic knowledge of React, TypeScript, and modern web development

### Development Setup

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub, then:
   git clone https://github.com/YOUR-USERNAME/agrovision-growsmart-main.git
   cd agrovision-growsmart-main
   ```

2. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/SHASHWAT0202/agrovision-growsmart-main.git
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys (see SECURITY.md)
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Visit `http://localhost:8080` to see the application

## 🛠 Contributing Guidelines

### What We're Looking For

We welcome contributions in these areas:

#### 🌱 **Core Features**
- New farming tools and calculators
- Enhanced crop monitoring capabilities
- Weather integration improvements
- AI/ML farming recommendations

#### 🎨 **UI/UX Improvements**
- Better mobile responsiveness
- Accessibility enhancements
- Design system improvements
- Animation and interaction improvements

#### 🗺 **Maps & Location Features**
- Enhanced Google Maps integration
- Offline map capabilities
- GPS tracking improvements
- Location-based recommendations

#### 🔧 **Technical Improvements**
- Performance optimizations
- Code quality improvements
- Testing additions
- Documentation updates

#### 🐛 **Bug Fixes**
- Issue resolution
- Error handling improvements
- Cross-browser compatibility
- Security enhancements

### What We Don't Accept

- Malicious code or security vulnerabilities
- Copyright violations
- Spam or low-quality contributions
- Changes that break existing functionality without good reason

## 📝 Issue Guidelines

### Before Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Check the documentation** and README
3. **Try the latest version** to see if it's already fixed

### Creating a Good Issue

#### 🐛 Bug Reports
Use the bug report template and include:
- **Clear title** describing the issue
- **Steps to reproduce** the bug
- **Expected vs actual behavior**
- **Screenshots/videos** if applicable
- **Environment details** (browser, OS, etc.)
- **Error messages** from console

#### ✨ Feature Requests
Use the feature request template and include:
- **Clear problem statement**
- **Proposed solution**
- **Alternative solutions considered**
- **Use cases and user stories**
- **Mockups or designs** if available

#### ❓ Questions
- Use discussions for general questions
- Search existing discussions first
- Provide context about what you're trying to achieve

## 🔄 Development Workflow

### Branch Naming Convention
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Testing improvements

### Example Workflow
```bash
# Sync with upstream
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feature/farmer-calendar-improvements

# Make your changes
# ... code, test, commit ...

# Push to your fork
git push origin feature/farmer-calendar-improvements

# Create pull request on GitHub
```

## 🚀 Pull Request Process

### Before Submitting
- [ ] Code follows our style guidelines
- [ ] All tests pass locally
- [ ] Documentation is updated if needed
- [ ] Self-review of the code
- [ ] Screenshots/demos for UI changes

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] Passes all existing tests

## Screenshots (if applicable)
[Add screenshots or GIFs]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed the code
- [ ] Commented complex code
- [ ] Updated documentation
```

### Review Process
1. **Automated checks** must pass (linting, tests, build)
2. **Code review** by maintainers
3. **Testing** in development environment
4. **Approval** and merge by maintainers

## 🎨 Code Style

### TypeScript/React Guidelines
```typescript
// Use functional components with hooks
const FarmingComponent: React.FC<Props> = ({ prop1, prop2 }) => {
  const [state, setState] = useState<StateType>(initialState);
  
  // Use meaningful names
  const handleCropSelection = useCallback((cropId: string) => {
    // Implementation
  }, []);

  return (
    <div className="farming-component">
      {/* Component JSX */}
    </div>
  );
};

export default FarmingComponent;
```

### CSS/Styling Guidelines
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Use semantic class names
- Maintain consistent spacing

```tsx
// Good
<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-semibold text-gray-800">Crop Status</h2>
  <p className="text-sm text-gray-600">Current growing conditions</p>
</div>
```

### File Organization
```
src/
├── components/          # Reusable components
│   ├── ui/             # Base UI components
│   ├── forms/          # Form components
│   └── layout/         # Layout components
├── pages/              # Page components
├── hooks/              # Custom hooks
├── utils/              # Utility functions
├── types/              # TypeScript types
└── config/             # Configuration files
```

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests
```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { FarmingComponent } from './FarmingComponent';

describe('FarmingComponent', () => {
  it('should display crop information correctly', () => {
    const mockProps = {
      crops: [{ id: '1', name: 'Wheat', status: 'Growing' }]
    };
    
    render(<FarmingComponent {...mockProps} />);
    
    expect(screen.getByText('Wheat')).toBeInTheDocument();
    expect(screen.getByText('Growing')).toBeInTheDocument();
  });
});
```

## 📖 Documentation

### Code Documentation
- Use JSDoc comments for functions and components
- Add inline comments for complex logic
- Update README.md for significant changes

### API Documentation
```typescript
/**
 * Calculates optimal planting date based on crop type and location
 * @param cropType - Type of crop to plant
 * @param location - Geographic location coordinates
 * @param weatherData - Historical weather data
 * @returns Recommended planting date
 */
export const calculatePlantingDate = (
  cropType: CropType,
  location: Location,
  weatherData: WeatherData
): Date => {
  // Implementation
};
```

## 🏆 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project documentation
- Release notes for significant contributions
- Special thanks in the README

## 📞 Getting Help

- **GitHub Discussions**: For general questions
- **GitHub Issues**: For bugs and feature requests
- **Discord/Slack**: [Join our community](link-to-community)
- **Email**: [maintainer-email] for sensitive issues

## 🎉 Thank You!

Every contribution, no matter how small, helps improve farming technology and supports farmers worldwide. We appreciate your time and effort in making AgroVision better!

---

**Happy Coding! 🌾🚜**