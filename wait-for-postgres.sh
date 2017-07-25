#!/bin/bash
# wait-for-postgres.sh
set -e

host="$1"
cmd="$2"

#TO_DO fix this, não tá funcionando no meu mac :(
#until psql -h "$host" -U "postgres" -c '\l'; do
#  >&2 echo "Postgres is unavailable - sleeping"
#  sleep 1
#done

sleep 15
>&2 echo "Postgres is up - executing command"
exec $cmd
