const sre = {


title: "Site Reliability Engineering",

icon: "📈",

questions: [

    {
        question: "What is Site Reliability Engineering (SRE)?",

        answer: `


• Engineering approach to operations

• Focuses on reliability, scalability and automation

• Uses software engineering practices to solve operational problems

• Reduces manual work through automation

• Balances reliability with delivery speed
`
},


    {
        question: "What is the difference between DevOps and SRE?",

        answer: `


• DevOps is a culture and set of practices

• SRE is an implementation of DevOps principles

• SRE focuses heavily on reliability

• Uses measurable reliability targets

• Emphasizes automation and observability
`
},


    {
        question: "What is an SLA?",

        answer: `


• Service Level Agreement

• Commitment made to customers

• Defines expected availability

• Usually includes penalties for violations

• Business-facing metric
`
},


    {
        question: "What is an SLO?",

        answer: `


• Service Level Objective

• Internal reliability target

• Supports SLA achievement

• Example: 99.9% availability

• Used by engineering teams
`
},


    {
        question: "What is an SLI?",

        answer: `


• Service Level Indicator

• Measurement used to evaluate reliability

• Examples: latency, availability, error rate

• Provides operational visibility

• Supports SLO calculations
`
},


    {
        question: "What is an Error Budget?",

        answer: `


• Acceptable amount of unreliability

• Derived from SLO

• Balances innovation and stability

• Guides release decisions

• Prevents excessive risk
`
},


    {
        question: "Why are Error Budgets important?",

        answer: `


• Encourages balanced engineering decisions

• Prevents excessive deployments

• Supports reliability goals

• Aligns development and operations

• Enables data-driven risk management
`
},


    {
        question: "How do you measure service availability?",

        answer: `


• Uptime percentage

• Successful request rate

• Monitoring and observability tools

• Error rates

• User experience metrics
`
},


    {
        question: "What are the Four Golden Signals?",

        answer: `


• Latency

• Traffic

• Errors

• Saturation

• Common SRE monitoring framework
`
},


    {
        question: "What is MTTR?",

        answer: `


• Mean Time To Recovery

• Measures incident recovery speed

• Key reliability metric

• Lower MTTR is better

• Indicates operational effectiveness
`
},


    {
        question: "What is MTBF?",

        answer: `


• Mean Time Between Failures

• Measures reliability

• Longer intervals are better

• Used for trend analysis

• Supports capacity planning
`
},


    {
        question: "What is Observability?",

        answer: `


• Ability to understand system behavior

• Uses logs

• Uses metrics

• Uses traces

• Enables faster troubleshooting
`
},


    {
        question: "What are the pillars of Observability?",

        answer: `


• Metrics

• Logs

• Traces

• Correlation between all three

• Supports root cause analysis
`
},


    {
        question: "How was SRE implemented at Cavisson?",

        answer: `


• Reliability focused through performance engineering

• Dynatrace and AppDynamics used extensively

• Capacity planning performed through load testing

• Bottlenecks identified before production

• Performance trends monitored continuously

• Strong emphasis on root cause analysis

• Reliability improvements driven by performance data
`
},


    {
        question: "How was reliability measured at Cavisson?",

        answer: `


• Response time SLAs

• Error rates

• Throughput metrics

• Infrastructure utilization

• Capacity thresholds

• Application performance metrics

• End-user experience measurements
`
},


    {
        question: "How was SRE implemented at Kloud9?",

        answer: `


• Reliability through Kubernetes automation

• EKS and GKE cluster management

• Prometheus and Grafana monitoring

• Automated deployments

• Infrastructure as Code using Terraform

• Production incident management

• Focus on 99.9% availability
`
},


    {
        question: "How did Kloud9 improve reliability?",

        answer: `


• Standardized infrastructure

• Automated provisioning

• Reduced manual changes

• Improved monitoring

• Better deployment processes

• Faster incident recovery
`
},


    {
        question: "How is SRE implemented at ProfitApps?",

        answer: `


• CI/CD standardization

• Build → Promote → Deploy architecture

• Reduced deployment risks

• Improved governance

• Infrastructure automation

• Operational consistency

• Focus on deployment reliability
`
},


    {
        question: "How do Jenkins pipelines contribute to reliability?",

        answer: `


• Standardized deployments

• Automated validations

• Reduced manual errors

• Consistent release process

• Faster recovery and rollback
`
},


    {
        question: "How do Kubernetes contribute to SRE?",

        answer: `


• Self-healing workloads

• Horizontal scaling

• Rolling updates

• High availability

• Improved operational resilience
`
},


    {
        question: "How does Terraform contribute to reliability?",

        answer: `


• Infrastructure consistency

• Version-controlled changes

• Reduced configuration drift

• Faster recovery

• Repeatable deployments
`
},


    {
        question: "Describe a reliability improvement you implemented.",

        answer: `


• Automated manual infrastructure tasks

• Standardized deployments

• Reduced operational errors

• Improved recovery processes

• Increased environment consistency
`
},


    {
        question: "How do you handle production incidents?",

        answer: `


• Assess impact quickly

• Restore service first

• Communicate clearly

• Investigate root cause

• Implement preventive actions

• Document learnings
`
},


    {
        question: "What is a blameless postmortem?",

        answer: `


• Focuses on learning

• Avoids individual blame

• Encourages transparency

• Improves processes

• Prevents future incidents
`
},


    {
        question: "What should a postmortem contain?",

        answer: `


• Incident timeline

• Impact assessment

• Root cause

• Contributing factors

• Corrective actions

• Follow-up tasks
`
},


    {
        question: "How do you reduce operational toil?",

        answer: `


• Automate repetitive tasks

• Improve tooling

• Standardize processes

• Enhance monitoring

• Reduce manual interventions
`
},


    {
        question: "What is Capacity Planning?",

        answer: `


• Predict future resource requirements

• Prevent resource exhaustion

• Support growth

• Optimize costs

• Improve reliability
`
},


    {
        question: "How do you perform capacity planning?",

        answer: `


• Analyze historical trends

• Review growth patterns

• Evaluate peak usage

• Perform load testing

• Forecast future demand
`
},


    {
        question: "How do you improve MTTR?",

        answer: `


• Better monitoring

• Faster alerting

• Improved runbooks

• Automation

• Standardized incident response
`
},


    {
        question: "What makes a good SRE engineer?",

        answer: `


• Strong troubleshooting skills

• Automation mindset

• Reliability focus

• Observability expertise

• Incident management experience

• Continuous improvement mindset
`
}


]


};

export default sre;
