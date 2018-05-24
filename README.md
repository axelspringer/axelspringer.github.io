# Landing Page - axelspringer.github.io

[![Build Status](https://travis-ci.org/axelspringer/axelspringer.github.io.svg?branch=develop)](https://travis-ci.org/axelspringer/axelspringer.github.io)

## What this project is all about

[axelspringer.github.io](https://axelspringer.github.io) is the landing page for the open source initiative of Axel Springer SE and provides an overview of Axel Springer’s open source projects as well as current job offers. If you are employed at Axel Springer or one of its subsidiary companies and have created an awesome open source project you’d like to promote and share with your colleagues as well as with people outside the boundaries of Axel Springer, you’re welcome to publish your project on [axelspringer.github.io](https://axelspringer.github.io). For more details on how to add your project to the website or contribute new features, please read the [How to contribute](#how-to-contribute) section.

For general guidelines and information on how to publish open source projects or contribute to existing repositories at Axel Springer, please read the [Open Source Guide](https://github.com/axelspringer/axelspringer.github.io/blob/develop/OPEN-SOURCE-GUIDE.md#publish-your-project-at-githubcomaxelspringer).

## How to contribute

### Local Development

* `npm install`
* `npm run start` will start a local dev server at http://localhost:8080

Send PULL-Requests if you want to contribute your ideas and alterations to the project. Please remember to stick to the common code conventions and make sure that your commit messages are self-explanatory.

**Important**: All changes should be made on the **develop** branch! They will then be integrated into the master branch automatically.

### Present your project on axelspringer.github.io

If you want to present your open source project on the landing page, go to **/src/data/projects.js**, copy one of the existing projects within the file and simply alter the project-specific information. Title and project ID should be identical to the name of your GitHub project.
To make your company's logo appear in the upper right corner of the project tile, upload your company's logo into the **"/src/static/"** folder. Name the image as followed: **"logo_[insertCompanyNameHere].png"** The company name following the underscore must be identical to the **"ownerLogo" variable's value** of your project in the **/src/data/projects.js** file.

### Testing

There are Snaphot Tests available, run those tests using `npm run tests`.
Please remember to alter these tests if you’ve modified the structure of the page.

## License
This project does not yet include a licence.

## Contributors
Many thanks to [Tom Bautz]( https://github.com/tbtz)

## References
[Zalando’s README Template](https://github.com/cfpb/open-source-project-template)

[Another great README Checklist](https://github.com/cfpb/open-source-project-template)
