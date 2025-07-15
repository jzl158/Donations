# Web3 Donations App

A modern donation platform built with Next.js and Thirdweb that accepts both cryptocurrency and card payments.

## Features

- 🎯 **Multiple Payment Methods**: Accept crypto and card payments
- 💰 **Donation Tiers**: Bronze ($25), Gold ($50), Platinum ($100)
- 🌟 **Modern UI**: Dark theme with neon green accents
- 📱 **Responsive Design**: Works on desktop and mobile
- ⚡ **Web3 Integration**: Built on Base Mainnet with USDC

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment**:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your Thirdweb client ID.

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Configuration

### Environment Variables

- `NEXT_PUBLIC_CLIENT_ID`: Your Thirdweb client ID (get from [Thirdweb Dashboard](https://thirdweb.com/dashboard))

### Payment Settings

The app is configured for:
- **Chain**: Base Mainnet (Chain ID: 8453)
- **Token**: USDC (0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913)
- **Seller Address**: 0x50d18D9F09f61B85B88BCE55d6fd50E245090746

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run typecheck # Run TypeScript checks
```

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Web3**: Thirdweb SDK
- **Styling**: CSS with custom properties
- **Blockchain**: Base Mainnet

## Project Structure

```
app/
├── layout.tsx          # Root layout
├── page.tsx           # Main checkout page
├── globals.css        # Global styles
└── thank-you/
    └── page.tsx       # Success page
```