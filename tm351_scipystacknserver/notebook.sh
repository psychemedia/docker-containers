#!/bin/bash

# Strict mode
set -euo pipefail
IFS=$'\n\t' 

#Remove any requirements for a password
#Simply run the notebook server
ipython3 notebook --no-browser --port 8888 --profile tm351MT --ip=* --matplotlib=inline
