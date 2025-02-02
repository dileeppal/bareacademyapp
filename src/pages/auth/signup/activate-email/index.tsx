import React from 'react';
import EmailTemplate from 'components/EmailTemplate'
import { useNoAuth } from "lib/noAuth";


const message: string =
  "We've just sent you a link to verify your email address. Any problems?";
const ActivateEmail = () => {
  useNoAuth();
  return <EmailTemplate message={message}></EmailTemplate>;
};

export default ActivateEmail;
