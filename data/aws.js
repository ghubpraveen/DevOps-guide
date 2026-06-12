const aws = {

    title: "AWS",

    icon: "☁️",

    questions: [

        {
            question: "What AWS services have you worked with?",

            answer: `
• EKS

• EC2

• VPC

• IAM

• S3

• Route53

• ALB

• Auto Scaling

• CloudWatch

• Secrets Manager

• RDS
`
        },

        {
            question: "What is AWS?",

            answer: `
• Public cloud platform

• Provides Infrastructure as a Service

• Provides Platform as a Service

• Global cloud provider

• Supports scalable application deployment
`
        },

        {
            question: "What is a Region?",

            answer: `
• Geographic AWS location

• Contains multiple Availability Zones

• Provides isolation

• Supports disaster recovery

• Enables global deployments
`
        },

        {
            question: "What is an Availability Zone?",

            answer: `
• Physically separate datacenter

• High-speed connectivity

• Supports high availability

• Reduces single points of failure
`
        },

        {
            question: "What is a VPC?",

            answer: `
• Virtual Private Cloud

• Logical network in AWS

• Provides isolation

• Supports subnetting

• Enables security controls
`
        },

        {
            question: "What is the difference between Public and Private Subnets?",

            answer: `
• Public subnet has internet access

• Private subnet does not

• Public uses Internet Gateway

• Private commonly uses NAT Gateway

• Improves security
`
        },

        {
            question: "What is an Internet Gateway?",

            answer: `
• Provides internet access

• Attached to VPC

• Required for public subnets

• Enables inbound and outbound connectivity
`
        },

        {
            question: "What is a NAT Gateway?",

            answer: `
• Enables outbound internet access

• Used by private subnets

• Blocks inbound internet traffic

• Common for application workloads
`
        },

        {
            question: "What are Security Groups?",

            answer: `
• Virtual firewall

• Stateful

• Controls inbound traffic

• Controls outbound traffic

• Applied at resource level
`
        },

        {
            question: "What are Network ACLs?",

            answer: `
• Subnet-level firewall

• Stateless

• Controls network traffic

• Additional security layer

• Evaluated in order
`
        },

        {
            question: "Security Groups vs NACLs?",

            answer: `
• Security Groups are stateful

• NACLs are stateless

• Security Groups operate on resources

• NACLs operate on subnets

• Security Groups are more commonly used
`
        },

        {
            question: "What is IAM?",

            answer: `
• Identity and Access Management

• Controls permissions

• Supports users, groups and roles

• Implements least privilege

• Central security service
`
        },

        {
            question: "What is an IAM Role?",

            answer: `
• Temporary permissions

• No long-term credentials

• Common for EC2 and EKS

• Improves security

• Supports cross-service access
`
        },

        {
            question: "Why use IAM Roles instead of Access Keys?",

            answer: `
• More secure

• Temporary credentials

• Automatic rotation

• Reduced secret management

• Recommended AWS practice
`
        },

        {
            question: "What is S3?",

            answer: `
• Object storage service

• Highly durable

• Highly scalable

• Common for backups

• Common for Terraform state
`
        },

        {
            question: "How have you used S3?",

            answer: `
• Terraform remote backend

• Artifact storage

• Backup storage

• Log archival

• Static website hosting
`
        },

        {
            question: "What is Versioning in S3?",

            answer: `
• Preserves object history

• Supports recovery

• Protects against accidental deletion

• Useful for critical data
`
        },

        {
            question: "What is an EC2 Instance?",

            answer: `
• Virtual machine

• Compute resource

• Supports Linux and Windows

• Flexible sizing options

• Common cloud workload
`
        },

        {
            question: "How do you secure EC2 instances?",

            answer: `
• IAM Roles

• Security Groups

• Patch management

• Private subnets

• Monitoring and logging
`
        },

        {
            question: "What is an Auto Scaling Group?",

            answer: `
• Automatically scales EC2 instances

• Improves availability

• Supports fault tolerance

• Optimizes costs

• Handles traffic growth
`
        },

        {
            question: "What is a Load Balancer?",

            answer: `
• Distributes traffic

• Improves availability

• Supports scalability

• Removes single points of failure

• Provides health checks
`
        },

        {
            question: "What is an Application Load Balancer?",

            answer: `
• Layer 7 load balancer

• HTTP and HTTPS support

• Host-based routing

• Path-based routing

• Common for Kubernetes ingress
`
        },

        {
            question: "What is Route53?",

            answer: `
• DNS service

• Domain management

• Health checks

• Traffic routing

• High availability DNS
`
        },

        {
            question: "What is CloudWatch?",

            answer: `
• Monitoring service

• Metrics collection

• Log collection

• Alerting

• Operational visibility
`
        },

        {
            question: "How do you use CloudWatch?",

            answer: `
• Infrastructure monitoring

• Log analysis

• Alert generation

• Dashboard creation

• Incident detection
`
        },

        {
            question: "What is RDS?",

            answer: `
• Managed database service

• Supports multiple engines

• Automated backups

• High availability support

• Reduced operational overhead
`
        },

        {
            question: "What is Multi-AZ RDS?",

            answer: `
• High availability deployment

• Automatic failover

• Reduces downtime

• Improves reliability

• Recommended for production
`
        },

        {
            question: "What is EKS?",

            answer: `
• Managed Kubernetes service

• AWS-managed control plane

• Supports Kubernetes workloads

• Integrates with AWS services

• Simplifies operations
`
        },

        {
            question: "How have you used EKS?",

            answer: `
• Kubernetes workload hosting

• CI/CD deployments

• Auto-scaling

• Monitoring integration

• Production application hosting
`
        },

        {
            question: "How do worker nodes join EKS?",

            answer: `
• Bootstrap process

• IAM authentication

• Cluster endpoint communication

• Node registration

• Managed through node groups
`
        },

        {
            question: "What is IRSA in EKS?",

            answer: `
• IAM Roles for Service Accounts

• Fine-grained permissions

• Avoids static credentials

• Improves security

• Recommended AWS approach
`
        },

        {
            question: "What is Secrets Manager?",

            answer: `
• Secure secret storage

• Credential management

• Automatic rotation support

• Centralized security

• Application integration
`
        },

        {
            question: "How do you manage secrets in AWS?",

            answer: `
• Secrets Manager

• IAM controls

• Encryption

• Rotation policies

• Avoid hardcoding credentials
`
        },

        {
            question: "How do you implement disaster recovery in AWS?",

            answer: `
• Multi-AZ deployment

• Backups

• Cross-region replication

• Infrastructure as Code

• Recovery testing
`
        },

        {
            question: "How do you secure AWS environments?",

            answer: `
• Least privilege IAM

• Network segmentation

• Encryption

• Security Groups

• Monitoring and auditing

• Secret management
`
        },

        {
            question: "How do Terraform and AWS work together?",

            answer: `
• Infrastructure provisioning

• Version-controlled infrastructure

• Automated deployments

• Consistent environments

• Reduced configuration drift
`
        },

        {
            question: "How do Jenkins and AWS work together?",

            answer: `
• CI/CD automation

• EKS deployments

• Terraform execution

• Infrastructure provisioning

• Application delivery
`
        },

        {
            question: "Describe an AWS architecture you have worked on.",

            answer: `
• Jenkins for CI/CD

• Terraform for provisioning

• EKS for container orchestration

• ALB for traffic routing

• Route53 for DNS

• CloudWatch for monitoring

• IAM for security
`
        },

        {
            question: "What AWS topics should a Senior DevOps Engineer know well?",

            answer: `
• IAM

• VPC

• EKS

• EC2

• Load Balancers

• Route53

• CloudWatch

• Security

• Terraform integration

• Cost optimization
`
        }

    ]

};

export default aws;
