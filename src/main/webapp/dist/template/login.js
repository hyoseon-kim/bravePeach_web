this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["login"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"main-container\">\r\n    <a class=\"regist-button facebook\">\r\n        Facebook으로 가입하기\r\n    </a>\r\n    <a class=\"regist-button naver\">\r\n        Naver로 가입하기\r\n    </a>\r\n    <a class=\"regist-button google\">\r\n        Google로 가입하기\r\n    </a>\r\n    <a class=\"regist-button brave\">\r\n        BravePeach로 가입하기\r\n    </a>\r\n\r\n    <div class=\"boundary\">\r\n        <div class=\"col-xs-5\"><hr></div>\r\n        <div class=\"col-xs-2\">또는</div>\r\n        <div class=\"col-xs-5\"><hr></div>\r\n    </div>\r\n\r\n    <form class=\"regist-form-wrapper\">\r\n        이메일 주소\r\n        <input type=\"text\" class=\"regist-input\">\r\n        비밀번호\r\n        <input type=\"text\" class=\"regist-input\">\r\n    </form>\r\n\r\n    <button class=\"regist-submit\">로그인</button>\r\n</div>";
},"useData":true});