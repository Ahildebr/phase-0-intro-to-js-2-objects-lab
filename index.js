// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
    
  };

  function updateEmployeeWithKeyAndValue(employee, name, value) {
    return {
        ...employee,
    [name]: value,
  };
}

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
     employee.streetAddress = "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}