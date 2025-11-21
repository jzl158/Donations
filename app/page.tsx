'use client'

import { createThirdwebClient, defineChain } from "thirdweb"
import { CheckoutWidget } from "thirdweb/react"
import { useState, useEffect } from "react"
import Image from "next/image"

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID || "YOUR_TW_CLIENT_ID",
})

export default function ChristmasDonations() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedAmount, setSelectedAmount] = useState("50")
  const [showModal, setShowModal] = useState(false)
  const [ethPrice, setEthPrice] = useState<number>(0)
  const [ethAmount, setEthAmount] = useState<string>("0")

  useEffect(() => {
    // Fetch current ETH price
    const fetchEthPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
        const data = await response.json()
        setEthPrice(data.ethereum.usd)
      } catch (error) {
        console.error('Failed to fetch ETH price:', error)
        setEthPrice(3500) // Fallback price
      }
    }
    fetchEthPrice()
  }, [])

  useEffect(() => {
    // Calculate ETH amount when selectedAmount or ethPrice changes
    if (ethPrice > 0) {
      const usdAmount = parseFloat(selectedAmount)
      const calculatedEthAmount = usdAmount / ethPrice
      setEthAmount(calculatedEthAmount.toString())
    }
  }, [selectedAmount, ethPrice])

  return (
    <>
      <div className="campaign-page">
        <div className="campaign-container">
          <div className="content-section">
            <div className="campaign-header">
              <h1 className="candidate-name">HOLIDAY GIVING</h1>
            </div>
            <p className="campaign-description">
              Spread joy this holiday season with crypto! Your donation helps bring warmth and happiness to those in need during this special time of year. Every contribution makes a difference in creating magical moments and supporting our community.
            </p>
            <button
              className="donate-button"
              onClick={() => setShowModal(true)}
            >
              DONATE NOW
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
            <h2 className="modal-title">Holiday Donation</h2>
            <p className="modal-subtitle">Choose your amount and payment method</p>

            <div className="tier-selection">
              <button
                className={`tier-button ${selectedAmount === "25" ? "active" : ""}`}
                onClick={() => setSelectedAmount("25")}
              >
                $25
              </button>
              <button
                className={`tier-button ${selectedAmount === "50" ? "active" : ""}`}
                onClick={() => setSelectedAmount("50")}
              >
                $50
              </button>
              <button
                className={`tier-button ${selectedAmount === "100" ? "active" : ""}`}
                onClick={() => setSelectedAmount("100")}
              >
                $100
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
                amount={ethAmount}
                tokenAddress="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
                seller="0xc02CfA39526bC088Ff0513D8169C2824fC7112D5"
                paymentMethods={["crypto", "card"]}
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