export class LoginPage {

    constructor(page) {
        this.page = page
        this.username_textbox = page.getByRole('textbox', { name: 'Tên đăng nhập'})
        this.password_textbox = page.getByRole('textbox', { name: 'Matkhau@' })
        this.login_button = page.getByRole('button', { name: 'Đăng nhập' })
    }

    async gotoLoginPage(){
        await this.page.goto('https://uni3-dev.onschool.edu.vn/');
    }

    async login(username, password){
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password)
    await this.login_button.click()
}
}