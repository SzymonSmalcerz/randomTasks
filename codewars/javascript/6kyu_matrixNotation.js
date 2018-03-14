/*


Given a matrix represented as a list of string, such as

###.....
..###...
....###.
.....###
.....###
....###.
..###...
###.....
write a function rotateClockwise that return its 90° clockwise rotation, for our example:

#......#
#......#
##....##
.#....#.
.##..##.
..####..
..####..
...##...
Note that the matrix isn't necessarily a square, though it's always a rectangle!

Please also note that the equality a == rotateClockwise(rotateClockwise(rotateClockwise(rotateClockwise(a)))); (360° clockwise rotation), is not always true because rotateClockwise(['']) => [] and rotateClockwise(['','','']) => [] (empty lines information is lost)


*/


function rotateClockwise(matrix) {
    var numOfColumns = matrix[0] ? matrix[0].length : 0
    var numOfRows = matrix.length
    var res = []
    var str =""
    for(let x = 0;x<numOfColumns;x++){
      str=""
      for(let y = numOfRows-1;y>=0;y--){
        str+=matrix[y][x]
      }
      res.push(str)
    }
    
    return res
}
