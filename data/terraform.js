const terraform = {


title: "Terraform",

icon: "🏗️",

questions: [

    {
        question: "What is Terraform?",

        answer: `


• Infrastructure as Code (IaC) tool

• Developed by HashiCorp

• Uses declarative configuration

• Supports multiple cloud providers

• Enables repeatable infrastructure provisioning
`
},


    {
        question: "What problem does Terraform solve?",

        answer: `


• Eliminates manual provisioning

• Reduces configuration drift

• Enables version control

• Improves consistency

• Automates infrastructure lifecycle
`
},


    {
        question: "What are the main Terraform components?",

        answer: `


• Providers

• Resources

• Variables

• Outputs

• Modules

• State File
`
},


    {
        question: "What is a Provider?",

        answer: `


• Plugin that interacts with APIs

• AWS Provider

• GCP Provider

• Kubernetes Provider

• Enables resource creation and management
`
},


    {
        question: "What is a Resource?",

        answer: `


• Infrastructure component managed by Terraform

• VPC

• EC2 Instance

• EKS Cluster

• IAM Role
`
},


    {
        question: "What is Terraform State?",

        answer: `


• Tracks infrastructure

• Maps resources to real-world objects

• Used during plan and apply

• Stored locally or remotely

• Critical for Terraform operations
`
},


    {
        question: "Why is Terraform State important?",

        answer: `


• Tracks deployed resources

• Prevents duplicate creation

• Supports updates

• Supports deletion

• Enables drift detection
`
},


    {
        question: "What is a Remote Backend?",

        answer: `


• Stores state remotely

• Enables team collaboration

• Improves security

• Supports locking

• Prevents state corruption
`
},


    {
        question: "How do you manage Terraform State in production?",

        answer: `


• Store remotely

• Enable locking

• Restrict access

• Backup state files

• Separate environments
`
},


    {
        question: "How do you implement Terraform state locking?",

        answer: `


• AWS: S3 + DynamoDB

• Prevents concurrent changes

• Avoids state corruption

• Required for team environments
`
},


    {
        question: "What is Terraform Drift?",

        answer: `


• Infrastructure changed outside Terraform

• State no longer matches reality

• Causes inconsistencies

• Detected through terraform plan
`
},


    {
        question: "How do you detect drift?",

        answer: `


• Run terraform plan

• Compare actual infrastructure

• Review unexpected changes

• Investigate manual modifications
`
},


    {
        question: "What is a Terraform Module?",

        answer: `


• Reusable Terraform code

• Promotes standardization

• Reduces duplication

• Simplifies maintenance

• Supports scalability
`
},


    {
        question: "Why use Modules?",

        answer: `


• Reusability

• Maintainability

• Consistency

• Faster provisioning

• Better governance
`
},


    {
        question: "How do you structure Terraform modules?",

        answer: `


• Separate networking

• Separate compute

• Separate IAM

• Separate Kubernetes

• Define clear inputs and outputs
`
},


    {
        question: "What are Variables in Terraform?",

        answer: `


• Parameterize configurations

• Improve reusability

• Environment customization

• Reduce hardcoding
`
},


    {
        question: "What are Outputs?",

        answer: `


• Expose resource values

• Share information between modules

• Display useful deployment information

• Support integrations
`
},


    {
        question: "What is terraform init?",

        answer: `


• Initializes Terraform project

• Downloads providers

• Configures backend

• Prepares working directory
`
},


    {
        question: "What is terraform plan?",

        answer: `


• Shows proposed changes

• Does not modify infrastructure

• Supports validation

• Used for approvals
`
},


    {
        question: "What is terraform apply?",

        answer: `


• Executes changes

• Creates resources

• Updates resources

• Deletes resources if required
`
},


    {
        question: "What is terraform destroy?",

        answer: `


• Removes managed resources

• Used carefully

• Common in temporary environments

• Supports cleanup automation
`
},


    {
        question: "How do you use Terraform in Jenkins?",

        answer: `


• terraform fmt

• terraform validate

• terraform plan

• Manual approval

• terraform apply

• Store plan artifacts
`
},


    {
        question: "How do you implement approval before apply?",

        answer: `


• Generate plan

• Review proposed changes

• Manual approval stage

• Apply only after validation

• Reduces risk
`
},


    {
        question: "How do you separate environments?",

        answer: `


• Separate state files

• Separate variable files

• Separate workspaces if required

• Environment-specific pipelines
`
},


    {
        question: "What are Terraform Workspaces?",

        answer: `


• Manage multiple environments

• Share same code base

• Separate state management

• Useful for simple setups
`
},


    {
        question: "Modules vs Workspaces?",

        answer: `


• Modules provide code reuse

• Workspaces provide environment separation

• Solve different problems

• Often used together
`
},


    {
        question: "How do you provision EKS using Terraform?",

        answer: `


• Create VPC

• Create IAM roles

• Create EKS cluster

• Create node groups

• Configure networking

• Configure Kubernetes access
`
},


    {
        question: "How do you provision GKE using Terraform?",

        answer: `


• Create VPC

• Create subnet

• Create GKE cluster

• Configure node pools

• Configure IAM

• Configure networking
`
},


    {
        question: "How do you manage secrets with Terraform?",

        answer: `


• Avoid hardcoded secrets

• Use Secrets Manager

• Use Vault

• Restrict state access

• Encrypt backend storage
`
},


    {
        question: "Why is storing secrets in state dangerous?",

        answer: `


• State may contain sensitive values

• Risk of exposure

• State often shared across teams

• Requires strict access control
`
},


    {
        question: "How do you secure Terraform?",

        answer: `


• Remote state encryption

• State locking

• RBAC

• Least privilege IAM

• Code reviews

• Secret management
`
},


    {
        question: "What are common Terraform interview mistakes?",

        answer: `


• Storing secrets in code

• Using local state in production

• No state locking

• Poor module design

• Manual infrastructure changes
`
},


    {
        question: "How do you troubleshoot Terraform failures?",

        answer: `


• Review error output

• Check provider authentication

• Validate syntax

• Review state

• Verify permissions

• Check cloud quotas
`
},


    {
        question: "How do you handle Terraform code reviews?",

        answer: `


• Review terraform plan output

• Validate resource changes

• Verify IAM permissions

• Check naming standards

• Ensure module reuse
`
},


    {
        question: "How do you scale Terraform in large organizations?",

        answer: `


• Modular architecture

• Shared module repository

• CI/CD enforcement

• Remote state management

• Approval workflows

• Environment isolation
`
}


]


};

export default terraform;

