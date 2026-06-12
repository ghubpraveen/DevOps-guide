const scenarioBased = {

    title: "Scenario Based Questions",

    icon: "🧠",

    questions: [

        {
            question: "A production deployment failed. What will you do?",

            answer: `
• Assess impact

• Stop rollout

• Roll back if required

• Communicate status

• Investigate root cause

• Implement corrective actions
`
        },

        {
            question: "A Kubernetes pod is stuck in Pending state.",

            answer: `
• Describe pod

• Check events

• Verify resources

• Check PVC availability

• Review node status

• Check scheduling constraints
`
        },

        {
            question: "Application latency suddenly increased.",

            answer: `
• Review monitoring

• Check infrastructure metrics

• Analyze traces

• Review recent changes

• Identify bottleneck

• Validate fix
`
        },

        {
            question: "Developers need a new environment urgently.",

            answer: `
• Use Terraform automation

• Provision through CI/CD

• Apply standard modules

• Validate environment

• Hand over with documentation
`
        },

        {
            question: "Jenkins builds suddenly became slow.",

            answer: `
• Check controller resources

• Review agent health

• Analyze queue length

• Review plugin changes

• Optimize pipeline steps
`
        },

        {
            question: "EKS nodes are not joining the cluster.",

            answer: `
• Check IAM roles

• Verify security groups

• Review bootstrap logs

• Verify subnet routing

• Check node group configuration
`
        },

        {
            question: "Terraform apply failed in production.",

            answer: `
• Review error output

• Validate plan

• Check permissions

• Review state

• Avoid manual modifications
`
        },

        {
            question: "Disk usage reached 95%.",

            answer: `
• Identify large files

• Review logs

• Remove unnecessary files

• Archive data

• Implement monitoring
`
        },

        {
            question: "A Sev1 incident is declared.",

            answer: `
• Establish incident bridge

• Assign ownership

• Restore service

• Communicate frequently

• Perform RCA
`
        },

        {
            question: "Management asks how reliability can be improved.",

            answer: `
• Improve monitoring

• Automate deployments

• Reduce manual changes

• Implement SLOs

• Improve incident response

• Increase observability
`
        },

        {
            question: "How would you design a DevOps platform from scratch?",

            answer: `
• Source control

• CI/CD pipelines

• Container platform

• Infrastructure as Code

• Monitoring

• Security controls

• Incident management
`
        },

        {
            question: "How would you migrate applications to Kubernetes?",

            answer: `
• Containerize applications

• Create manifests

• Implement CI/CD

• Configure monitoring

• Test thoroughly

• Execute phased migration
`
        },

        {
            question: "A database is causing application slowness.",

            answer: `
• Analyze queries

• Review execution plans

• Check connection pools

• Monitor resource utilization

• Work with DBA team
`
        },

        {
            question: "How would you reduce cloud costs?",

            answer: `
• Right-size resources

• Remove unused resources

• Use autoscaling

• Optimize storage

• Review utilization trends
`
        },

        {
            question: "What would you do in your first 90 days as a Senior DevOps Engineer?",

            answer: `
• Understand architecture

• Review CI/CD

• Review monitoring

• Identify risks

• Improve automation

• Build team relationships
`
        }

    ]

};

export default scenarioBased;