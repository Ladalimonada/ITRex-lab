export default class RestoredPassword {
    getHtml() {
        return `
        <div class="container container__restored-password">
            <div class="title-container">
                <a a href="#sign-in">
                    <img src='./source/img/angle-left-b.png'>
                </a>
                <h2 class="title title__restore-password">Restore Password</h2>
            </div>
            <p class="text__restore-password">An email has been sent to <span>example@exam.com.</span> Check your inbox, and
                click the reset link provided.</p>
        </div>`
    }
}


