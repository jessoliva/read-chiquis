// function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
	// return the badge that matches the license
	if (license === 'MIT') {
		return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
	}
	else if (license === 'Apache-2.0') {
		return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
	}
	else if (license === 'BSD 3-Clause License') {
		return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
	}
};
// badges from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// function that returns the license link
function renderLicenseLink(license) {
	// return the badge that matches the license
	if (license === 'MIT') {
		return '(https://opensource.org/licenses/MIT)';
	}
	else if (license === 'Apache-2.0') {
		return '(https://opensource.org/licenses/Apache-2.0)';
	}
	else if (license === 'BSD 3-Clause License') {
		return '(https://opensource.org/licenses/BSD-3-Clause)';
	}
};

// function that returns the license section of README
function renderLicenseSection(license, owner) {

	if (license === 'MIT') {
return `	Copyright ${new Date().getFullYear()} ${owner}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	`;
	}
	else if (license === 'Apache-2.0') {
return `	Copyright ${new Date().getFullYear()} ${owner}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
	}
	else if (license === 'BSD 3-Clause License') {
return `	Copyright ${new Date().getFullYear()} ${owner}

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	`;
	}
}


// function to generate markdown for README
function generateMarkdown(data) {

	return `# ${data.title}
	
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

## Table of Contents
- [📝&nbsp; Project Description](#project-description)
- [🛠️&nbsp; Installation](#installation)
- [👩🏽‍💻&nbsp; Usage](#usage)
- [✏️&nbsp; Contribution Guidelines](#contribution-guidelines)
- [🧪&nbsp; Tests](#tests)
- [👨‍👩‍👧‍👦&nbsp; Credits](#credits)
- [📱&nbsp; Contact](#contact)
- [📰&nbsp; License](#license)

## 📝&nbsp; Project Description
${data.description}

## 🛠️&nbsp; Installation
${data.installation}

## 👩🏽‍💻&nbsp; Usage
${data.usage}

## ✏️&nbsp; Contribution Guidelines
${data.contribution}

## 🧪&nbsp; Tests
${data.tests}

## 👨‍👩‍👧‍👦&nbsp; Credits
${data.credits}

## 📱&nbsp; Contact
If you have any questions related to this project, or you just want to interact, you can reach me via GitHub or E-mail!

>**Github: [${data.github}](https://github.com/${data.github})**

>**E-mail: [${data.email}](mailto:${data.email})**

## 📰&nbsp; License
${renderLicenseSection(data.license, data.name)}
`;
}

// export function to use in index.js
module.exports = generateMarkdown;
