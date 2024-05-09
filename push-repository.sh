#!/bin/bash

git pull
git add *

echo "Escreva a messagem do commit:"
read message

git commit -am "${message}"
git push origin
