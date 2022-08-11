import React, { useState } from "react";
import { GoogleLogo} from "phosphor-react"
import { GoogleAuthProvider,signInWithPopup,User} from "firebase/auth";
import "./styles.scss";
import { auth } from "../../services/firebase";

function Signin (){

    const [user,setUser] = useState<User>({} as User);

    function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth,provider)
        .then((result)=>{
            setUser(result.user);
        })
        .catch((error)=>{
            console.log(error);
        })
    }


    return (
        <div className="container">

            <div className="user">
                {user.photoURL && (<img src={user.photoURL} alt="Foto do usuário"/>)}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <h1>Acesse sua conta</h1>

            <span>
                Utilizando authenticação social, por exemplo, authenticaçaõ com o Google você <br/>
                facilita a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro
            </span>

            <button onClick={handleGoogleSignIn}>
                <GoogleLogo/>
                Entrar com Google
            </button>
        </div>
    )
}

export {Signin};