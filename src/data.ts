import type { SkillRow, Job, Project, Education } from './types'

export const skills: SkillRow[] = [
  {
    category: 'Languages',
    skills: [
      { label: 'TypeScript' },
      { label: 'JavaScript ES6+' },
      { label: 'Java' },
      { label: 'Python' },
      { label: 'SQL' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { label: 'Node.js' },
      { label: 'Microservices' },
      { label: 'Express.js' },
      { label: 'Spring Boot' },
      { label: 'REST APIs' },
      { label: 'GraphQL' },
      { label: 'Event-Driven Arch.' },
    ],
  },
  {
    category: 'Cloud & IaC',
    skills: [
      { label: 'AWS CDK' },
      { label: 'Lambda' },
      { label: 'S3 · SQS · Kinesis' },
      { label: 'Firehose · IoT Core' },
      { label: 'Azure AKS' },
      { label: 'GCP' },
      { label: 'Terraform' },
    ],
  },
  {
    category: 'Containers & CI/CD',
    skills: [
      { label: 'Kubernetes' },
      { label: 'Docker' },
      { label: 'Jenkins' },
      { label: 'Azure DevOps' },
      { label: 'Git / Bitbucket' },
    ],
  },
  {
    category: 'Observability / SRE',
    skills: [
      { label: 'Prometheus' },
      { label: 'Grafana' },
      { label: 'CloudWatch' },
      { label: 'Custom Metrics' },
      { label: 'SRE Practices' },
    ],
  },
  {
    category: 'AI / Gen AI',
    skills: [
      { label: 'Amazon Bedrock' },
      { label: 'GitHub Copilot' },
      { label: 'Amazon Q Developer' },
      { label: 'Azure AI Foundry' },
      { label: 'Claude' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { label: 'DynamoDB' },
      { label: 'PostgreSQL' },
      { label: 'MySQL' },
      { label: 'MongoDB' },
      { label: 'Redis' },
      { label: 'Oracle' },
      { label: 'Cosmos DB' },
    ],
  },
  {
    category: 'Messaging',
    skills: [
      { label: 'Apache Kafka' },
      { label: 'RabbitMQ' },
      { label: 'Amazon Kinesis' },
      { label: 'SQS' },
    ],
  },
]

export const jobs: Job[] = [
  {
    period: 'May 2025 – Present',
    company: 'GSTV',
    role: 'Software Engineer',
    client: 'Digital Media · Large-Scale Content Distribution Platform',
    bullets: [
      'Build and maintain scalable backend microservices in TypeScript, JavaScript, and Node.js for a high-volume digital media delivery platform, integrating RESTful APIs for real-time content rendering.',
      'Architect event-driven pipelines using Amazon Kinesis Streams and SQS, enabling high-throughput real-time data processing across loosely coupled microservices.',
      'Lead migration from Serverless Framework to AWS CDK (TypeScript), authoring reusable IaC constructs that reduce deployment time and improve environment parity.',
      'Containerize services with Docker and Kubernetes; implement Redis caching strategies that measurably reduce system latency.',
      'Build and own CI/CD pipelines in Jenkins across Dev → QA → UAT → Production.',
      'Drive SRE practice — custom CloudWatch metrics, Prometheus exporters, Grafana dashboards, and alert policies for proactive incident detection.',
    ],
    env: ['TypeScript', 'JavaScript', 'Node.js', 'AWS CDK', 'Lambda', 'Kinesis', 'Kubernetes', 'Docker', 'Redis', 'Jenkins', 'Prometheus', 'Grafana'],
  },
  {
    period: 'Dec 2024 – Apr 2025',
    company: 'Nomura',
    role: 'Full Stack Developer',
    client: 'Financial Services · Global Investment Bank',
    bullets: [
      'Developed and maintained backend services and REST APIs in Java, Springboot, Node.js and JavaScript for seamless frontend-backend integration in a regulated financial environment.',
      'Authored and optimized SQL queries across Oracle and Azure SQL, improving data retrieval performance and application reliability.',
      'Deployed and maintained applications on Azure Kubernetes Service (AKS); performed performance monitoring and troubleshooting.',
    ],
    env: ['Java', 'Springboot', 'Node.js', 'JavaScript', 'REST APIs', 'Oracle', 'Azure SQL', 'AKS'],
  },
  {
    period: 'Apr 2019 – Nov 2022',
    company: 'Texas Review',
    role: 'Developer',
    client: 'EdTech · Web Application Development',
    bullets: [
      'Built and maintained scalable web applications using Java, React.js, and JavaScript with responsive, cross-browser-compatible UIs.',
      'Designed and integrated RESTful APIs connecting frontend components to enterprise systems, managing integration dependencies across upstream/downstream platforms.',
      'Implemented automated testing frameworks and quality gates; delivered projects with 30% faster turnaround through workflow streamlining.',
    ],
    env: ['Java', 'React.js', 'JavaScript', 'REST APIs', 'Agile/Scrum'],
  },
]

export const projects: Project[] = [
  {
    icon: '🤖',
    tag: 'Hackathon · GSTV · Gen AI',
    name: 'CloudWatch AI Log Analyzer',
    desc: 'Serverless architecture on AWS CDK that ingests CloudWatch logs and feeds them to Amazon Bedrock (Nova Micro) to generate plain-language incident summaries. EventBridge triggers every 15 minutes; results cached in DynamoDB.',
    chips: ['AWS CDK', 'Lambda', 'Amazon Bedrock', 'DynamoDB', 'EventBridge'],
  },
  {
    icon: '📊',
    tag: 'Hackathon · GSTV · DevOps',
    name: 'Playrate ePaper Bridge',
    desc: 'Electron app that captures live Grafana/Prometheus snapshots and converts them for Chroma 29 ePaper displays. Sharp-based three-color palette quantization ensures dithering-free output. Cross-platform: macOS, Windows, Linux.',
    chips: ['Electron', 'Express.js', 'Grafana', 'Prometheus', 'Sharp'],
  },
  {
    icon: '☁️',
    tag: 'Infrastructure · AWS · IaC',
    name: 'CDK Migration & Reusable Constructs',
    desc: 'Led team-wide migration from Serverless Framework to AWS CDK (TypeScript) at GSTV — designing a library of reusable L3 constructs that reduced per-service infrastructure code by ~60% and eliminated environment drift.',
    chips: ['AWS CDK', 'TypeScript', 'Lambda', 'Kinesis', 'SQS'],
  },
  {
    icon: '🚛',
    tag: 'Capstone · SNHU · Full Stack',
    name: 'Logistic Pooling Platform',
    desc: 'Full-stack Java application optimizing road freight logistics with real-time shipment tracking and route optimization. Designed ERDs in Visio, managed SQL backend, coordinated team milestones from wireframe to deployment.',
    chips: ['Java', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
]

export const education: Education[] = [
  {
    degree: 'M.S. Information Technology',
    school: 'Southern New Hampshire University',
  },
  {
    degree: 'B.Tech — Electronics & Communication',
    school: 'Jawaharlal Nehru Technological University',
  },
]
