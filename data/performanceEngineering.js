const performanceEngineering = {

    title: "Performance Engineering",

    icon: "📊",

    questions: [

        {
            question: "What is Performance Engineering?",

            answer: `
• Discipline focused on application performance and scalability

• Covers testing, monitoring and optimization

• Starts early in SDLC

• Prevents production bottlenecks

• Focuses on user experience and business impact
`
        },

        {
            question: "What is the difference between Performance Testing and Performance Engineering?",

            answer: `
• Performance Testing validates behavior under load

• Performance Engineering improves system design and architecture

• Testing identifies issues

• Engineering prevents issues

• Engineering is continuous throughout SDLC
`
        },

        {
            question: "What types of Performance Testing have you performed?",

            answer: `
• Load Testing

• Stress Testing

• Spike Testing

• Endurance Testing

• Volume Testing

• Capacity Testing
`
        },

        {
            question: "What is Load Testing?",

            answer: `
• Validates expected workload

• Measures response time

• Measures throughput

• Validates system stability

• Confirms SLA compliance
`
        },

        {
            question: "What is Stress Testing?",

            answer: `
• Pushes system beyond expected limits

• Identifies breaking point

• Validates failure behavior

• Tests recovery capability

• Supports capacity planning
`
        },

        {
            question: "What is Spike Testing?",

            answer: `
• Simulates sudden traffic increase

• Tests auto-scaling behavior

• Validates resilience

• Common for flash sales

• Identifies scaling bottlenecks
`
        },

        {
            question: "What is Endurance Testing?",

            answer: `
• Long-duration testing

• Detects memory leaks

• Detects connection leaks

• Validates stability over time

• Evaluates resource consumption trends
`
        },

        {
            question: "What is Capacity Testing?",

            answer: `
• Determines maximum supported load

• Supports infrastructure planning

• Helps define scaling requirements

• Identifies resource bottlenecks
`
        },

        {
            question: "How was Performance Engineering implemented at Cavisson?",

            answer: `
• Performance validation performed before production releases

• NetStorm used for workload simulation

• Dynatrace and AppDynamics used for monitoring

• Capacity planning based on test results

• Root cause analysis performed for bottlenecks

• Recommendations provided to development, DBA and infrastructure teams

• Focus on reliability and scalability
`
        },

        {
            question: "What was your role at Cavisson?",

            answer: `
• Designed workload models

• Developed performance scripts

• Executed load tests

• Analyzed bottlenecks

• Performed root cause analysis

• Created performance reports

• Worked with developers and DBAs on fixes
`
        },

        {
            question: "How did Cavisson measure application performance?",

            answer: `
• Response time

• Throughput

• Error rates

• CPU utilization

• Memory utilization

• Database performance

• End-user experience
`
        },

        {
            question: "What tools did you use at Cavisson?",

            answer: `
• NetStorm

• Dynatrace

• AppDynamics

• Linux monitoring tools

• Database monitoring tools

• Custom reporting dashboards
`
        },

        {
            question: "How do you identify a performance bottleneck?",

            answer: `
• Review response time trends

• Analyze APM traces

• Check infrastructure metrics

• Review database execution plans

• Correlate metrics across layers

• Validate findings through testing
`
        },

        {
            question: "Describe a bottleneck you identified.",

            answer: `
• High response times observed during load testing

• Dynatrace showed database latency

• SQL query performing full table scan

• Worked with DBA team

• Query optimized through indexing

• Response time improved significantly
`
        },

        {
            question: "How do you build a workload model?",

            answer: `
• Analyze production traffic

• Identify transaction mix

• Define concurrency levels

• Define think times

• Model realistic user behavior

• Validate against production patterns
`
        },

        {
            question: "What metrics are most important during a performance test?",

            answer: `
• Average response time

• P95 latency

• P99 latency

• Throughput

• Error rate

• CPU utilization

• Memory utilization
`
        },

        {
            question: "What is P95?",

            answer: `
• 95 percent of requests complete within this value

• Better than average response time

• Reflects user experience

• Common performance SLA metric

• Helps identify tail latency
`
        },

        {
            question: "Why is P95 more useful than average response time?",

            answer: `
• Average can hide slow requests

• P95 reflects real user experience

• Identifies performance outliers

• Commonly used in SRE practices
`
        },

        {
            question: "How do you analyze performance results?",

            answer: `
• Compare against SLAs

• Review latency distribution

• Analyze bottlenecks

• Correlate infrastructure metrics

• Validate scalability trends
`
        },

        {
            question: "What is Throughput?",

            answer: `
• Number of transactions processed

• Requests per second

• Important scalability metric

• Indicates system capacity
`
        },

        {
            question: "What is the relationship between throughput and response time?",

            answer: `
• Higher load can increase latency

• Bottlenecks reduce throughput

• Need balance between both metrics

• Helps identify capacity limits
`
        },

        {
            question: "How do you perform Root Cause Analysis?",

            answer: `
• Collect evidence

• Review monitoring data

• Analyze logs

• Analyze traces

• Validate hypotheses

• Confirm findings through testing
`
        },

        {
            question: "How do Dynatrace and AppDynamics help?",

            answer: `
• Distributed tracing

• Transaction analysis

• Service dependency mapping

• Infrastructure monitoring

• Root cause identification
`
        },

        {
            question: "How does Performance Engineering contribute to SRE?",

            answer: `
• Improves reliability

• Supports capacity planning

• Prevents outages

• Improves user experience

• Supports SLA achievement
`
        },

        {
            question: "How is Performance Engineering relevant at ProfitApps?",

            answer: `
• Performance validation integrated into CI/CD pipelines

• Infrastructure designed for scalability

• Monitoring supports performance visibility

• Deployment processes reduce performance regressions

• Reliability and performance considered together
`
        },

        {
            question: "How would you integrate performance testing into Jenkins?",

            answer: `
• Execute performance tests after deployment

• Compare against baseline

• Generate reports

• Fail pipeline if thresholds exceeded

• Provide automated feedback
`
        },

        {
            question: "How do Kubernetes and Performance Engineering work together?",

            answer: `
• Autoscaling supports workload growth

• Resource limits prevent contention

• Monitoring validates application behavior

• Capacity planning supports cluster sizing
`
        },

        {
            question: "What performance issues are common in microservices?",

            answer: `
• Network latency

• Excessive service calls

• Database contention

• Resource contention

• Poor caching strategy
`
        },

        {
            question: "How do you approach performance testing for a retail application?",

            answer: `
• Analyze production traffic

• Model checkout workflows

• Simulate peak shopping events

• Validate scalability

• Test auto-scaling behavior

• Measure customer-facing SLAs
`
        },

        {
            question: "What makes a good Performance Engineer?",

            answer: `
• Strong analytical skills

• Understanding of system architecture

• Monitoring expertise

• Root cause analysis capability

• Collaboration with multiple teams

• Focus on user experience
`
        }

    ]

};

export default performanceEngineering;