import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Truy cập profile', async ({ page }) => {
  const Login1 = new LoginPage(page)
  await Login1.gotoLoginPage()
  await Login1.login('thanhnp.sv93', '1')

  // await page.getByRole('img', { name: 'Avatar' }).first().click();
  // await expect(page.getByAltText('Avatar')).toBeVisible({ timeout: 5000 });
  // await page.getByAltText('Avatar').click();

await page.pause();
await page.locator('img[alt="Avatar"]').click();



  await page.getByText('Hồ sơ').click();
  await page.locator('div').filter({ hasText: /^ThanhNP SV 93Đổi mật khẩu$/ }).locator('i').click();
  await page.locator('body').setInputFiles('th.jpg');
  await page.getByRole('button', { name: 'Đổi mật khẩu' }).click();
  await page.locator('div').filter({ hasText: /^Mật khẩu$/ }).getByPlaceholder('Matkhau@').fill('Hello@123');
  await page.locator('div').filter({ hasText: /^Nhập lại mật khẩu$/ }).getByPlaceholder('Matkhau@').fill('Hello@123');
  await page.getByRole('button', { name: 'Xác nhận' }).click();
  await page.getByText('Xác nhận').click();
});
