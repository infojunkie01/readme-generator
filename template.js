// Structured for readme file 
const generateReadme = projectData => {
    if (!projectData) {
      return '';
    }
    return `
  # ${projectData.title}

  ## Description<a name="description"></a>
  ${projectData.description}

  ## Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation<a name="installation"></a>
  * ${projectData.installation}

  ## Usage<a name="usage"></a>
  * ${projectData.usage}

  ## license:<a name="license"></a>
  * This application is covered by the ${projectData.license} license. 

  ## Contributing<a name="contributing"></a>
  * ${projectData.contributing}
  
  ## Tests<a name="tests"></a>
  * ${projectData.tests}

  ## Questions<a name="questions"></a>
  * For any questions please reach out to <a href="https://github.com/${projectData.github}">${projectData.github}</a> at <a href="mailto:${projectData.email}">${projectData.email}</a>

    `;
  };
  
