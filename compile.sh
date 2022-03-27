# Compile typescript directories in "packages" dir

for dir in D:/Development/Projects/Eudomius/utilities/packages/*/     # list directories in the form "/tmp/dirname/"
do
    dir=${dir%*/}      # remove the trailing "/"
    tsc -p $dir        # compile the directory
done
echo "Done"
# Wait 10 seconds before exiting
sleep 10