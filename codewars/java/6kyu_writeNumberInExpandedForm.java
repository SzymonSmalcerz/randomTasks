/*

  https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/java

  Write Number in Expanded Form
  You will be given a number and you will need to
  return it as a string in Expanded Form. For example:

  Kata.expandedForm(12); # Should return "10 + 2"
  Kata.expandedForm(42); # Should return "40 + 2"
  Kata.expandedForm(70304); # Should return "70000 + 300 + 4"
  NOTE: All numbers will be whole numbers greater than 0.

*/

public class Kata
{
    public static String expandedForm(int num)
    {
      String result = "";
      int n = 10;
      while(num > 0) {
        int temp = num%n;
        if(temp != 0) {
          result = temp + " + " + result;
        }
        num -= temp;
        n*=10;
      }
      return result.substring(0,result.length() - 3);
    }
}
