import { Div } from "./nav"
import { Button } from "./Button"

export const Navbar = ()=>{
    return(
        <nav style={{display:"flex",background:"rgb(0,46,37)", height:"60px"}}>
            <Div>
                <img src="https://adarna.co.za/wp-content/uploads/2020/04/shopify-logo-white-300x150.png" alt="" />
                <p>Start</p>
                <p>Sell</p>
                <p>Market</p>
                <p>Manage</p>
            </Div>
            <Div>
                <p>Pricing</p>
                <p>Learn</p>
                <p>Login</p>
                <Button>Start Free Trail</Button>
            </Div>
        </nav>
    )
}