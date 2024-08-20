const portfolio = document.getElementById("portfolio") as HTMLElement;
const portfolio_btn = document.getElementById("portfolio-btn") as HTMLElement;

const skills = document.getElementById("skills") as HTMLElement;
const skills_btn = document.getElementById("skills-btn") as HTMLElement;

if(portfolio && portfolio_btn && skills && skills_btn){
	portfolio_btn.addEventListener("click", () => {
		skills.style.display = "none";
		portfolio.style.display = "flex";
		skills_btn.classList.remove("active-btn");
		portfolio_btn.classList.add("active-btn");
	});

	skills_btn.addEventListener("click", () => {
		portfolio.style.display = "none";
		skills.style.display = "flex";
		skills_btn.classList.add("active-btn");
		portfolio_btn.classList.remove("active-btn");
	});
}

document.addEventListener("DOMContentLoaded", () => {
	const theme_btn = document.getElementById("toggleTheme") as HTMLElement;

	const themeIcon = document.querySelector('img[alt="theme icon"]') as HTMLImageElement;

	const githubLogo = document.querySelector('img[alt="github logo"]') as HTMLImageElement;
	const linkedinLogo = document.querySelector('img[alt="linkedin logo"]') as HTMLImageElement;
	const emailLogo = document.querySelector('img[alt="email logo"]') as HTMLImageElement;

	const lightLogos = {
		github: "assets/github_light.png",
		linkedin: "assets/linkedin_light.png",
		email: "assets/email_light.png",
		theme: "assets/theme_light.png",
	}

	const darkLogos = {
		github: "assets/github_dark.png",
		linkedin: "assets/linkedin_dark.png",
		email: "assets/email_dark.png",
		theme: "assets/theme_dark.png",
	}

	function setTheme(isDark: boolean){
		if(githubLogo && linkedinLogo && emailLogo && themeIcon){
			githubLogo.src = isDark? darkLogos.github : lightLogos.github;
			linkedinLogo.src = isDark? darkLogos.linkedin : lightLogos.linkedin;
			emailLogo.src = isDark? darkLogos.email : lightLogos.email;
			themeIcon.src = isDark? darkLogos.theme : lightLogos.theme;
		}
	}

	if(theme_btn){
		theme_btn.addEventListener("click", () => {
			const isDark = document.body.classList.toggle("dark-theme");
			
			document.body.classList.toggle("dark-theme", isDark);
			localStorage.setItem("isDark", isDark.toString());

			setTheme(isDark);

		})
	}

	const loadTheme = () => {
		const isDark = localStorage.getItem("isDark") === "true";
		document.body.classList.toggle("dark-theme", isDark);

		setTheme(isDark);
	}


	loadTheme();
});
