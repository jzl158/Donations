import Link from 'next/link'

export default function ThankYou() {
  return (
    <div className="checkout-page">
      <div className="container">
        <div className="thank-you-content">
          <h1 className="title">Thank You!</h1>
          <div className="success-icon">🎄</div>
          <p className="message">
            Your holiday donation has been successfully processed. Thank you for spreading joy and making a difference this Christmas season!
          </p>
          <p className="details">
            You will receive a confirmation email shortly with your transaction details. Happy Holidays!
          </p>
          <Link href="/" className="back-button">
            Make Another Donation
          </Link>
        </div>
      </div>
    </div>
  )
}