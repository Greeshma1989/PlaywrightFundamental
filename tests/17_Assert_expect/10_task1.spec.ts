import { test, expect, Locator } from '@playwright/test';

test.describe('Login Page Validation', () => {

    test('Validate email, password and checkbox', async ({ page }) => {

        const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';


        await page.goto(URL);
        await expect(page).toHaveURL(URL);


        await test.step('Validate Email Field', async () => {


            const LoginHeader = page.locator('#login-heading');
            await expect(LoginHeader).toBeVisible();

            const email = page.getByLabel('Email');

            // Visibility
            await expect(email).toBeVisible();

            // Enabled state
            await expect(email).toBeEnabled();

            // Editable state
            await expect(email).toBeEditable();

            // Input type
            await expect(email).toHaveAttribute('type', 'email');

            // Placeholder
            await expect(email).toHaveAttribute(
                'placeholder',
                'student@thetestingacademy.com'
            );

            // Name attribute
            await expect(email).toHaveAttribute('name', 'email');

            // Autocomplete
            await expect(email).toHaveAttribute('autocomplete', 'email');

            // Initial empty value
            await expect(email).toHaveValue('');

            // Element count
            await expect(email).toHaveCount(1);

            await email.fill('student@thetestingacademy.com');

            await expect(email).toHaveValue('student@thetestingacademy.com');

        });

        // Step 2: Password field
        await test.step('Validate Password Field', async () => {


            const password = page.locator('#password');

            // 1. Element exists exactly once
            await expect(password).toHaveCount(1);

            // 2. Element is visible
            await expect(password).toBeVisible();

            // 3. Element is attached to the DOM
            await expect(password).toBeAttached();

            // 4. Element is enabled
            await expect(password).toBeEnabled();

            // 5. Element is editable
            await expect(password).toBeEditable();

            // 6. Validate HTML attributes
            await expect(password).toHaveAttribute('id', 'password');
            await expect(password).toHaveAttribute('name', 'password');
            await expect(password).toHaveAttribute('type', 'password');

            await expect(password).toHaveAttribute(
                'placeholder',
                'Enter your password'
            );

            await expect(password).toHaveAttribute(
                'autocomplete',
                'current-password'
            );

            // 7. Verify initial empty value
            await expect(password).toHaveValue('');

            // 8. Enter password
            await password.fill('Test@12345');

            // 9. Verify entered value
            await expect(password).toHaveValue('Test@12345');

            // 10. Verify field is not empty
            await expect(password).not.toBeEmpty();

            // 11. Verify element remains visible
            await expect(password).toBeVisible();

            // 12. Verify the field is in the viewport
            await expect(password).toBeInViewport();

            // 13. Verify password input type through DOM property
            await expect(password).toHaveJSProperty('type', 'password');
        });

        // Step 3: Remember me checkbox
        await test.step('Validate Remember Me Checkbox', async () => {
            const remember = page.locator('input[name="remember"]');

            await expect(remember).toBeVisible();
            await expect(remember).toBeEnabled();
            await expect(remember).toHaveAttribute('type', 'checkbox');
            await expect(remember).toHaveAttribute('value', 'yes');

            await expect(remember).not.toBeChecked();

            await remember.check();
            await expect(remember).toBeChecked();

            await remember.uncheck();
            await expect(remember).not.toBeChecked();
        });

        test.step('Validate Forget Password link', async () => {
            const forgotPassword = page.getByTestId('form-forgot-password');

            // 1. Link exists exactly once
            await expect(forgotPassword).toHaveCount(1);

            // 2. Link is visible
            await expect(forgotPassword).toBeVisible();

            // 3. Link is attached to DOM
            await expect(forgotPassword).toBeAttached();

            // 4. Link is enabled
            await expect(forgotPassword).toBeEnabled();

            // 5. Verify link text
            await expect(forgotPassword).toHaveText('Forget password?');

            // 6. Verify href attribute
            await expect(forgotPassword).toHaveAttribute(
                'href',
                '#forgotten-password'
            );

            // 7. Verify test ID
            await expect(forgotPassword).toHaveAttribute(
                'data-testid',
                'form-forgot-password'
            );

            // 8. Verify accessible link name
            await expect(
                page.getByRole('link', { name: 'Forget password?' })
            ).toBeVisible();

        });

        
test.step('Negative assertions for Login button', async () => {
  const loginButton = page.getByTestId('login-button');

  // Button should not be hidden
  await expect(loginButton).not.toBeHidden();

  // Button should not be disabled
  await expect(loginButton).not.toBeDisabled();

  // Button should not have incorrect text
  await expect(loginButton).not.toHaveText('Sign Up');

  // Button should not have the wrong type
  await expect(loginButton).not.toHaveAttribute('type', 'button');

  // Button should not have the wrong test ID
  await expect(loginButton).not.toHaveAttribute(
    'data-testid',
    'cancel-button'
  );

  // Button should not have an incorrect class
  await expect(loginButton).not.toHaveClass('logout-btn');
});

await page.pause();

    });

});