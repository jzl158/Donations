# Web3 Donations Checkout Project

## Overview
This project implements a Web3 donation/checkout system using Thirdweb's CheckoutWidget for accepting cryptocurrency and card payments.

## Tech Stack
- React with TypeScript
- Thirdweb SDK for Web3 payments
- Base Mainnet (Chain ID 8453)
- USDC token payments

## Key Features
- Dual payment methods (crypto + card)
- Payment success/error feedback
- Dark theme with neon styling
- Multiple donation tiers ($25, $50, $100)

## Development Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linting
- `npm run typecheck` - Run TypeScript checks

## Environment Variables
```
NEXT_PUBLIC_CLIENT_ID=your_thirdweb_client_id
```

## Project Structure
- `Donations.md` - Basic implementation example
- `ClaudeCheckout.md` - Complete implementation guide with styling