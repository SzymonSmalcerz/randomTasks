/*


When making investment decisions, people often value money in the future less than money in the present. Some of the reasons for this, are that people could invest this money now, and the same amount of money will have less value in the future (due to inflation).

Given an initial cost of investment, and a series of returns on that investment, the 'Net Present Value' of that investment is calculated as such:

NPV(i,N) = sum(from t=0 to t=n) of R[t]/(1+i)^t

Where t - time of the cash flow, i - the discount rate, R[t] - the net cash flow at time t.

Your task for this kata: Given a one-dimensional array of integers of size n, where the first value indicates the initial investment (as a negative integer), and given a discount rate, return the Net Present Value (NPV).

As an example, the following array and rate:

npvCalc([-1100, 200, 300, 400, 500, 600, 700], 0.03)
Should return 1253.45 Note: The initial investment is interpreted as year 1

For more information on Net Present Value: https://en.wikipedia.org/wiki/Net_present_value


*/



function npvCalc(returns, rate){
  return returns.reduce((total,val,index) => total + val/Math.pow((1 + rate),index+1),0);
}
