STAGE=$1
if [ -z $STAGE ]; then
	echo "Error: Stage must be provided!"
	echo
	echo "	example: sh scripts/deploy.sh dev"
    exit 1
fi

echo "stage: $STAGE"

sls deploy --config templates/resources/dynamo.yml --stage $STAGE
sls deploy --config templates/services/serverless.yml --force  --stage $STAGE
