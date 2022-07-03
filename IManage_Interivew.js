const list = [
    {
      message: "Comment A",
      replies: [
        {
          message: "Reply B",
          replies: [
            {
              message: "Reply D",
              replies: [
                {
                  message: "Reply E",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      message: "Comment C",
      replies: [],
    },
  ];
  
  
  const Comment = React.memo(props) => {
  
      const makeList = function(list){
          list.map((item)=>{
              <div>
                  {item.message}
                  {item.replies && <div>
                    {makeList(item.replies)}
                      </div>
                  }
              </div>
          
          })    
      }
  
      makeList(props.list);
      
      
  }
  
  export default Comment


  -----------------------------


  let str = "TarunKumar";
// no of occurance of chacter
// t = 1
// a = 2
// r = 2
// u = 2
// n = 1
// k = 1
// m = 1

let map = new Map();
for (let i = 0; i < str.length; i++) {
  if (!map.has(str[i])) {
    map.set(str[i], 1);
  } else {
    let count = map.get(str[i]) + 1;
    map.set(str[i], count);
  }
}

console.log(Array.from(map));



--------------------------------------------------

Given a matrix, traverse that in spiral order
// 0 9 8
// 5 6 9
// 3 2 4

// 3x3
// output = 0, 9, 8, 9, 4, 2, 3, 5, 6

Algo: row = 0;
(maxRow) => m;
(maxCol) => m;
col = 0;

row = 1;
col=1;

while (row < maxRow && col <= maxCol) {
  //Traverse the top row
  row++;

  // Traverse last col
  maxCol--;

  if (row < maxRow) {
    //Traverse bottom row
    maxRow--;
  }
  if (col < maxCol) {
    //Traverse left col
    col++;
  }
}
