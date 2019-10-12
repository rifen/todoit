terraform {
  backend "s3" {
    key = "state"
    region = "us-west-2"
  }
}

provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "todoit_frontend" {
  bucket = "todoit.frontend"
  acl = "public-read"
}
