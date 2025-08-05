import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
const path = require('path')

test('Truy cập profile', async ({ page }) => {
  const Login1 = new LoginPage(page)
  await Login1.gotoLoginPage()
  await Login1.login('thanhnp.sv93', '1')
  await page.getByRole('img', { name: 'Avatar' }).first().click();
  await page.getByText('Hồ sơ').click();
  const filePath = path.resolve(__dirname, '../upload_files/th.jpg');
  const fileInput = page.locator('.inputfile');
  await fileInput.setInputFiles(filePath);
  await expect(page.locator('text=Đổi hình đại diện thành công')).toBeVisible();
  await page.locator('.uni-btn-type-2.btn.btn-primary.btn-lg').click();
  await page.locator('div').filter({ hasText: /^Mật khẩu$/ }).getByPlaceholder('Matkhau@').fill('Hello@123');
  await page.locator('div').filter({ hasText: /^Nhập lại mật khẩu$/ }).getByPlaceholder('Matkhau@').fill('Hello@123');
  await expect(page.locator('.uni-btn-type-1.btn.btn-primary')).toBeVisible()
  await page.locator('.uni-btn-type-1.btn.btn-primary').click();
});
