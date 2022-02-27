// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
	// return the badge that matches the license
	if (license === 'MIT') {
		return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
	}
	else if (license === 'Apache-2.0') {
		return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
	}
	else if (license === 'Boost') {
		return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
	}
};
// badges from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// function that returns the license link
function renderLicenseLink(license) {

};

// function that returns the license section of README
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
