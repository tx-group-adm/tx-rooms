#!/bin/bash
set -eu

cd ~/project/config

sed -i "s~###SLACK_SIGNING_SECRET###~${SLACK_SIGNING_SECRET_DEV}~" config.dev.json
sed -i "s~###SLACK_VERIFICATION_TOKEN###~${SLACK_VERIFICATION_TOKEN_DEV}~" config.dev.json
sed -i "s~###SLACK_BOT_USER_OAUTH_ACCESS_TOKEN###~${SLACK_BOT_USER_OAUTH_ACCESS_TOKEN_DEV}~" config.dev.json


sed -i "s~###SLACK_SIGNING_SECRET###~${SLACK_SIGNING_SECRET_DEV}~" config.prod.json
sed -i "s~###SLACK_VERIFICATION_TOKEN###~${SLACK_VERIFICATION_TOKEN_DEV}~" config.prod.json
sed -i "s~###SLACK_BOT_USER_OAUTH_ACCESS_TOKEN###~${SLACK_BOT_USER_OAUTH_ACCESS_TOKEN_DEV}~" config.prod.json

