const kubernetesTroubleshooting = {


title: "Kubernetes Troubleshooting",

icon: "🚑",

questions: [

    {
        question: "A pod is stuck in Pending state. How do you troubleshoot it?",

        answer: `


• Run kubectl describe pod <pod>

• Check Events section

• Verify node availability

• Check CPU and memory requests

• Verify Persistent Volume availability

• Check taints and tolerations

• Verify scheduler messages
`
},


    {
        question: "A pod is in CrashLoopBackOff. What do you do?",

        answer: `


• Check pod logs

• Review previous container logs

• Verify application startup process

• Check environment variables

• Validate ConfigMaps and Secrets

• Review resource limits

• Examine Events section
`
},


    {
        question: "How do you view pod logs?",

        answer: `


• kubectl logs <pod>

• kubectl logs -f <pod>

• kubectl logs --previous <pod>

• Use label selectors when needed

• Review logs before restarting workloads
`
},


    {
        question: "What does ImagePullBackOff mean?",

        answer: `


• Image download failed

• Invalid image name

• Authentication issue

• Registry unavailable

• Missing image tag

• Verify imagePullSecrets
`
},


    {
        question: "What does ErrImagePull indicate?",

        answer: `


• Kubernetes failed to pull image

• Registry access issue

• Wrong image path

• Invalid credentials

• Missing image version
`
},


    {
        question: "A service is not reachable. How do you troubleshoot?",

        answer: `


• Verify service exists

• Check service endpoints

• Verify selectors

• Confirm pods are running

• Test connectivity

• Review Network Policies

• Validate DNS resolution
`
},


    {
        question: "How do you verify service endpoints?",

        answer: `


• kubectl get endpoints

• Ensure endpoints exist

• Verify label selectors

• Confirm pod readiness

• Check namespace alignment
`
},


    {
        question: "A deployment rollout is stuck. What do you check?",

        answer: `


• kubectl rollout status

• Describe deployment

• Check pod failures

• Review readiness probes

• Verify image availability

• Inspect Events
`
},


    {
        question: "What causes OOMKilled?",

        answer: `


• Container exceeded memory limit

• Memory leak

• Incorrect memory sizing

• High application load

• Resource limit too low
`
},


    {
        question: "How do you investigate OOMKilled containers?",

        answer: `


• kubectl describe pod

• Review memory usage

• Check container limits

• Analyze application logs

• Review monitoring metrics

• Increase limits if justified
`
},


    {
        question: "Pods are restarting frequently. How do you investigate?",

        answer: `


• Check restart count

• Review logs

• Verify probes

• Check OOMKilled events

• Review application startup

• Inspect configuration changes
`
},


    {
        question: "Readiness Probe vs Liveness Probe troubleshooting?",

        answer: `


• Readiness controls traffic routing

• Liveness controls container restart

• Failed readiness keeps pod out of service

• Failed liveness triggers restart

• Validate endpoints and timing
`
},


    {
        question: "What happens if readiness probe fails?",

        answer: `


• Pod remains running

• Service stops routing traffic

• Prevents failed requests

• Helps protect users

• Deployment may appear unavailable
`
},


    {
        question: "What happens if liveness probe fails?",

        answer: `


• Container restarted

• Application state lost

• May enter CrashLoopBackOff

• Indicates application health issue
`
},


    {
        question: "DNS resolution is failing inside the cluster. How do you troubleshoot?",

        answer: `


• Verify CoreDNS pods

• Check CoreDNS logs

• Test nslookup

• Verify service records

• Check network connectivity

• Inspect DNS configuration
`
},


    {
        question: "How do you troubleshoot CoreDNS?",

        answer: `


• Check pod status

• Review logs

• Verify deployment health

• Check resource usage

• Test DNS queries

• Inspect ConfigMap
`
},


    {
        question: "How do you troubleshoot Ingress issues?",

        answer: `


• Verify ingress resource

• Check ingress controller

• Review controller logs

• Validate DNS records

• Check backend service

• Test routing rules
`
},


    {
        question: "Ingress works internally but not externally. What could be wrong?",

        answer: `


• DNS issue

• Load balancer problem

• Firewall restrictions

• Security group rules

• TLS misconfiguration
`
},


    {
        question: "How do you troubleshoot a failed Helm deployment?",

        answer: `


• helm status

• helm history

• kubectl events

• Verify chart values

• Review rendered manifests

• Check application logs
`
},


    {
        question: "How do you troubleshoot Persistent Volume issues?",

        answer: `


• Check PVC status

• Verify StorageClass

• Review PV binding

• Inspect storage backend

• Validate access modes
`
},


    {
        question: "PVC is stuck in Pending. Why?",

        answer: `


• Missing StorageClass

• Storage unavailable

• Incorrect access mode

• Capacity mismatch

• Provisioner issue
`
},


    {
        question: "How do you troubleshoot node issues?",

        answer: `


• kubectl describe node

• Review node conditions

• Check kubelet status

• Review system logs

• Verify resources

• Inspect networking
`
},


    {
        question: "What does Node NotReady mean?",

        answer: `


• Kubelet issue

• Resource exhaustion

• Network failure

• Disk pressure

• Node communication problem
`
},


    {
        question: "What is DiskPressure?",

        answer: `


• Node storage running low

• Pod scheduling restricted

• Image cleanup may be required

• Log cleanup may be required

• Can cause pod failures
`
},


    {
        question: "What is MemoryPressure?",

        answer: `


• Node memory exhausted

• Scheduling restricted

• Pods may be evicted

• Requires resource review
`
},


    {
        question: "Pods are not getting scheduled. What do you check?",

        answer: `


• Resource availability

• Taints and tolerations

• Node selectors

• Affinity rules

• Cluster capacity
`
},


    {
        question: "How do you troubleshoot Network Policies?",

        answer: `


• Verify policy rules

• Test connectivity

• Check namespace selectors

• Review pod selectors

• Validate ingress and egress rules
`
},


    {
        question: "How do you investigate high CPU usage in Kubernetes?",

        answer: `


• kubectl top pod

• kubectl top node

• Review monitoring dashboards

• Analyze workload behavior

• Check autoscaling configuration
`
},


    {
        question: "How do you troubleshoot a production outage in Kubernetes?",

        answer: `


• Assess impact

• Check deployment health

• Review recent changes

• Examine Events

• Validate networking

• Check application logs

• Mitigate quickly

• Perform RCA after recovery
`
},


    {
        question: "What kubectl commands do you use most during troubleshooting?",

        answer: `


• kubectl get

• kubectl describe

• kubectl logs

• kubectl exec

• kubectl top

• kubectl rollout

• kubectl events

• kubectl port-forward
`
}


]


};

export default kubernetesTroubleshooting;

