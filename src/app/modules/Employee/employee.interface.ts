export type TEmployee = {
    fullName : string,
    email : string,
    position: string,
   department:
    | 'HR'
    | 'Engineering'
    | 'Sales'
    | 'Marketing'
    | 'Finance'
    | 'Operations'
    | 'IT'
    | 'Customer Support';

}