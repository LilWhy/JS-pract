var products = [
   { "ID": 1,
    "FIO": "df",
    "date_create": "21.02.2021", 
    "date_last_changes": "21.02.2021",
    "contscts":[1, 2, 3], "actions":"действие"}
];
     
var html;     
for(var i in products) {
    html += '<tr>';
    html += '<td>'+products[i]['ID']+'</td>'
     + '<td>'+products[i]['FIO']+'</td>'
     + '<td>'+products[i]['date_create']+'</td>'
     + '<td>'+products[i]['date_last_changes']+'</td>'
     + '<td>'+products[i]['contscts']+'</td>'
     + '<td>'+products[i]['actions']+'</td>';
    html += '</tr>';
} 

document.write(html);