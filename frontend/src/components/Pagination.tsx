import { Button } from "./ui/button";

function Pagination({paginationData,page,setPage}:any)
{
    console.log(paginationData);
return (
    <div>
        <Button>Previous</Button>
        <span>1 of 3</span>
        <Button>Next</Button>
    </div>
)
}
export default Pagination;