// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'GNU GPLv3':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
        case 'ISC':
            return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
        case 'Apache License 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
        default:
            return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'GNU GPLv3':
            return '(https://www.gnu.org/licenses/gpl-3.0)';
        case 'MIT':
            return '(https://opensource.org/licenses/MIT)';
        case 'ISC':
            return '(https://opensource.org/licenses/ISC)';
        case 'Apache License 2.0':
            return '(https://opensource.org/licenses/Apache-2.0)';
        default:
            return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }
    const licenseSection = renderLicenseBadge(license) + renderLicenseLink(license);
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title}`;
}

module.exports = generateMarkdown;