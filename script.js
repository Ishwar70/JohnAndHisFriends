let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  // Using map to find and print only developers
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  // Using forEach to find and print only developers
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  // Adding a new employee in the array
  let newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern",
  };

  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  // Removing the admin from array
  let filteredArr = arr.filter((employee) => employee.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray() {
  // Creating new array to merge
  let newArr = [
    { id: 5, name: "mike", age: "22", profession: "developer" },
    { id: 6, name: "sara", age: "21", profession: "intern" },
    { id: 7, name: "tom", age: "23", profession: "designer" },
  ];

  let finalArray = arr.concat(newArr);
  console.log(finalArray);
}
