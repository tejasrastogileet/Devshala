# DevShala Logo Documentation

## Overview
The DevShala logo system consists of two primary assets designed for different use cases.

## Logo Assets

### 1. **DevShala Icon** (`devshala-icon.svg`)
- **Purpose**: Navbar and compact display
- **Dimensions**: 60x60px (scalable SVG)
- **Design**: Minimal code brackets with terminal symbol (›_)
- **Colors**: Teal/Cyan (#06b6d4) accent on white background
- **Location**: 
  - `/frontend/public/devshala-icon.svg`
  - `/frontend/src/assets/Logo/devshala-icon.svg`
- **Usage**: Navbar branding

### 2. **DevShala Logo** (`devshala-logo.svg`)
- **Purpose**: Full logo with text, social media, documents
- **Dimensions**: 200x200px (scalable SVG)
- **Design**: Code brackets + terminal symbol + "DevShala" text with accent underline
- **Colors**: 
  - Text: Dark slate (#1e293b)
  - Accent: Teal/Cyan (#06b6d4)
  - Background: White
- **Location**:
  - `/frontend/public/devshala-logo.svg`
  - `/frontend/src/assets/Logo/devshala-logo.svg`
- **Usage**: Footer branding, marketing materials

## Design Elements

### Icon Components
1. **Code Brackets**: Curved bracket symbols (){ } representing coding
2. **Terminal Symbol**: ›_ prompt symbolizing developer tools
3. **Color Accent**: Teal/Cyan (#06b6d4) for modern, tech-forward feel
4. **Minimal Style**: Flat design with no gradients or shadows

### Typography
- **Font**: Inter (Bold 800 weight)
- **Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Letter Spacing**: -0.5px for tight, modern look

## Current Integration

### Navbar
- Uses: `devshala-icon.svg`
- Import Path: `../../assets/Logo/devshala-icon.svg`
- Size: 45x45px
- Alt Text: "DevShala Logo"

### Footer
- Uses: `devshala-logo.svg`
- Import Path: `../../assets/Logo/devshala-logo.svg`
- Size: 50x50px
- Alt Text: "DevShala Logo"

## Color Palette
- **Primary Accent**: #06b6d4 (Teal/Cyan)
- **Text**: #1e293b (Dark Slate)
- **Background**: #ffffff (White)

## Scalability
- Both SVGs are vector-based and scale perfectly at any size
- Minimum recommended size: 30x30px for the icon
- Maximum recommended size: 500x500px for the logo

## Responsive Design
- Logo automatically scales on mobile (via responsive CSS in component)
- Maintains visual clarity across all device sizes
- Works on both light and dark backgrounds

## Future Modifications
To update the logos, edit the SVG files directly:
- Icon: `/frontend/src/assets/Logo/devshala-icon.svg`
- Logo: `/frontend/src/assets/Logo/devshala-logo.svg`

Rebuild with: `npm run build`

## Dark Mode Variant (Optional)
For a dark theme version, invert the colors:
- Text: White or light gray
- Background: Dark slate or transparent
- Accent: Teal/Cyan remains the same

---
**Created**: January 23, 2026  
**Version**: 1.0  
**Designer**: DevShala Team
