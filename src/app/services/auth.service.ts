import { Injectable } from "@angular/core";
import { FirebaseApp, initializeApp } from "@firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { environment } from "src/environments/environment";

@Injectable()

export class AuthService{

    private _auth = getAuth();
    private _appFireBase: FirebaseApp;

    constructor(){}

    public initializeApp(): Promise<void>{
        return new Promise(resolve => {
            this._appFireBase = initializeApp(environment.firebaseConfig);
            resolve();
        })
    }

    public get appFireBase(): FirebaseApp {
        return this._appFireBase;
    }

    public login(email, password){
        signInWithEmailAndPassword(this._auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    public logout(){
        signOut(this._auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

}