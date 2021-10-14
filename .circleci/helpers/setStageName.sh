#!/bin/bash
set -eu

STAGE=""

case "$CIRCLE_BRANCH" in
  "master"      ) echo "prod" && exit 0;;
  "develop"     ) echo "dev" && exit 0;;
esac
case "$CIRCLE_TAG" in
  v* ) echo "prod" && exit 0;;
  *  ) echo "setStageNameError" && exit 1;;
esac