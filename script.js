var portfolio = document.getElementById("portfolio");
var portfolio_btn = document.getElementById("portfolio-btn");
var skills = document.getElementById("skills");
var skills_btn = document.getElementById("skills-btn");
if (portfolio && portfolio_btn && skills && skills_btn) {
    portfolio_btn.addEventListener("click", function () {
        skills.style.display = "none";
        portfolio.style.display = "flex";
        skills_btn.classList.remove("active-btn");
        portfolio_btn.classList.add("active-btn");
    });
    skills_btn.addEventListener("click", function () {
        portfolio.style.display = "none";
        skills.style.display = "flex";
        skills_btn.classList.add("active-btn");
        portfolio_btn.classList.remove("active-btn");
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var theme_btn = document.getElementById("toggleTheme");
    var themeIcon = document.querySelector('img[alt="theme icon"]');
    var githubLogo = document.querySelector('img[alt="github logo"]');
    var linkedinLogo = document.querySelector('img[alt="linkedin logo"]');
    var emailLogo = document.querySelector('img[alt="email logo"]');
    var lightLogos = {
        github: "assets/github_light.png",
        linkedin: "assets/linkedin_light.png",
        email: "assets/email_light.png",
        theme: "assets/theme_light.png",
    };
    var darkLogos = {
        github: "assets/github_dark.png",
        linkedin: "assets/linkedin_dark.png",
        email: "assets/email_dark.png",
        theme: "assets/theme_dark.png",
    };
    function setTheme(isDark) {
        if (githubLogo && linkedinLogo && emailLogo && themeIcon) {
            githubLogo.src = isDark ? darkLogos.github : lightLogos.github;
            linkedinLogo.src = isDark ? darkLogos.linkedin : lightLogos.linkedin;
            emailLogo.src = isDark ? darkLogos.email : lightLogos.email;
            themeIcon.src = isDark ? darkLogos.theme : lightLogos.theme;
        }
    }
    if (theme_btn) {
        theme_btn.addEventListener("click", function () {
            var isDark = document.body.classList.toggle("dark-theme");
            document.body.classList.toggle("dark-theme", isDark);
            localStorage.setItem("isDark", isDark.toString());
            setTheme(isDark);
        });
    }
    var loadTheme = function () {
        var isDark = localStorage.getItem("isDark") === "true";
        document.body.classList.toggle("dark-theme", isDark);
        setTheme(isDark);
    };
    loadTheme();
});
