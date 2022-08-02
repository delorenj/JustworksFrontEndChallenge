# JustworksFrontEndChallenge

### Problem
You are tasked with making a simple payroll entry system for your new company, Justmocks.
It shall list all current employess and allow the user to enter an amount to pay (in cents)
The system will keep track of the total to be paid out on Payday.

### Requirements
1. Each user shall be listed on a single page (no pagination necessary)
2. Each user row shall include an input to type in the amount in cents owed
3. The bottom of the list shall include a `total` that is dynamically calculated as the entries are typed in

* Do not focus on design or layout
* Create as many components as you think necessary
* Show as many react concepts as you feel comfortable with (useEffect, useRef, useMemo, useCallback, etc...)
* (optional) Add tests as you see fit

### Mock data
To get a list of employees, make a GET request to:

`https://jsonplaceholder.typicode.com/users`
