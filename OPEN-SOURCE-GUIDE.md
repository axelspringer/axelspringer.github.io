Axel Springer's Open Source Guide
==================

This README supports developers and creative minds who intend to openly share their work by providing guidelines for publishing open source software at Axel Springer SE.

## Table of Content


1 [Should I open source my Project?](#should-i-open-source-my-project)

1.1	[What’s so great about open source?](#whats-so-great-about-open-source)

1.2	[What to open source?](#what-to-open-source)

1.3 [What to inner source?](#what-to-inner-source)

1.4 [What NOT to open source?](#what-not-to-open-source)

2	[How to open source a project](#how-to-open-source-a-project)

2.1	[Prepare your project](#prepare-your-project)

2.2	[Choose a licence](#choose-a-licence)


2.3	[Publish your project at github.com/axelspringer](#publish-your-project-at-githubcomaxelspringer)

2.4 [Promote your project](#promote-your-project)

3 [How can I contribute to an existing project?](#how-can-i-contribute-to-an-existing-project)


## Should I open source my project?

### What’s so great about open source?
tbd

### What to open source?
We’d like to encourage you to share projects that...
- … are innovative and useful inside as well as outside the context of Axel Springer
- … are tested and stable enough to be considered a finished product (very early stage projects should be explicitly marked as such)
- … are under active development and will be maintained in the future (before releasing a project always make sure that there are team members who feel responsible for the maintenance of the project and function as contact persons)
- … include a licence (for details see [“Licencing”](#licencing))

### What to inner source?
In contrary to open source projects, inner source software is exclusively shared within the company. We are currently working on a guide that is meant to support you as a developer at Axel Springer to share your code with all of your colleagues. Once it is ready, we’ll provide a separate README and a link right here.

### What NOT to open source?

You shouldn’t open source your project if...
- ... it doesn’t work / isn’t useful outside the Axel Springer environment, e.g. because it’s dependent upon Axel Springer-specific systems
- ... neither you nor any other developer intends to maintain the project and serve as a contact person in the long run
- ... it contains confidential source code or customer data
- ... you risk giving away specific knowledge that provides a competitive advantage or Unique Selling Point (USP) for Axel Springer

## How to open source a project

### Prepare your project

#### Provide a clear and comprehensive README

A good README is key to any open source project. If no README exists, any potential contributor or user is forced to deep-dive into your code to understand what the project is about, which is an absolute showstopper.  
Great templates can be found at:  [Zalando README template](https://github.com/zalando/zalando-howto-open-source/blob/master/READMEtemplate.md)) or take a look at [this README checklist](https://github.com/cfpb/open-source-project-template)

#### Review your code

- Code style and quality?
  - Include automated code analysis, comment your code properly, etc.
- Bugs?
  - Don’t forget to mention any critical bugs in your project’s README
- Critical information?
  - Remember to not publish critical information like customer data, confidential source code or projects that are USPs for Axel Springer

#### Define maintainers

Maintainers are responsible for the project and they should be the only ones allowed to merge Requests. Most importantly, they are the ones that will be contacted if there are any questions or contribution requests regarding the product, so they should be prompt and responsive and reply to any messages at least within 3 days.

#### Missing Features?

If you are thinking of some new features but don’t have time to code them yourself, just write a description of what you are thinking of and publish it, some other developers might be interested in collaborating and implementing the features.


### Choose a Licence

Up to this point, there is no clear advice for the use of a specific licence that works best for all of Axel Springer’s Open Source projects. However, there will be an Open Source Developer Day in 2018 targeting the issue of Open Source Software Licencing. The results of this event will be summarized in another README to support you to choose the best licence for your project. The link will be added right here as well.

### Publish your project at [github.com/axelspringer](https://github.com/axelspringer)

If you want to add your project to Axel Springer’s GitHub page, contact one of the group admins and ask them for permission to create a new repository for your work.
If you aren’t a member of any of the groups yet, feel free to ask [Andreas Prang]( https://github.com/AndreasPrang) to add you to the Axel Springer GitHub group.

### Promote your project

Once you’ve published your project on GitHub, you should tell the world about what you’ve created and how others can benefit from your work or contribute to the project by adding new features. First of all, you can promote your project on **Axel Springer’s landing page [axelspringer.github.io]( https://axelspringer.github.io)**. Just go to the [“axelspringer.github.io”-Project]( https://github.com/axelspringer/axelspringer.github.io) on GitHub and follow the few and easy steps described in its README to add your project to the website. Additionally, you can present your project during one of Axel Springer’s **TechBreakfast** sessions. The team is always happy to provide a time slot for you to share your ideas. If you are interested, contact [Andreas Prang]( https://github.com/AndreasPrang). Open source is all about sharing, so feel free to promote your project outside of Axel Springer as well.

## How can I contribute to an existing project?

**GitHub flow:**

1. Check open issues of the project, if your idea is different to the reported issues, create a new one. Before contributing to a project, you should contact the maintainers to make sure that your idea is not out of scope and nobody else is currently working on a similar issue. This will help you to avoid unnecessary work.
2. Fork the repository.
3. Create a topic branch as work base.
4. Push code to the forked repository.
5. Create a pull request to the original repository.
6. Wait until your request is approved.

Not an Axel Springer employee? Please feel free to contribute, we are happy to support collaboration beyond the borders of Axel Springer!
