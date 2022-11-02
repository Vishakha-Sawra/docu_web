import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div class="container">
        <div class="login-container">
          <div class="email-container">
            <h2>Login</h2>
            <input
              type="text"
              class="email"
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <input
              type="password"
              class="email"
              name="Password"
              id="password"
              placeholder="Your Password"
            />
            <input
              type="submit"
              class="submit"
              name="Submit"
              id="signUp"
              value="Sign Up"
            />
          </div>

          <h3>Or with an account:</h3>
          <div class="google-account" id="login">
            <button class="google">Sign in with Google</button>
            {/* <!-- <img src="./images/google.png" alt="google icon"/> --> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}