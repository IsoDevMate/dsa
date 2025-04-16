function search(nums: number[], target: number): number {
    let start:number=0
    let end:number=nums.length -1
    //check if the search space is valid
    
    if(start>end){
        return null
    }
    
   
    while(start<= end){
    //get a middle index
    let mid = Math.floor((start + end)/2)
    
    //middle=target
    if (nums[mid] === target){
        return mid
    }    
    //use it to search left 
    if(nums[mid] > target){
        // return search(nums,start,mid-1)
        end=mid-1
    }
    //search right
     else {
            start = mid + 1;
        }
    }
    
    return -1

}