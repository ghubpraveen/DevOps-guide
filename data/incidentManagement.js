const incidentManagement = {

    title: "Incident Management",

    icon: "🚨",

    questions: [

        {
            question: "What is an Incident?",

            answer: `
• Any unplanned interruption to a service

• Can impact customers or internal users

• Requires investigation and resolution

• Prioritized based on business impact

• Managed through defined processes
`
        },

        {
            question: "What is Incident Management?",

            answer: `
• Process for handling production issues

• Focuses on service restoration

• Minimizes business impact

• Improves communication

• Enables continuous improvement
`
        },

        {
            question: "What are incident severity levels?",

            answer: `
• Sev1 - Critical business impact

• Sev2 - Major functionality affected

• Sev3 - Partial degradation

• Sev4 - Minor issue or enhancement

• Severity is determined by business impact
`
        },

        {
            question: "What is a Sev1 incident?",

            answer: `
• Complete outage

• Revenue impact

• Large customer impact

• Immediate response required

• Highest escalation level
`
        },

        {
            question: "How do you handle a Sev1 incident?",

            answer: `
• Assess business impact

• Establish incident bridge

• Assign ownership

• Restore service quickly

• Communicate frequently

• Perform RCA after recovery
`
        },

        {
            question: "What is your first priority during an outage?",

            answer: `
• Restore service

• Minimize customer impact

• Avoid unnecessary changes

• Stabilize environment

• Investigate root cause after recovery
`
        },

        {
            question: "What is an Incident Commander?",

            answer: `
• Coordinates incident response

• Assigns responsibilities

• Manages communication

• Prevents duplication of effort

• Maintains incident timeline
`
        },

        {
            question: "How do you communicate during incidents?",

            answer: `
• Provide regular updates

• Share known facts only

• Communicate impact clearly

• Keep stakeholders informed

• Maintain communication timeline
`
        },

        {
            question: "What information should be shared during an incident?",

            answer: `
• Current impact

• Affected services

• Mitigation actions

• Recovery status

• Next update time
`
        },

        {
            question: "What is MTTR?",

            answer: `
• Mean Time To Recovery

• Measures recovery speed

• Important reliability metric

• Lower values are better

• Indicates operational maturity
`
        },

        {
            question: "How do you reduce MTTR?",

            answer: `
• Better monitoring

• Faster alerting

• Runbooks

• Automation

• Effective incident response process
`
        },

        {
            question: "What is RCA?",

            answer: `
• Root Cause Analysis

• Identifies underlying cause

• Prevents recurrence

• Documents findings

• Drives improvements
`
        },

        {
            question: "How do you perform Root Cause Analysis?",

            answer: `
• Collect logs

• Review metrics

• Analyze timeline

• Identify triggering event

• Validate findings

• Document corrective actions
`
        },

        {
            question: "What is a blameless postmortem?",

            answer: `
• Focuses on learning

• Avoids individual blame

• Encourages transparency

• Improves processes

• Supports reliability culture
`
        },

        {
            question: "What should a postmortem include?",

            answer: `
• Incident summary

• Timeline

• Business impact

• Root cause

• Corrective actions

• Prevention measures
`
        },

        {
            question: "Describe a production incident you handled.",

            answer: `
• Application performance degraded after deployment

• Impact identified through monitoring alerts

• Traffic stabilized through rollback

• Root cause traced to configuration issue

• Validation checks added to pipeline

• Incident documented and reviewed
`
        },

        {
            question: "Tell me about a deployment failure.",

            answer: `
• Deployment introduced application instability

• Service health checks detected issue

• Rollback executed immediately

• Service restored quickly

• Root cause identified and fixed

• Additional safeguards implemented
`
        },

        {
            question: "How do you handle failed deployments?",

            answer: `
• Stop rollout

• Assess impact

• Roll back if required

• Investigate root cause

• Validate fix

• Redeploy safely
`
        },

        {
            question: "How do Kubernetes help during incidents?",

            answer: `
• Self-healing workloads

• Rolling deployments

• Rollbacks

• Health probes

• Horizontal scaling
`
        },

        {
            question: "How does Jenkins help incident management?",

            answer: `
• Automated deployments

• Deployment traceability

• Controlled rollback process

• Reduced manual errors

• Auditability
`
        },

        {
            question: "How does monitoring help incident response?",

            answer: `
• Early detection

• Faster diagnosis

• Improved visibility

• Reduced MTTR

• Better operational awareness
`
        },

        {
            question: "Which monitoring tools have you used?",

            answer: `
• Dynatrace

• AppDynamics

• Prometheus

• Grafana

• CloudWatch
`
        },

        {
            question: "How do you identify incident impact?",

            answer: `
• Review affected services

• Check customer impact

• Measure revenue impact

• Review monitoring dashboards

• Assess business criticality
`
        },

        {
            question: "How do you prioritize incidents?",

            answer: `
• Business impact

• Customer impact

• Revenue impact

• Security implications

• Service criticality
`
        },

        {
            question: "How do you manage incident timelines?",

            answer: `
• Record all major events

• Track decisions

• Track communications

• Maintain audit trail

• Support RCA activities
`
        },

        {
            question: "How do you prevent recurring incidents?",

            answer: `
• Perform RCA

• Automate fixes

• Improve monitoring

• Update runbooks

• Address technical debt
`
        },

        {
            question: "What is a Runbook?",

            answer: `
• Operational procedure document

• Provides troubleshooting steps

• Improves consistency

• Reduces MTTR

• Supports on-call teams
`
        },

        {
            question: "What should a good Runbook contain?",

            answer: `
• Symptoms

• Impact

• Troubleshooting steps

• Escalation process

• Recovery procedures

• Validation steps
`
        },

        {
            question: "How do you handle incidents at ProfitApps?",

            answer: `
• Monitor deployments closely

• Use CI/CD controls

• Maintain rollback capability

• Investigate root causes

• Improve deployment reliability

• Document lessons learned
`
        },

        {
            question: "How did incident management differ at Cavisson?",

            answer: `
• Strong focus on performance-related incidents

• Dynatrace and AppDynamics used extensively

• Root causes identified through tracing

• Bottlenecks analyzed scientifically

• Recommendations provided to application teams

• Focus on preventing production failures
`
        },

        {
            question: "How did incident management differ at Kloud9?",

            answer: `
• Focus on Kubernetes operations

• EKS and GKE production support

• Infrastructure reliability

• Terraform-managed environments

• Monitoring and alerting driven operations

• High availability objectives
`
        }

    ]

};

export default incidentManagement;