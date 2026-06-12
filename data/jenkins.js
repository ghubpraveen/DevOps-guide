const jenkins = {


title: "Jenkins & CI/CD",

icon: "🚀",

questions: [

    {
        question: "What is Jenkins?",

        answer: `


• Open-source automation server

• Used for CI/CD automation

• Supports build, test and deployment workflows

• Extensible through plugins

• Widely used in DevOps environments
`
},


    {
        question: "What is Continuous Integration?",

        answer: `


• Frequent code integration into shared repositories

• Automated builds validate changes

• Early detection of defects

• Faster feedback for developers

• Improves code quality
`
},


    {
        question: "What is Continuous Delivery?",

        answer: `


• Application is always deployment-ready

• Deployment process is automated

• Production deployment usually requires approval

• Reduces release risk

• Improves release consistency
`
},


    {
        question: "What is Continuous Deployment?",

        answer: `


• Every successful build automatically reaches production

• No manual approval step

• Requires strong testing automation

• Enables rapid delivery

• Higher automation maturity required
`
},


    {
        question: "Explain your CI/CD pipeline architecture.",

        answer: `


• Build → Promote → Deploy model

• Artifact built only once

• Same artifact promoted across environments

• Improves consistency and traceability

• Simplifies rollback process

• Eliminates environment-specific builds
`
},


    {
        question: "Why should an artifact be built only once?",

        answer: `


• Ensures consistency across environments

• Eliminates build differences

• Simplifies auditing

• Reduces deployment risk

• Supports reliable rollbacks
`
},


    {
        question: "What are Jenkins Pipelines?",

        answer: `


• Pipeline as Code

• Stored in source control

• Supports CI/CD workflows

• Easier maintenance

• Improves reproducibility
`
},


    {
        question: "Difference between Freestyle and Pipeline Jobs?",

        answer: `


• Freestyle uses UI configuration

• Pipeline uses code

• Pipeline supports version control

• Pipeline supports complex workflows

• Pipeline preferred for modern DevOps
`
},


    {
        question: "What is Declarative Pipeline?",

        answer: `


• Structured syntax

• Easier to read

• Easier maintenance

• Uses predefined blocks

• Recommended for standard workflows
`
},


    {
        question: "What is Scripted Pipeline?",

        answer: `


• Uses Groovy scripting

• Greater flexibility

• Suitable for advanced logic

• More complex to maintain

• Useful for highly customized workflows
`
},


    {
        question: "What are Jenkins Shared Libraries?",

        answer: `


• Reusable pipeline code

• Centralized automation logic

• Reduces duplication

• Improves governance

• Simplifies maintenance

• Supports standardization
`
},


    {
        question: "What is the structure of a Shared Library?",

        answer: `


• vars/ contains reusable functions

• src/ contains Groovy classes

• resources/ contains configuration files

• Supports modular design

• Loaded using @Library
`
},


    {
        question: "Why use Shared Libraries?",

        answer: `


• Reduce duplicate code

• Improve maintainability

• Enforce standards

• Accelerate pipeline development

• Centralize common logic
`
},


    {
        question: "How do you version Shared Libraries?",

        answer: `


• Store library in Git

• Use branches or tags

• Reference specific versions

• Test before release

• Maintain backward compatibility
`
},


    {
        question: "How do you secure Jenkins?",

        answer: `


• Enable authentication

• Implement RBAC

• Integrate LDAP or SSO

• Restrict administrative access

• Secure agents

• Enable auditing

• Regularly update plugins
`
},


    {
        question: "How do you manage credentials in Jenkins?",

        answer: `


• Use Jenkins Credentials Store

• Never hardcode secrets

• Use credential bindings

• Integrate Vault where possible

• Restrict credential scope

• Rotate secrets periodically
`
},


    {
        question: "How do you implement approvals in Jenkins?",

        answer: `


• Use input step

• Require manual approval

• Commonly used before production deployments

• Provides governance

• Reduces deployment risk
`
},


    {
        question: "What are Jenkins Agents?",

        answer: `


• Execute pipeline workloads

• Offload work from controller

• Improve scalability

• Support distributed builds

• Can be static or dynamic
`
},


    {
        question: "Static vs Dynamic Agents?",

        answer: `


• Static agents are always available

• Dynamic agents are created on demand

• Dynamic agents improve scalability

• Reduce infrastructure costs

• Commonly used with Kubernetes
`
},


    {
        question: "How do Kubernetes-based Jenkins Agents work?",

        answer: `


• Jenkins launches ephemeral pods

• Each build runs in isolated environment

• Pods destroyed after execution

• Improves scalability

• Reduces maintenance effort
`
},


    {
        question: "How do you integrate Jenkins with Kubernetes?",

        answer: `


• Use Kubernetes plugin

• Launch build agents as pods

• Deploy using kubectl or Helm

• Manage configurations through Git

• Automate deployments
`
},


    {
        question: "How do you deploy applications to Kubernetes using Jenkins?",

        answer: `


• Build Docker image

• Push image to registry

• Update deployment manifests

• Deploy using Helm or kubectl

• Validate deployment health
`
},


    {
        question: "How do you integrate Terraform with Jenkins?",

        answer: `


• Execute terraform fmt

• Run terraform validate

• Generate terraform plan

• Require approval before apply

• Execute terraform apply

• Store state remotely
`
},


    {
        question: "How do you manage Terraform state?",

        answer: `


• Store state remotely

• Use locking mechanisms

• Restrict direct modifications

• Backup state regularly

• Separate state by environment
`
},


    {
        question: "How do you handle rollback in Jenkins?",

        answer: `


• Maintain artifact history

• Track deployment versions

• Redeploy last known good version

• Use Helm rollback for Kubernetes

• Automate recovery processes
`
},


    {
        question: "How do you implement Blue-Green Deployments?",

        answer: `


• Maintain two environments

• Deploy to inactive environment

• Validate deployment

• Switch traffic after verification

• Enables near-zero downtime
`
},


    {
        question: "How do you implement Canary Deployments?",

        answer: `


• Deploy to small user subset

• Monitor application health

• Gradually increase traffic

• Minimize deployment risk

• Roll back quickly if issues occur
`
},


    {
        question: "How do you troubleshoot a failed Jenkins build?",

        answer: `


• Review console logs

• Identify failing stage

• Validate credentials

• Verify agent availability

• Check network connectivity

• Confirm dependency availability

• Reproduce issue if necessary
`
},


    {
        question: "How do you optimize Jenkins pipeline performance?",

        answer: `


• Use parallel stages

• Cache dependencies

• Use ephemeral agents

• Minimize unnecessary steps

• Optimize Docker builds

• Archive only required artifacts
`
},


    {
        question: "How do you scale Jenkins?",

        answer: `


• Use distributed agents

• Use Kubernetes-based agents

• Reduce controller workload

• Optimize plugins

• Archive old build data

• Monitor controller performance
`
}


]


};

export default jenkins;

