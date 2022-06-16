import { FirebaseOptions } from "@firebase/app";


export const environment: Environment = {
  production: false,
  firebaseConfig: undefined,
  apiUrl: "https://localhost:5001"
};

export interface Environment{
  production:boolean
  firebaseConfig:FirebaseOptions;
  apiUrl: 'https://localhost:5001'
}
