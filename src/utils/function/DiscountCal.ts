export const discountCal = (originPrice:any, discountPrice:any) =>{
    
    if(discountPrice < originPrice)
    {
        return Math.floor((1 - discountPrice / originPrice) * 100)
    }
    return 
}