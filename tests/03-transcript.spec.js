import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Truy cập tab "Bảng điểm"', async ({ page }) => {
  const Login1 = new LoginPage(page)
  await Login1.gotoLoginPage()
  await Login1.login('thanhnp.sv93', '1')
  await page.getByRole('link', { name: 'Bảng điểm' }).click();
  await page.locator('div:nth-child(3) > .uni-course-score-item > .uni-course-score-item__header > .uni-course-score-item__course-detail > .uni-course-score-item__course-detail-line-one > .uni-course-score-item__course-name').click();
  await page.getByRole('button', { name: 'Điểm quá trình (91%)' }).click();
  await page.getByRole('button', { name: 'Điểm thi kết thúc học phần (9' }).click();
});

