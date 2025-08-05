import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('Truy cập đợt học đang diễn ra', async ({ page }) => {
  const Login1 = new LoginPage(page)
  await Login1.gotoLoginPage()
  await Login1.login('thanhnp.sv1262', '1')
  await page.getByText('Học phần NPT001').nth(1).click();
  await page.getByText('Giới thiệu tổng quan').click();
  await page.getByText('Lịch trình học tập').click();
  await page.getByText('Nhiệm vụ học tập').click();
  await page.getByText('Phương pháp tính điểm').click();
  await page.getByText('Tài liệu tham khảo').click();
  await page.getByText('Nội dung học phần').click();
  await page.locator('div').filter({ hasText: /^Unit 1$/ }).nth(1).click();
  await page.getByRole('button', { name: 'Xem bài học' }).first().click();
  await page.getByText('Chia sẻ ý kiến với cộng đồng').click();
  const frameHandle1 = await page.locator('iframe[title="Rich Text Area"]').elementHandle();
  const frame1 = await frameHandle1.contentFrame();
  await frame1.getByLabel('Rich Text Area').fill('Thảo luận 1');
  await frame1.getByLabel('Rich Text Area').press(' ');
  await expect(page.getByRole('button', { name: 'Đăng' })).toBeEnabled();
  await page.getByRole('button', { name: 'Đăng' }).click();
  await page.waitForTimeout(500)

  await page.getByText('Hỏi đáp với giảng viên').click();
  await page.getByText('Đừng ngại hỏi, giảng viên sẵn sàng hỗ trợ bạn...').click();
  // await page.locator('.uni-editor-comment__default--input div').click();

  const frameHandle2 = await page.locator('iframe[title="Rich Text Area"]').elementHandle();
  const frame2 = await frameHandle2.contentFrame();
  if (!frame2) throw new Error('Iframe chưa load xong');

  await frame2.getByLabel('Rich Text Area').fill('Hỏi đáp 1');
  await frame2.getByLabel('Rich Text Area').press(' ');
  // await page.waitForTimeout(500)

  await expect(page.getByRole('button', { name: 'Đăng' })).toBeEnabled();

  await page.getByRole('button', { name: 'Đăng' }).click();
});