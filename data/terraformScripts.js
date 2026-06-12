const terraformScripts = {

    title: "Terraform Examples",

    icon: "🏗️",

    questions: [

        {
            question: "Create an S3 Bucket.",

            answer: `
resource "aws_s3_bucket" "logs" {

  bucket = "company-logs"

}
`
        },

        {
            question: "Create an EC2 Instance.",

            answer: `
resource "aws_instance" "app" {

  ami           = "ami-123456"

  instance_type = "t3.medium"

}
`
        },

        {
            question: "Create a Security Group.",

            answer: `
resource "aws_security_group" "web" {

  ingress {

    from_port = 80

    to_port = 80

    protocol = "tcp"

    cidr_blocks = ["0.0.0.0/0"]

  }

}
`
        },

        {
            question: "Create a VPC.",

            answer: `
resource "aws_vpc" "main" {

  cidr_block = "10.0.0.0/16"

}
`
        },

        {
            question: "Create a Subnet.",

            answer: `
resource "aws_subnet" "public" {

  vpc_id = aws_vpc.main.id

  cidr_block = "10.0.1.0/24"

}
`
        },

        {
            question: "Configure Terraform Backend.",

            answer: `
terraform {

  backend "s3" {

    bucket = "terraform-state"

    key = "prod.tfstate"

    region = "us-east-1"

  }

}
`
        },

        {
            question: "Define Variables.",

            answer: `
variable "instance_type" {

  default = "t3.medium"

}
`
        },

        {
            question: "Use Module.",

            answer: `
module "eks" {

  source = "./modules/eks"

  cluster_name = "prod"

}
`
        },

        {
            question: "Create IAM Role.",

            answer: `
resource "aws_iam_role" "eks" {

  name = "eks-role"

}
`
        },

        {
            question: "Output EC2 Public IP.",

            answer: `
output "public_ip" {

  value = aws_instance.app.public_ip

}
`
        }

    ]

};

export default terraformScripts;