variable aws_access_key{
    description = "aws_access_key"
    type = string
}

variable aws_secret_key{
    description = "aws_secret_key"
    type = string
}

variable "subnet_id_1"{
    default= "subnet-0586e1900ce5b9e7e"
}

variable "subnet_id_2"{
    default= "subnet-0716bf5dbff1ec5c3"

}

variable "aws_region" {
  default     = "ap-south-1"  # Set your default region here or remove the default value
}

