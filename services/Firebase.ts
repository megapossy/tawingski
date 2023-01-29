import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import type { FirebaseApp } from "firebase/app";

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

export class Firebase {
  private _app: FirebaseApp;
  private _config: FirebaseConfig;

  constructor(config: FirebaseConfig) {
    this._config = config;
    // Initialize Firebase
    this._app = initializeApp(config);
  }

  get app() {
    return this._app;
  }

  get auth() {
    return getAuth(this._app);
  }

  async createUserWithEmailAndPassword(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredential;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Returns a copy of the config
   */
  get config() {
    return JSON.parse(JSON.stringify(this._config));
  }
}
