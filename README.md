# UI Project - Prospective Customer Segmentation

A modern React-based web application for displaying and analyzing prospective customer segments for a digital banking platform. This project showcases customer satisfaction and banking product access levels to identify target audience groups.

## Features

- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Customer Segmentation**: Display of three customer segments (Satisfied, Underserved, Underbanked)
- **Interactive Cards**: Scrollable customer profile cards with images and information
- **Modern Navigation**: Clean navbar with platform branding
- **Multi-Section Layout**: Organized content sections for better information hierarchy

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (JSX)** - Component development

## Project Structure

```
src/
├── App.jsx                 # Main app component
├── App.css                 # App styles
├── main.jsx                # React entry point
├── index.css               # Global styles
├── assets/                 # Static assets
├── components/
│   ├── Section1/           # Customer segmentation section
│   │   ├── Section1.jsx    # Main section component
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Page1Content.jsx # Content container
│   │   ├── LeftContent.jsx # Left panel with hero text
│   │   ├── RightContent.jsx # Right panel with customer cards
│   │   ├── RightCard.jsx   # Individual customer card
│   │   ├── RightCardContent.jsx # Card content overlay
│   │   ├── HeroText.jsx    # Hero heading and description
│   │   └── Arrow.jsx       # Arrow component
│   └── Section2/           # Additional section
│       └── Section2.jsx    # Placeholder section
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd ui-project
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Key Components

### Section1

Displays customer segmentation information with:

- **Navbar**: Branding and platform title
- **LeftContent**: Hero text explaining customer segments
- **RightContent**: Scrollable carousel of customer profile cards

### Customer Data

The app displays three sample customer segments:

1. **Satisfied** - Customers satisfied with current banking solutions
2. **Underserved** - Customers with limited access to banking products
3. **Underbanked** - Customers with minimal banking access

Each customer profile includes:

- Profile image
- Introduction/description
- Segment tag
- Quick action buttons

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Styling

The project uses Tailwind CSS for styling. Key utilities used:

- Flexbox for layout (`flex`, `items-center`, `justify-between`, etc.)
- Height classes (`h-screen`, `h-full`, `h-[90vh]`)
- Responsive padding and margins
- Rounded corners (`rounded-3xl`, `rounded-full`)
- Color utilities for backgrounds and text

## Notes

- The customer data is currently hardcoded in `App.jsx` but can be easily integrated with a backend API
- Section2 is a placeholder and ready for additional content
- The image URLs use Unsplash for demonstration purposes

## Future Enhancements

- Integrate with backend API for dynamic customer data
- Add filtering and sorting capabilities
- Implement customer details modal/page
- Add more interactive features (charts, analytics)
- Mobile optimization enhancements

## License

This project is open source and available for learning and development purposes.
