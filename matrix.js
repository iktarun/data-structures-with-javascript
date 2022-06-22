function traverseSpiralMatrix(mat, m, n) {


    let row = 0;
    let col = 0;
    while(row > m && col > n){

        // Traverse top row
        let temp = mat[row][n-1];
        let k = n-1;

        while(k >= 0){
            mat[row][k] = mat[row][k-1];  
        }
        row++;

        // Traverse right col
        mat[row][n-1] = temp;
        temp = mat[m-1][n-1];

        k = m -1;
        while(k >= row){
            mat[k][n-1] = mat[row][n-1];  
        }
        row++;



        // Traverse Bottom row

        // Traverse left col

    }




}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

k = 4
k = 5 = 1;


k = k % m;



k = 340 % m;


for 1 = 4
traverseSpiralMatrix(matrix, 4, 4);


k > 5
k =1 = 5


