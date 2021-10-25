(function () {
    function init() {
        var router = new Router([
            new Route('sign-up', 'sign-up.html', true),            
            new Route('sign-in', 'sign-in.html'),
            new Route('restore-password', 'restore-password.html'),            
            new Route('restored-password', 'restored-password.html')
        ]);
    }
    init();
}());