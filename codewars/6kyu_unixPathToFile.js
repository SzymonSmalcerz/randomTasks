/*


Task
Your task is to calculate in a standard FHS-compliant UNIX filesystem (i.e. using / as a separator and ../ to go up a directory level), the relative path from the original file location to its current location on a disk.

The path does not contain the name of the file itself, but rather ends in its containing directory; hence, all paths end with a /. Also note that ./ should be used to indicate the current directory. Consequentially, all paths should begin either with ./ or ../

Input/Output
[input] string original

The absolute directory where the file was originally located.

[input] string current

The absolute path to the file's new location.

[output] a string

The relative path from original to current folder.

Example
For original = "/home/ubuntu/Documents/" and current = "/home/root/",

The output should be "../../root/"

In this example, the common ancestor of both paths is /home, and the relative path must go up the file system using ../ until it reaches the common ancestor. From there, it goes down the hierarchy into root, the target directory.

For original = "/home/sam/" and current = "/home/sam/Desktop/archives/01-01-14/"

The output should be "./Desktop/archives/01-01-14/"

Here, the new directory is a child of the original one—in other words, the common ancestor of both is the first path. Therefore, the relative path simply goes down the filesystem until it reaches 01-01-14.




*/


function pathToFile(original, current) {

  original = original.split("/").filter(val => val);
  current = current.split("/").filter(val => val);
  
  var commonDirectoriesArray = original.filter((val,index,arr) => arr[index] == current[index]);
  
  var diffrenceBetweenOrignalAndCurrent = current.filter((val,index,arr) => arr[index] != original[index]).join("/");
  
  if(commonDirectoriesArray.length == original.length){
    return diffrenceBetweenOrignalAndCurrent ? "./" + diffrenceBetweenOrignalAndCurrent + "/" : "./";
  } else if(commonDirectoriesArray.length >= 0){
    var res = "";
    for(let i=0;i<(original.length - commonDirectoriesArray.length);i++){res+="../"}
    return  diffrenceBetweenOrignalAndCurrent  ? res + diffrenceBetweenOrignalAndCurrent + "/" : res;
  }
}
