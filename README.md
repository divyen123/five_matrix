# Five Matrix Shipping Web Platform

A premium, state-of-the-art web application for **Five Matrix Shipping Pte Ltd (Singapore)**. This site is designed with modern web aesthetics, premium animations, and high performance to present Five Matrix Shipping's maritime, trading, and logistics capabilities to a global audience.

Live Site: [https://shipping.fivematrixshipping.com/](https://shipping.fivematrixshipping.com/)

---

## 🚀 Key Features

* **Premium Visual Identity**: Implements sleek glassmorphism themes, curated dark/ocean color palettes, and responsive layouts tailored to maritime logistics.
* **Typing Title Animations**: Features custom-engineered, physics-based staggered letter slide-up and fade-in animations on all main page headings.
* **Services Grid & Details Modals**: An interactive 4x2 responsive services grid showcasing key capabilities (Sea Freight, Ship Broking, Chartering, Petroleum, etc.). Interactive cards reveal deep-dive overlay modals with custom content or link directly to affiliate platforms.
* **Staggered Container Reveals**: Elegant, viewport-triggered spring physics entrance transitions that load grid columns and list components one-by-one as the user scrolls.
* **Responsive Background Media**: Optimized high-definition background cargo/compass videos with overlays ensuring high readability.
* **Integrated Inquiry System**: Functional contact engine routing enquiries directly to `info@fivematrixshipping.com` with pre-filled subject lines.

---

## 🛠️ Technology Stack

* **Framework**: Next.js 16 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS & Vanilla CSS
* **Animations**: Motion (Framer Motion)
* **Icons**: Lucide React
* **Package Manager**: pnpm

---

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages and global CSS styling
│   ├── globals.css       # Global styles, variables, grid systems, and overlays
│   ├── layout.tsx        # Base root layout (metadata, fonts, layout tree)
│   └── page.tsx          # Main landing page assembling sections
├── components/           # Reusable React & UI components
│   ├── ui/               # Core design system elements
│   ├── about-section.tsx # About section and company core values
│   ├── contact-section.tsx # Contact form and information map
│   ├── hero.tsx          # Landing hero header with autoplay media
│   ├── services-section.tsx # Services grid and modals layout
│   ├── trading-section.tsx # Sourcing items and routes
│   ├── vision-section.tsx # Vision, Mission, and Future Outlook
│   ├── typewriter-text.tsx # custom letters typewriter animation
│   └── reveal.tsx        # Viewport enter animation wrapper
└── public/               # Static assets (images, logos, local MP4 videos)
```

---

## 🌐 Deployment & CI/CD Pipeline

The platform utilizes a modern, automated Continuous Integration and Continuous Deployment (CI/CD) pipeline powered by **Vercel** and connected directly to the project's GitHub repository.

### How the Pipeline Works:
1. **GitHub Integration**: The repository's primary branch (`main`) is monitored by Vercel webhooks.
2. **Automated Trigger**: Any new code changes pushed to the `main` branch immediately trigger an isolated containerized build process in the cloud.
3. **Production Optimization**: 
   - **Static Page Generation**: Pages are pre-rendered into highly optimized static HTML, CSS, and JS during the build phase.
   - **Compiling**: The application uses Turbo-compiling to minimize bundle size, bundle code components, compress CSS layout variables, and optimize asset paths.
   - **Validation**: Next.js and TypeScript configurations are strictly verified to ensure zero build errors before going live.
4. **Instant Edge Propagation**: Once compile checks pass, Vercel deploys the build artifacts onto their global Edge Network for fast page loads worldwide.

### Live Environment:
* **Production URL**: [https://shipping.fivematrixshipping.com/](https://shipping.fivematrixshipping.com/)
* **Custom Domain Management**: The custom DNS records are pointed directly to Vercel's global router, handling SSL certificate renewals automatically.

Any updates made to this codebase will reflect live automatically within minutes of pushing.
