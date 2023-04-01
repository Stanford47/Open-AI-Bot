find ./dist/src -name "*.js" >> ./scripts/tmp/DIST_JS_FILE_LIST.txt

# file_array=()

# https://stackoverflow.com/a/73075563 comment #3
#SEARCH_REGEX="/(from\s+)(["'])(?!.*\.js)(\.?\.\/.*)(["'])/"

# get_file_contents() {
#     while IFS= read -r line
#     do 
#         file_array+=("$line")
#         echo 
#     done < "$1"
# }

# get_file_contents "./scripts/tmp/DIST_JS_FILE_LIST.txt"

# rm ./scripts/tmp/DIST_JS_FILE_LIST.txt

# for e in "${file_array[@]}"
# do 
#     echo "$e"
# done