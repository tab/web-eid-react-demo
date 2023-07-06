import React, { useEffect, useState } from "react"
import { authenticate } from "@web-eid/web-eid-library/web-eid"

const IdCard = () => {
  const [nonce, setNonce] = useState("")

  const fetchIdCardNonce = () => {
    setNonce("tTGT9H7NS8uCB8fxyOLFUdiVvgWsteFFB1ZKmE37NPM=")
  }

  useEffect(() => {
    fetchIdCardNonce()
  }, [])

  const handleSubmit = async () => {
    try {
      // NOTE: https connection is required by web-eid (use ngrok http http://localhost:3000)
      const payload = await authenticate(nonce, { lang: "en" })
      console.log(payload)
      alert(payload.unverifiedCertificate)
    } catch (error) {
      console.log(error)
      alert(error)
    }
  }

  return (
    <div data-test-id="login-id-card-page">
      <button onClick={handleSubmit}>Login with ID Card</button>
    </div>
  )
}

export default IdCard
