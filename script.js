function DataTable(config, data) {
  let tableHtml = `<table>
   <thead>
       <tr>
           <th>№</th>
           <th>${config.columns[0].title}</th>
           <th>${config.columns[1].title}</th>
           <th>${config.columns[2].title}</th>
       </tr>
   </thead>
   <tbody>`;

  for (let i = 0; i < data.length; i++) {
    tableHtml += `<tr>
        <td>${i + 1}</td>
         <td>${data[i].name}</td>
         <td>${data[i].surname}</td>
        <td>${data[i].age}</td>
     </tr>`;
  }

  tableHtml += `
   </tbody>
 </table>`;

  document.getElementById("usersTable").innerHTML = tableHtml;
}

const config1 = {
  parent: "#usersTable",
  columns: [
    { title: "Имя", value: "name" },
    { title: "Фамилия", value: "surname" },
    { title: "Возраст", value: "age" },
  ],
};

const users = [
  { id: 30050, name: "Вася", surname: "Петров", age: 12 },
  { id: 30051, name: "Вася", surname: "Васечкин", age: 15 },
];

DataTable(config1, users);
