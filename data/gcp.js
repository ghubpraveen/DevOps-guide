const gcp = {

    title: "Google Cloud Platform",

    icon: "☁️",

    questions: [

        {
            question: "What GCP services have you worked with?",

            answer: `
• GKE

• Compute Engine

• Cloud Storage

• VPC

• Cloud DNS

• IAM

• Artifact Registry

• Cloud Monitoring

• Cloud Logging
`
        },

        {
            question: "What is GKE?",

            answer: `
• Google Kubernetes Engine

• Managed Kubernetes service

• Google manages control plane

• Supports autoscaling

• Integrates with GCP services
`
        },

        {
            question: "Why use GKE instead of self-managed Kubernetes?",

            answer: `
• Reduced operational overhead

• Managed upgrades

• Managed control plane

• Built-in monitoring

• Better reliability
`
        },

        {
            question: "How have you used GKE?",

            answer: `
• Application deployments

• Jenkins deployments

• CI/CD integration

• Autoscaling workloads

• Production Kubernetes hosting
`
        },

        {
            question: "What is Artifact Registry?",

            answer: `
• Stores Docker images

• Stores application artifacts

• Integrates with GKE

• Supports secure image distribution
`
        },

        {
            question: "What is a VPC in GCP?",

            answer: `
• Virtual private network

• Isolates workloads

• Controls connectivity

• Supports subnet design

• Foundation of cloud networking
`
        },

        {
            question: "What is Cloud Storage?",

            answer: `
• Object storage service

• Highly durable

• Backup storage

• Artifact storage

• Log archival
`
        },

        {
            question: "How do you secure GCP environments?",

            answer: `
• IAM

• Service Accounts

• Network controls

• Secret management

• Logging and monitoring
`
        },

        {
            question: "What is a Service Account?",

            answer: `
• Identity for applications

• Used instead of user credentials

• Supports least privilege

• Common in automation workflows
`
        },

        {
            question: "How do Jenkins and GCP work together?",

            answer: `
• Build applications

• Push images to Artifact Registry

• Deploy to GKE

• Automate releases

• Support infrastructure provisioning
`
        }

    ]

};

export default gcp;
