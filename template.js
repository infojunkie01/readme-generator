// Structure for readme file 
const generateReadme = projectData => {

    // Gets/sets info for badges based on input
    if (projectData.license == "Apache"){
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }else if (projectData.license == "GNU GPL"){
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }else if (projectData.license == "MIT"){
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }else{
        badge = ""
    }
    
    // Plugs in inputted data into readme
    if (!projectData) {
      return '';
    }
    return `
  # ${projectData.title}
  ${badge}

  ### Description<a name="description"></a>
  ${projectData.description}

  ### Table of contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ### Installation<a name="installation"></a>
  * ${projectData.installation}

  ### Usage<a name="usage"></a>
  * ${projectData.usage}

  ### License<a name="license"></a>
  * This application is covered by the ${projectData.license} license. 

  ### Contributing<a name="contributing"></a>
  * ${projectData.contributing}
  
  ### Tests<a name="tests"></a>
  * ${projectData.tests}

  ### Questions<a name="questions"></a>
  * For any questions please reach out to <a href="https://github.com/${projectData.github}">${projectData.github}</a> at <a href="mailto:${projectData.email}">${projectData.email}</a>

    `;
  };
  
module.exports = generateReadme;
