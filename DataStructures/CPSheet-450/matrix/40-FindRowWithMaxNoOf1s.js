function rowWithMax1s(arr, n, m){
    // code here
    let c=0; 
    let r=0;
    let msf = 0;
    let res = 0;
    while(r < n){
        res += arr[r][c];
        if(c === m-1){
            c = 0; 
            r +=1;
            msf = Math.max(msf, res);
            res = 0;
        }else{
            c = c + 1;
        }
  
    }
    return msf;   
}