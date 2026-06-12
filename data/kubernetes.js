
const kubernetes = {


title: "Kubernetes Fundamentals",

icon: "☸️",

questions: [

    {
        question: "What is Kubernetes?",

        answer: `


• Container orchestration platform

• Automates deployment, scaling and management

• Originally developed by Google

• Supports self-healing workloads

• Provides high availability and scalability
`
},


    {
        question: "What problem does Kubernetes solve?",

        answer: `


• Manual container management

• Scaling challenges

• Service discovery

• High availability requirements

• Deployment automation
`
},


    {
        question: "What is a Pod?",

        answer: `


• Smallest deployable unit in Kubernetes

• Contains one or more containers

• Shares network namespace

• Shares storage volumes

• Ephemeral by nature
`
},


    {
        question: "What is a ReplicaSet?",

        answer: `


• Maintains desired number of pods

• Recreates failed pods

• Ensures availability

• Managed by Deployments in most cases
`
},


    {
        question: "What is a Deployment?",

        answer: `


• Manages ReplicaSets

• Supports rolling updates

• Supports rollbacks

• Provides declarative application deployment

• Most common workload controller
`
},


    {
        question: "What is a Service?",

        answer: `


• Provides stable network endpoint

• Load balances traffic

• Enables service discovery

• Abstracts pod IP changes
`
},


    {
        question: "Types of Kubernetes Services?",

        answer: `


• ClusterIP

• NodePort

• LoadBalancer

• ExternalName

• Headless Service
`
},


    {
        question: "What is ClusterIP?",

        answer: `


• Default service type

• Internal cluster communication

• Accessible only within cluster

• Provides stable virtual IP
`
},


    {
        question: "What is NodePort?",

        answer: `


• Exposes service on node port

• Accessible outside cluster

• Uses port range 30000-32767

• Common for testing
`
},


    {
        question: "What is LoadBalancer Service?",

        answer: `


• Integrates with cloud load balancer

• Provides external access

• Common in EKS and GKE

• Simplifies application exposure
`
},


    {
        question: "What is Ingress?",

        answer: `


• Layer 7 routing

• HTTP and HTTPS traffic management

• Host-based routing

• Path-based routing

• TLS termination support
`
},


    {
        question: "What is an Ingress Controller?",

        answer: `


• Implements ingress rules

• Examples: NGINX, Traefik, AWS ALB

• Handles external traffic

• Performs routing decisions
`
},


    {
        question: "What is a Namespace?",

        answer: `


• Logical cluster separation

• Multi-team isolation

• Resource organization

• Environment segregation

• RBAC boundary
`
},


    {
        question: "What are Labels?",

        answer: `


• Key-value metadata

• Organize resources

• Used by selectors

• Enable workload grouping
`
},


    {
        question: "What are Selectors?",

        answer: `


• Match labels

• Connect services to pods

• Used by deployments

• Enable resource targeting
`
},


    {
        question: "What is a ConfigMap?",

        answer: `


• Stores non-sensitive configuration

• Decouples config from image

• Mounted as files or env variables

• Supports configuration management
`
},


    {
        question: "What is a Secret?",

        answer: `


• Stores sensitive data

• Passwords

• API keys

• Certificates

• Base64 encoded by default
`
},


    {
        question: "What is Persistent Volume (PV)?",

        answer: `


• Cluster storage resource

• Independent of pods

• Supports persistent data

• Provisioned statically or dynamically
`
},


    {
        question: "What is Persistent Volume Claim (PVC)?",

        answer: `


• Storage request from application

• Consumes Persistent Volume

• Abstracts storage implementation

• Simplifies storage management
`
},


    {
        question: "What is StorageClass?",

        answer: `


• Dynamic storage provisioning

• Defines storage type

• Cloud storage integration

• Supports different performance tiers
`
},


    {
        question: "What is Resource Request?",

        answer: `


• Minimum guaranteed resource

• Scheduler uses requests

• CPU request

• Memory request

• Ensures workload placement
`
},


    {
        question: "What is Resource Limit?",

        answer: `


• Maximum resource usage

• Prevents noisy neighbor issues

• CPU limit

• Memory limit

• Protects cluster stability
`
},


    {
        question: "What happens if memory limit is exceeded?",

        answer: `


• Pod receives OOMKilled

• Container restarts

• Application may become unavailable

• Indicates insufficient memory allocation
`
},


    {
        question: "What is Horizontal Pod Autoscaler (HPA)?",

        answer: `


• Scales pods automatically

• Based on metrics

• CPU utilization

• Memory utilization

• Custom metrics support
`
},


    {
        question: "What is Cluster Autoscaler?",

        answer: `


• Adds or removes nodes

• Responds to scheduling demand

• Integrates with cloud providers

• Supports cost optimization
`
},


    {
        question: "What is Pod Disruption Budget (PDB)?",

        answer: `


• Controls voluntary disruptions

• Protects application availability

• Limits simultaneous pod eviction

• Important during maintenance
`
},


    {
        question: "What is RBAC?",

        answer: `


• Role Based Access Control

• Restricts user permissions

• Principle of least privilege

• Uses Roles and RoleBindings

• Improves cluster security
`
},


    {
        question: "What is Helm?",

        answer: `


• Kubernetes package manager

• Uses charts

• Simplifies deployments

• Supports versioning

• Supports rollbacks
`
},


    {
        question: "What are Helm Charts?",

        answer: `


• Collection of Kubernetes manifests

• Parameterized deployment templates

• Reusable application packaging

• Environment customization support
`
},


    {
        question: "How do rolling updates work?",

        answer: `


• New pods created gradually

• Old pods terminated gradually

• Maintains application availability

• Supports zero-downtime deployments

• Managed by Deployment controller
`
},


    {
        question: "How do you rollback a deployment?",

        answer: `


• kubectl rollout undo

• Helm rollback

• Restore previous image version

• Validate application health

• Verify traffic routing
`
},


    {
        question: "How do you secure Kubernetes clusters?",

        answer: `


• RBAC

• Network Policies

• Secrets management

• Image scanning

• Pod Security Standards

• Audit logging
`
},


    {
        question: "What is Network Policy?",

        answer: `


• Controls pod communication

• Restricts network traffic

• Implements micro-segmentation

• Improves security posture
`
},


    {
        question: "Difference between EKS and GKE?",

        answer: `


• EKS is AWS managed Kubernetes

• GKE is Google managed Kubernetes

• Different integrations with cloud services

• Similar Kubernetes APIs

• Operational experience largely transferable
`
}


]


};

export default kubernetes;
