#!/usr/bin/env bash

# TM351 stack dependencies
apt-get -y update
apt-get install -y libpq-dev zip


for PYTHONVER in 2 3 ; do
  PYTHON="python$PYTHONVER"
  PIP="pip$PYTHONVER"

  $PIP install --upgrade pip
  
  # The TM351 python stack
  $PIP install ipythonblocks
  
  $PIP install psycopg2
  $PIP install SQLAlchemy

  $PIP install pymongo
  $PIP install docker-py
  
  $PIP install folium
  
  $PIP install nltk
  $PIP install scikit-learn
  
  $PIP install rdflib
  $PIP install networkx
  $PIP install sparqlwrapper
  
done

# Reduce the image size
apt-get autoremove -y
apt-get clean -y

cd /
