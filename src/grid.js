// export function grid(el) {
//     var container = document.createElement("div");
//     container.id = "main";
//     container.className = "container";
//     for (var i=0; i<9; i+=1) {
//         var row = document.createElement("div");
//         row.className = "row";
//         row.id = "row" + i;
//
//         for (var k=0; k<9; k+=1) {
//             var box = document.createElement("div");
//             box.className = "box";
//             row.appendChild(box);
//
//             for(var j=0; j<1; j+=1){
//               var input = document.createElement("input");
//               input.className = "input";
//               input.type = "number";
//               input.min = "1"
//               input.max = "9"
//               box.appendChild(input);
//             }
//         }
//         container.appendChild(row);
//     }
//     el.appendChild(container);
// }
