
export enum C {
  SITE_NAME = 'Nibkit'
}
export const auth = {
  tryForFree: `Try ${C.SITE_NAME} for free`,
  joinOurCommunity: `Join our community of developers, designers, product managers and content creators, crafting authentic illustrated naratives with ease`,
  acceptTerms: [
    `By clicking the “Create My Account” button, you agree to ${C.SITE_NAME}'s `,
    `terms of service`,
    ` and `,
    `privacy policy.`
  ],
  alreadyHaveAccount: [`Already have an account? `, `Login`],
  inputLabels: {
    email: 'email',
    password: 'password',
    repeatPassword: 'Repeat Password',
    createAccount: `Create my Account`,
    forgotPassword:  'Reset',
  },
  loginTitle: 'Login',
  loginAction: 'Login',
  loginFooter: ['Forgot your Password?', 'Don\'t have an account?', 'Sign Up'],
  forgotPasswordTitle: 'Forgot your Password?',
  forgotPasswordBody: 'Enter you email to reset',
  forgotPasswordExit: ['Return to ', 'Login'],
  forgotPasswordSuccessTitle: 'Your Password Reset Request was Successful',
  forgotPasswordSuccessBody: 'We\'ve sent you an email. Please follow the instructions in the email to complete the process',
  forgotPasswordErrorTitle: 'Ooops!',
  forgotPasswordErrorBody: 'Something went wrong while trying to reset your password',
  forgotPasswordErrorRetry: ['Not to worry you can ', 'try again'],
  forgotPasswordSuccessRetry: ['Didn\'t receive an email? ', 'Resend email'],
  forgotPasswordLoadingTitle: 'Resetting your password',
  forgotPasswordLoadingBody: 'this won\'t take long',
  resetPasswordTitle: 'Reset your password',
  resetPasswordBody: 'Enter your new password below',
  resetPasswordExit: ['Return to ', 'Login'],
  verifyEmailTitle: `Try ${C.SITE_NAME} for free`,
  verifyEmailBody: 'To begin, verify you have a valid sign up email.',
  verifyEmailExit: ['Already have an account? ', 'Login'],
  verifyEmailSuccessTitle: 'Please verify your email',
  verifyEmailSuccessBody: `Once you verify your email address, you and your team can get started with your free ${C.SITE_NAME} plan`,
  verifyEmailSuccessRetry: ['Didn\'t receive an email? ', 'Resend Email'],
  verifyEmailErrorTitle: 'Ooops!',
  verifyEmailErrorBody: 'Something went wrong while trying to verify your email',
  verifyEmailErrorRetry: ['Not to worry you can ', 'try again'],
  verifyEmailLoadingTitle: 'Verifying your email!',
  verifyEmailLoadingBody: 'this wont take long',
}
