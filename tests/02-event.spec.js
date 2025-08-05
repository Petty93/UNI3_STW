import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Truy cập tab "Sự kiện"', async ({ page }) => {
  const Login1 = new LoginPage(page)
  await Login1.gotoLoginPage()
  await Login1.login('thanhnp.sv93', '1')
  await page.getByRole('link', { name: 'Sự kiện' }).click();
  await page.getByRole('button', { name: 'tháng 7, 2025 uni3' }).click();
  await page.getByRole('radio', { name: 'Theo học phần' }).check();
  await page.getByText('Ngày bắt đầu: 17/07/').click();
  await page.getByText('Học phần SCORMNgày bắt đầu: 25/07/').click();
});