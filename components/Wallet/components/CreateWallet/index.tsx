import { Widget } from "@paytweed/frontend-sdk-react"
import { useCallback, useRef, useState } from "react"

const CreateWallet = () => {
    const [showSetPin, setShowPin ] = useState(false)
    const emailRef = useRef('')
    const onUserChange = async () => {
        const body = JSON.stringify({email: emailRef.current})
        await fetch("http://localhost:3010/user", {method: 'POST',body, headers: { "Content-Type": "application/json" },
    })
        setShowPin(true)
    }

    const onWalletCreated = useCallback(() => {
        window.location.href = "/";
      }, []);
    


    return <>
    {showSetPin ? <Widget.Wallet.Create onSuccess={onWalletCreated} />
    : <div>
        <h1>Welcome to Tweed Sandbox</h1>
        <h3>please Enter your Email</h3>
        <input placeholder="email" onChange={(event) => emailRef.current = event.target.value} />
        <input type="submit" onClick={onUserChange} />
    </div>}
    </>
  
}

export default CreateWallet