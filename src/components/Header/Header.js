import React from "react";
import { Link, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
    let navigate = useNavigate();
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} {...props}>
            <Link href="/">
            <img src={require("../Home/WConnect.png")} alt="logo" height="184" width="190" />
            </Link>
            <div style={{ display: 'flex', gap: 40, justifyContent: 'flex-end', marginRight: 20 }}>
            <Button backgroundColor="#120D31" color="white" height='48px' width='200px' onClick={() => { navigate("/register-mhs") }}>
                Mental Health Specialist?
            </Button>
            <Button backgroundColor="#120D31" color="white" height='48px' width='200px' onClick={() => { navigate("/register-mentor") }}>
                Industry Mentor?
            </Button>
            </div>
        </div>
    )
}