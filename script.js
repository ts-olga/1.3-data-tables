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

  console.log(data);

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

  console.log(tableHtml);
  document.getElementById("usersTable").innerHTML = tableHtml;

  //   let newTable = document.getElementById("usersTable");
  //   let table = document.createElement("table");
  //   let tHead = document.createElement("thead");
  //   let tBody = document.createElement("tbody");

  //   newTable.append(table);
  //   table.append(tHead);

  //   createHead(config);
  //   console.log(createHead);

  //   createBody(data);
  //   console.log(createBody);

  //   function createHead(config) {
  //     let tr = document.createElement("tr");
  //     let th = document.createElement("th");

  //     tHead.append(tr);
  //     th.innerText = "№";
  //     tr.append(th);

  //     config.columns.forEach((el) => {
  //       let elementOfThead = document.createElement("th");
  //       elementOfThead.innerText = el.title;
  //       tr.append(elementOfThead);
  //     });
  //   }
  //   function createBody(data) {
  //     let tr = document.createElement("tr");
  //     let td = document.createElement("td");
  //     tBody.append(tr);
  //     for (let i = 0; i < data.lenght; i++) {
  //       td.append(i);
  //     }
  //   }
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
