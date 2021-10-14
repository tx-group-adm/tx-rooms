#!/bin/bash
set -eu

case "$STAGE" in
  "dev"      ) ./node_modules/.bin/sls config credentials --provider aws --key $AWS_ACCESS_KEY_ID_DEV --secret $AWS_SECRET_ACCESS_KEY_DEV --overwrite && exit 0;;
  "prod"     ) ./node_modules/.bin/sls config credentials --provider aws --key $AWS_ACCESS_KEY_ID_PROD --secret $AWS_SECRET_ACCESS_KEY_PROD --overwrite && exit 0;;
esac