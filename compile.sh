#!/bin/bash

# Compile typescript directories in "packages" dir

for dir in D:/Development/Projects/Eudomius/utilities/packages/*/     # list directories in the form "/tmp/dirname/"
do
    dir=${dir%*/}      # remove the trailing "/"
    echo "Compiling $dir ..."
    tsc -p $dir        # compile the directory
    echo "Done."
    echo "Building typings of : $dir ..."
    tsc --build "$dir/tsconfig.typings.json"
    echo "Done."
done

echo "All packages compiled."

# Wait 10 seconds before exiting
sleep 50