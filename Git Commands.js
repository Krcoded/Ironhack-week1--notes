/* # names of files and directories...
~/Documents/ironhack/day1/testing.js

~/Documents/ironhack/day1/testing.js

~/Documents/ironhack/day2/testing.js # How does mv work

# to list al fies and directories 
ls

# to change into directory
cd name_of_diretory

# to go out of directory
cd ../

# to create a file
touch file_name

# to delete a file
rm file_name

# to create a directory | mkdir -> make directory
mkdir directory_name

# to remove a directory | rmdir | -> it has to be empty!
rmdir

# to remove a directory with elements inside it
rm -rf #WAAAARNIIIIING -> DO USE WITH CARE!

# display the content of a file (ONLY WITH FILES, FOR DIRECTORIES JUST USE 'ls')
cat file_name

# to move a directory or directory (in this case a file)
mv file_name.js ../day2/ # this will keep the same name but instead of being on day1 directory it will go into day2

# move directory or file with different name
mv file_name.js ./fileNew.js # this will leave the file in the same directory but it will change the name

# pwd -> Path of working directory
pwd

# which user is using the computer
whoami

# which works for locating programs which normally have an executable a.k.a node, code
which code

# later I will teach you how to use vim, DO NOT USE IT YET
vim file_already_existing_or_new

:q # to quit
:w # to write
:w! # force write
:q! # force quit  */ mkm