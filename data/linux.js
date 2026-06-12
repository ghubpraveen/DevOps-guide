const linux = {

    title: "Linux Administration",

    icon: "🐧",

    questions: [

        {
            question: "How do you check CPU utilization?",

            answer: `
• top

• htop

• mpstat

• sar

• vmstat
`
        },

        {
            question: "How do you check memory utilization?",

            answer: `
• free -m

• top

• vmstat

• sar

• cat /proc/meminfo
`
        },

        {
            question: "How do you identify a process consuming high CPU?",

            answer: `
• top

• htop

• ps aux --sort=-%cpu

• pidstat
`
        },

        {
            question: "How do you identify memory consuming processes?",

            answer: `
• top

• htop

• ps aux --sort=-%mem
`
        },

        {
            question: "How do you find disk usage?",

            answer: `
• df -h

• du -sh

• du -sh *
`
        },

        {
            question: "How do you find large files?",

            answer: `
• find

• du

• sort

• ncdu
`
        },

        {
            question: "How do you check open ports?",

            answer: `
• netstat -tulpn

• ss -tulpn

• lsof -i
`
        },

        {
            question: "How do you check network connectivity?",

            answer: `
• ping

• traceroute

• curl

• nc

• telnet
`
        },

        {
            question: "Difference between soft link and hard link?",

            answer: `
• Soft link points to file path

• Hard link points to inode

• Soft link can cross filesystems

• Hard link cannot
`
        },

        {
            question: "What is inode?",

            answer: `
• Metadata structure

• Stores file information

• Does not store filename

• Used by filesystem
`
        },

        {
            question: "How do you monitor logs?",

            answer: `
• tail -f

• less

• grep

• journalctl
`
        },

        {
            question: "How do you find a specific log entry?",

            answer: `
• grep

• egrep

• awk

• journalctl
`
        },

        {
            question: "What is systemd?",

            answer: `
• Service manager

• Boot manager

• Controls system services

• Provides logging integration
`
        },

        {
            question: "How do you restart a service?",

            answer: `
• systemctl restart

• systemctl status

• systemctl start

• systemctl stop
`
        },

        {
            question: "How do you troubleshoot a Linux server?",

            answer: `
• Check CPU

• Check memory

• Check disk

• Check network

• Check logs

• Review recent changes
`
        },

        {
            question: "Load average vs CPU utilization?",

            answer: `
• Load measures runnable processes

• CPU shows actual utilization

• High load doesn't always mean high CPU

• Indicates system pressure
`
        },

        {
            question: "What is swap?",

            answer: `
• Disk used as memory extension

• Supports memory pressure situations

• Excessive swap indicates memory issues
`
        },

        {
            question: "What is zombie process?",

            answer: `
• Completed process

• Parent has not collected exit status

• Consumes process table entry
`
        },

        {
            question: "What is OOM Killer?",

            answer: `
• Linux memory protection mechanism

• Terminates processes

• Prevents system crashes

• Triggered during memory exhaustion
`
        },

        {
            question: "How do you troubleshoot high load average?",

            answer: `
• Check CPU

• Check I/O wait

• Check memory

• Review processes

• Analyze logs
`
        }

    ]

};

export default linux;