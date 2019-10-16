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
    website {
    index_document = "index.html"

    }

  policy = <<POLICY
  {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::todoit.frontend/*"
        }
    ]
  }
  POLICY
  }