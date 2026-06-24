import DataTable from "@/components/Admin/Table/DataTable";
import { Button } from "@/components/ui/button";
import { countryHooks } from "@/features/country/hooks/useCountry";
import { generateColumns } from "@/lib/generateColumns";
import { PlusSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {useState } from "react";
import AddCountry from "@/features/country/components/AddCountry";
import { toast } from "sonner";

function AdminCountry() {
  const countryHook = countryHooks();
  const { data, isLoading, isError } = countryHook.useFetchCountries();
  const deleteCountry = countryHook.useDeleteCountry();
  const [addDialog, setAddDialog] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [view, setView] = useState(false);
  const Countries = data?.data?.data || [];
  const columns = generateColumns(Countries, [], (action, row) => {
    console.log("Row from generatedclumns", row);
    setSelectedCountry(row);
    switch (action) {
      case "view":
        setView(true);
        setAddDialog(true);
        break;
      case "edit":
        setEdit(true);
        setAddDialog(true);
        break;
      case "delete":
        setDeleteOpen(true);
        break;
    }
  });

  return (
    <div className="flex flex-col gap-3">
      <section className="flex justify-between items-center">
        <p>Countries</p>
        <Button
          variant="greenSolidViewButton"
          className=""
          onClick={() => setAddDialog(true)}
        >
          <p className="flex items-center gap-2">
            <PlusSquare className="size-5" strokeWidth={2} />
            Add New Country
          </p>
        </Button>
      </section>
      <Dialog
        open={addDialog}
        onOpenChange={(open) => {
          setAddDialog(open);
          if (!open) {
            setEdit(false);
            setView(false);
          }
        }}
      >
        {" "}
        <DialogContent className="!max-w-[50vw] w-[90vw] h-fit">
          <DialogHeader>
            <DialogTitle>
              {edit
                ? "Edit Country Details"
                : view
                  ? "Country Details"
                  : "Add New Country"}
            </DialogTitle>
          </DialogHeader>
          <AddCountry
            setAddDialog={setAddDialog}
            edit={edit}
            setEdit={setEdit}
            country={selectedCountry}
            view={view}
          />
        </DialogContent>
      </Dialog>
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
          </DialogHeader>
          <div className="flex justify-end gap-2">
            <Button
              variant="greenSolidViewButton"
              className="bg-gray-500 hover:bg-gray-700 border-gray-100"
              onClick={() => setDeleteOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="greenSolidViewButton"
              className="bg-red-500 hover:bg-red-700 border-gray-100"
              onClick={() => {
                if (!selectedCountry) return;

                deleteCountry.mutate(selectedCountry?.id, {
                  onSuccess: (res) => {
                    toast.success(res.message);
                    setDeleteOpen(false);
                    setSelectedCountry(null);
                  },
                });
              }}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p className="text-red-500">Failed to load countries</p>
      ) : Countries.length > 0 ? (
        <DataTable data={Countries} columns={columns} />
      ) : (
        <p>No Data</p>
      )}{" "}
    </div>
  );
}

export default AdminCountry;
