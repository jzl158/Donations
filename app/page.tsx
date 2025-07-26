'use client'

import { createThirdwebClient, defineChain } from "thirdweb"
import { CheckoutWidget } from "thirdweb/react"
import { useState } from "react"
import Image from "next/image"

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "YOUR_TW_CLIENT_ID",
})

export default function ClaudeCheckout() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedAmount, setSelectedAmount] = useState("100")
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div className="campaign-page">
        <div className="campaign-container">
          <div className="image-section">
            <Image
              src="/DJPic.png"
              alt="Derrick Jackson"
              width={400}
              height={500}
              className="candidate-image"
            />
          </div>
          <div className="content-section">
            <div className="campaign-header">
              <div className="stars">★ ★ ★</div>
              <h1 className="candidate-name">DERRICK JACKSON</h1>
              <h2 className="position">FOR GOVERNOR</h2>
            </div>
            <p className="campaign-description">
              Join us in building a stronger future for our state. Derrick Jackson brings decades of public service experience and a vision for progress that puts working families first. Together, we can create opportunities for all, strengthen our communities, and ensure a brighter tomorrow for the next generation.
            </p>
            <button 
              className="donate-button"
              onClick={() => setShowModal(true)}
            >
              DONATE
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 className="modal-title">Support Our Campaign</h2>
            <p className="modal-subtitle">Choose your donation amount and payment method</p>
            
            <div className="tier-selection">
              <button 
                className={`tier-button ${selectedAmount === "1" ? "active" : ""}`}
                onClick={() => setSelectedAmount("1")}
              >
                $1
              </button>
              <button 
                className={`tier-button ${selectedAmount === "5" ? "active" : ""}`}
                onClick={() => setSelectedAmount("5")}
              >
                $5
              </button>
              <button 
                className={`tier-button ${selectedAmount === "100" ? "active" : ""}`}
                onClick={() => setSelectedAmount("100")}
              >
                $100
              </button>
              <button 
                className={`tier-button ${selectedAmount === "250" ? "active" : ""}`}
                onClick={() => setSelectedAmount("250")}
              >
                $250
              </button>
              <button 
                className={`tier-button ${selectedAmount === "500" ? "active" : ""}`}
                onClick={() => setSelectedAmount("500")}
              >
                $500
              </button>
              <button 
                className={`tier-button ${selectedAmount === "1000" ? "active" : ""}`}
                onClick={() => setSelectedAmount("1000")}
              >
                $1000
              </button>
              <button 
                className={`tier-button ${selectedAmount === "2500" ? "active" : ""}`}
                onClick={() => setSelectedAmount("2500")}
              >
                $2500
              </button>
              <button 
                className={`tier-button ${selectedAmount === "5000" ? "active" : ""}`}
                onClick={() => setSelectedAmount("5000")}
              >
                $5000
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
                  setTimeout(() => {
                    setShowModal(false)
                    window.location.href = "/thank-you"
                  }, 3000)
                }}
                onError={() => setStatus("error")}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}