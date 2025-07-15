'use client'

import { createThirdwebClient, defineChain } from "thirdweb"
import { CheckoutWidget } from "thirdweb/react"
import { useState } from "react"

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "YOUR_TW_CLIENT_ID",
})

export default function ClaudeCheckout() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedAmount, setSelectedAmount] = useState("50")

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="title">Support Our Project</h1>
        <p className="subtitle">Choose your donation amount and payment method</p>
        
        <div className="tier-selection">
          <button 
            className={`tier-button ${selectedAmount === "25" ? "active" : ""}`}
            onClick={() => setSelectedAmount("25")}
          >
            Bronze – $25
          </button>
          <button 
            className={`tier-button ${selectedAmount === "50" ? "active" : ""}`}
            onClick={() => setSelectedAmount("50")}
          >
            Gold – $50
          </button>
          <button 
            className={`tier-button ${selectedAmount === "100" ? "active" : ""}`}
            onClick={() => setSelectedAmount("100")}
          >
            Platinum – $100
          </button>
        </div>

        {status === "success" && (
          <div className="feedback success">✅ Payment Successful!</div>
        )}
        {status === "error" && (
          <div className="feedback error">❌ Payment Failed. Try Again.</div>
        )}

        <div className="widget-container">
          <CheckoutWidget
            client={client}
            chain={defineChain(8453)}
            amount={selectedAmount}
            tokenAddress="0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"
            seller="0x50d18D9F09f61B85B88BCE55d6fd50E245090746"
            paymentMethods={["crypto", "card"]}
            currency="USD"
            onSuccess={() => {
              setStatus("success")
              setTimeout(() => window.location.href = "/thank-you", 3000)
            }}
            onError={() => setStatus("error")}
          />
        </div>
      </div>
    </div>
  )
}