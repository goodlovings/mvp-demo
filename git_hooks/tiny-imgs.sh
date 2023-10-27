echo "Processing Pre-Commit Hooks"

command -v tinypng >/dev/null 2>&1 || {
    echo "Installing tinypng-cli"
    npm install -g tinypng-cli
    echo "Please install manually if any error occurs, you can refer to below link"
    echo "\t Site: \033[1m\033[4mhttps://www.npmjs.com/package/tinypng-cli\033[0m"
}

key="LxQn6BC2TrY8TtlLKMhKZMXzP41SMwWv"

ExecuteImageCompression (){
  echo "tinypng for file $file"
  output=$(tinypng $file -k $key)
}

IterateCommitedImages (){
  for file in $(git diff --diff-filter=d --staged --name-only | grep ".png\|.jpg\|.jpeg")
  do
    myfilesize=$(ls -l $file | awk '{print $5}')
    if [ $myfilesize -gt 10000 ];then
      echo "Crushing $file"
      ExecuteImageCompression
      git add $file;
    else
      echo "$file 太小不压缩"
    fi
  done
}

if [ -e .git/MERGE_MSG ]; then
    echo "Merge commit skipping image compression"
else
    IterateCommitedImages
fi